const BREVO_API_URL = "https://api.brevo.com/v3/contacts";
const BREVO_ATTRIBUTES_URL = "https://api.brevo.com/v3/contacts/attributes";
const ATTRIBUTE_CACHE_TTL_MS = 10 * 60 * 1000;

let cachedAttributes: { names: Set<string>; fetchedAt: number } | null = null;

const ALLOWED = {
  moment: ["Matin", "Midi", "Soir"],
  disponibilite: ["Semaine", "Week-end", "Les deux"],
  recherche: ["Activité régulière", "Activité ponctuelle", "Les deux"],
  partenaire: ["Seul(e)", "Avec un(e) partenaire", "Peu importe"],
  motivation: ["Me remettre au sport", "Bouger régulièrement", "Rencontrer du monde", "Me défouler"],
  activityType: ["Bien-être", "Outdoor", "Cardio", "Renforcement", "Ouvert(e)"],
} as const;

const normalize = (value: unknown): string =>
  String(value ?? "")
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const toStringArray = (value: unknown): string[] => {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
};

const toSingleValue = (value: unknown): string => {
  if (Array.isArray(value)) {
    return String(value[0] ?? "").trim();
  }

  return String(value ?? "").trim();
};

const isAffirmative = (value: unknown): boolean => {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value === 1;

  const normalized = normalize(value);
  return ["true", "1", "yes", "oui", "on"].includes(normalized);
};

const pickAllowed = (values: string[], allowed: readonly string[]): string[] => {
  const allowedMap = new Map(allowed.map((item) => [normalize(item), item]));

  return Array.from(
    new Set(
      values
        .map((item) => allowedMap.get(normalize(item)))
        .filter((item): item is string => Boolean(item)),
    ),
  );
};

const parseBody = (body: unknown): Record<string, unknown> => {
  if (!body) return {};
  if (typeof body === "string") {
    try {
      return JSON.parse(body) as Record<string, unknown>;
    } catch {
      return {};
    }
  }

  if (typeof body === "object") {
    return body as Record<string, unknown>;
  }

  return {};
};

const setFirstExistingAttribute = (
  target: Record<string, string | string[]>,
  availableAttributes: Set<string>,
  candidates: string[],
  value: string | string[],
) => {
  for (const candidate of candidates) {
    const upperCandidate = candidate.toUpperCase();
    if (availableAttributes.has(upperCandidate)) {
      target[upperCandidate] = value;
      return;
    }
  }
};

const setAllExistingAttributes = (
  target: Record<string, string | string[]>,
  availableAttributes: Set<string>,
  candidates: string[],
  value: string | string[],
): number => {
  let assignedCount = 0;

  for (const candidate of candidates) {
    const upperCandidate = candidate.toUpperCase();
    if (availableAttributes.has(upperCandidate)) {
      target[upperCandidate] = value;
      assignedCount += 1;
    }
  }

  return assignedCount;
};

const fetchBrevoAttributeNames = async (apiKey: string): Promise<Set<string>> => {
  if (cachedAttributes && Date.now() - cachedAttributes.fetchedAt < ATTRIBUTE_CACHE_TTL_MS) {
    return cachedAttributes.names;
  }

  const response = await fetch(BREVO_ATTRIBUTES_URL, {
    headers: {
      "api-key": apiKey,
    },
  });

  if (!response.ok) {
    throw new Error(`Cannot fetch Brevo attributes (${response.status})`);
  }

  const responseBody = (await response.json()) as {
    attributes?: Array<{ name?: string }>;
    normal?: Array<{ name?: string }>;
    category?: Array<{ name?: string }>;
    transactional?: Array<{ name?: string }>;
    calculated?: Array<{ name?: string }>;
  };

  const allGroups = [
    responseBody.attributes,
    responseBody.normal,
    responseBody.category,
    responseBody.transactional,
    responseBody.calculated,
  ];

  const names = new Set<string>();

  for (const group of allGroups) {
    for (const item of group ?? []) {
      if (item?.name) {
        names.add(item.name.toUpperCase());
      }
    }
  }

  cachedAttributes = { names, fetchedAt: Date.now() };

  return names;
};

const buildAttributes = (payload: Record<string, unknown>, availableAttributes: Set<string>) => {
  const firstName = toSingleValue(payload.firstName || payload.name);
  const phone = toSingleValue(payload.phone);
  const city = toSingleValue(payload.city);
  const postalCode = toSingleValue(payload.postalCode);
  const rgpdConsent = isAffirmative(payload.gdpr ?? payload.rgpd) ? "Oui" : "Non";

  const usage = toSingleValue(payload.usage);
  const rechercheInput = usage ? [usage] : toStringArray(payload.recherche);

  const attributes: Record<string, string | string[]> = {};

  setFirstExistingAttribute(attributes, availableAttributes, ["SOURCE", "ORIGINE"], toSingleValue(payload.source) || "site");

  const moment = pickAllowed(toStringArray(payload.moments || payload.moment), ALLOWED.moment);
  const disponibilite = pickAllowed(toStringArray(payload.dispo || payload.disponibilite), ALLOWED.disponibilite);
  const recherche = pickAllowed(rechercheInput, ALLOWED.recherche);
  const partenaire = pickAllowed(toStringArray(payload.partenaire), ALLOWED.partenaire);
  const motivation = pickAllowed(toStringArray(payload.motivations), ALLOWED.motivation);
  const activityType = pickAllowed(toStringArray(payload.activityTypes), ALLOWED.activityType);

  if (firstName) {
    setFirstExistingAttribute(attributes, availableAttributes, ["FIRSTNAME", "PRENOM", "FIRST_NAME"], firstName);
  }

  if (city) {
    setFirstExistingAttribute(attributes, availableAttributes, ["CITY", "VILLE"], city);
  }

  if (postalCode) {
    setFirstExistingAttribute(
      attributes,
      availableAttributes,
      ["ZIPCODE", "POSTAL_CODE", "CODE_POSTAL", "CODEPOSTAL"],
      postalCode,
    );
  }

  const consentAttributesAssigned = setAllExistingAttributes(
    attributes,
    availableAttributes,
    ["RGPD", "GDPR", "CONSENT", "CONSENTEMENT", "RGPD_CONSENT"],
    rgpdConsent,
  );

  if (consentAttributesAssigned === 0) {
    attributes.RGPD = rgpdConsent;
  }

  if (phone) {
    setFirstExistingAttribute(attributes, availableAttributes, ["SMS", "PHONE", "TELEPHONE"], phone);
  }
  if (moment.length) setFirstExistingAttribute(attributes, availableAttributes, ["MOMENT", "SLOTS"], moment);
  if (disponibilite.length) setFirstExistingAttribute(attributes, availableAttributes, ["DISPONIBILITE"], disponibilite);
  if (recherche.length) setFirstExistingAttribute(attributes, availableAttributes, ["RECHERCHE"], recherche);
  if (partenaire.length) setFirstExistingAttribute(attributes, availableAttributes, ["PARTENAIRE"], partenaire);
  if (motivation.length) setFirstExistingAttribute(attributes, availableAttributes, ["MOTIVATION"], motivation);
  if (activityType.length) setFirstExistingAttribute(attributes, availableAttributes, ["ACTIVITYTYPE"], activityType);

  return attributes;
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (!apiKey) {
    res.status(500).json({ error: "Missing BREVO_API_KEY" });
    return;
  }

  if (!Number.isFinite(listId)) {
    res.status(500).json({ error: "Missing or invalid BREVO_LIST_ID" });
    return;
  }

  const body = parseBody(req.body);
  const email = toSingleValue(body.email);

  if (!email) {
    res.status(400).json({ error: "Missing email" });
    return;
  }

  let availableAttributes: Set<string>;
  try {
    availableAttributes = await fetchBrevoAttributeNames(apiKey);
  } catch (error) {
    res.status(502).json({
      error: "Cannot fetch Brevo attributes",
      details: error instanceof Error ? error.message : "Unknown error",
    });
    return;
  }

  const brevoPayload = {
    email,
    listIds: [listId],
    updateEnabled: true,
    attributes: buildAttributes(body, availableAttributes),
  };

  try {
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(brevoPayload),
    });

    const responseBody = await response.json().catch(() => null);

    if (!response.ok) {
      res.status(response.status).json({
        error: "Brevo API error",
        details: responseBody,
      });
      return;
    }

    res.status(200).json({ ok: true, id: responseBody?.id ?? null });
  } catch (error) {
    res.status(502).json({
      error: "Brevo request failed",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
