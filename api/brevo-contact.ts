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

const normalizePhoneNumber = (value: string): { raw: string; e164: string } => {
  const raw = value.trim();
  const digitsAndPlus = raw.replace(/[^\d+]/g, "");
  const digitsOnly = digitsAndPlus.replace(/\D/g, "");

  if (!digitsOnly) return { raw, e164: "" };

  if (digitsAndPlus.startsWith("+")) {
    return { raw, e164: `+${digitsOnly}` };
  }

  if (digitsOnly.startsWith("00") && digitsOnly.length > 2) {
    return { raw, e164: `+${digitsOnly.slice(2)}` };
  }

  // Normalisation France (06XXXXXXXX, 07XXXXXXXX, 0XXXXXXXXX -> +33XXXXXXXXX)
  if (digitsOnly.length === 10 && digitsOnly.startsWith("0")) {
    return { raw, e164: `+33${digitsOnly.slice(1)}` };
  }

  return { raw, e164: `+${digitsOnly}` };
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
      const params = new URLSearchParams(body);
      if ([...params.keys()].length === 0) return {};

      const parsed: Record<string, unknown> = {};
      for (const [key, value] of params.entries()) {
        parsed[key] = value;
      }
      return parsed;
    }
  }

  if (typeof body === "object") {
    return body as Record<string, unknown>;
  }

  return {};
};

const getFirstEnv = (...keys: string[]): string | undefined => {
  for (const key of keys) {
    const value = process.env[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return undefined;
};

const getPayloadValue = (payload: Record<string, unknown>, ...keys: string[]): unknown => {
  const nestedAttributes =
    payload.attributes && typeof payload.attributes === "object"
      ? (payload.attributes as Record<string, unknown>)
      : undefined;

  for (const key of keys) {
    if (payload[key] !== undefined && payload[key] !== null && String(payload[key]).trim() !== "") {
      return payload[key];
    }
  }

  if (!nestedAttributes) return undefined;

  for (const key of keys) {
    if (
      nestedAttributes[key] !== undefined &&
      nestedAttributes[key] !== null &&
      String(nestedAttributes[key]).trim() !== ""
    ) {
      return nestedAttributes[key];
    }
  }

  return undefined;
};

const toBrevoValue = (value: string | string[]): string => {
  if (Array.isArray(value)) {
    return value.join(", ");
  }

  return value;
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
      target[upperCandidate] = toBrevoValue(value);
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
      target[upperCandidate] = toBrevoValue(value);
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
  const lastName = toSingleValue(getPayloadValue(payload, "lastName", "nom", "NOM", "lname", "LNAME"));
  const firstName = toSingleValue(getPayloadValue(payload, "firstName", "prenom", "PRENOM", "name", "fname", "FNAME"));
  const phone = toSingleValue(getPayloadValue(payload, "phone", "sms", "SMS"));
  const { raw: rawPhone, e164: e164Phone } = normalizePhoneNumber(phone);
  const city = toSingleValue(getPayloadValue(payload, "city", "ville", "VILLE"));
  const postalCode = toSingleValue(getPayloadValue(payload, "postalCode", "codePostal", "CODEPOSTAL"));
  const rgpdConsent = isAffirmative(payload.gdpr ?? payload.rgpd) ? "Oui" : "Non";

  const usage = toSingleValue(payload.usage);
  const rechercheInput = usage
    ? [usage]
    : toStringArray(getPayloadValue(payload, "recherche", "RECHERCHE"));
  const partnerType = toSingleValue(
    getPayloadValue(
      payload,
      "partnerType",
      "partnerTypeLabel",
      "partenaireType",
      "typePartenaire",
      "TYPE_PARTENAIRE",
      "PARTENAIRE_TYPE",
      "PARTNER_TYPE",
      "PARTENAIRE",
      "partenaire",
    ),
  );
  const activities = toSingleValue(getPayloadValue(payload, "activities", "activiteProposee", "ACTIVITEPROPOSEE"));
  const message = toSingleValue(getPayloadValue(payload, "message", "messageLibre", "MESSAGELIBRE"));

  const attributes: Record<string, string | string[]> = {};

  setFirstExistingAttribute(attributes, availableAttributes, ["SOURCE", "ORIGINE"], toSingleValue(payload.source) || "site");

  const moment = pickAllowed(toStringArray(getPayloadValue(payload, "moments", "moment", "MOMENT")), ALLOWED.moment);
  const disponibilite = pickAllowed(
    toStringArray(getPayloadValue(payload, "dispo", "disponibilite", "DISPONIBILITE")),
    ALLOWED.disponibilite,
  );
  const recherche = pickAllowed(rechercheInput, ALLOWED.recherche);
  const partenaire = pickAllowed(toStringArray(payload.partenaire), ALLOWED.partenaire);
  const motivation = pickAllowed(
    toStringArray(getPayloadValue(payload, "motivations", "motivation", "MOTIVATION")),
    ALLOWED.motivation,
  );
  const activityType = pickAllowed(
    toStringArray(
      getPayloadValue(
        payload,
        "activityTypes",
        "activityType",
        "ACTIVITYTYPE",
        "type",
        "TYPE",
        "activite",
        "ACTIVITE",
      ),
    ),
    ALLOWED.activityType,
  );

  if (firstName) {
    setFirstExistingAttribute(
      attributes,
      availableAttributes,
      ["FNAME", "FIRSTNAME", "PRENOM", "FIRST_NAME"],
      firstName,
    );
  }
  if (lastName) {
    setFirstExistingAttribute(
      attributes,
      availableAttributes,
      ["LNAME", "LASTNAME", "NOM", "LAST_NAME"],
      lastName,
    );
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

  setAllExistingAttributes(
    attributes,
    availableAttributes,
    ["RGPD", "GDPR", "CONSENT", "CONSENTEMENT", "RGPD_CONSENT"],
    rgpdConsent,
  );
  // Ne pas injecter d'attribut RGPD "par défaut" si aucun attribut de consentement
  // n'existe côté Brevo : cela provoque une erreur 400 "attribute does not exist".
  // On préfère accepter le contact sans cet attribut plutôt que de faire échouer tout l'envoi.

  if (rawPhone) {
    setAllExistingAttributes(
      attributes,
      availableAttributes,
      ["PHONE", "TELEPHONE"],
      rawPhone,
    );

    if (e164Phone) {
      setAllExistingAttributes(
        attributes,
        availableAttributes,
        ["SMS", "MOBILE"],
        e164Phone,
      );
    }
  }
  if (moment.length) {
    setAllExistingAttributes(
      attributes,
      availableAttributes,
      ["MOMENT", "MOMENTS", "SLOTS"],
      moment,
    );
  }

  if (disponibilite.length) {
    setAllExistingAttributes(
      attributes,
      availableAttributes,
      ["DISPONIBILITE", "DISPONIBILITES", "DISPO"],
      disponibilite,
    );
  }
  if (recherche.length) setFirstExistingAttribute(attributes, availableAttributes, ["RECHERCHE"], recherche);
  if (partenaire.length) setFirstExistingAttribute(attributes, availableAttributes, ["PARTENAIRE"], partenaire);
  if (motivation.length) setFirstExistingAttribute(attributes, availableAttributes, ["MOTIVATION"], motivation);
  if (activityType.length) setFirstExistingAttribute(attributes, availableAttributes, ["ACTIVITYTYPE"], activityType);

  if (partnerType) {
    setAllExistingAttributes(
      attributes,
      availableAttributes,
      [
        "TYPE_PARTENAIRE",
        "TYPEPARTENAIRE",
        "PARTNER_TYPE",
        "PARTENAIRE_TYPE",
        "TYPE_DE_PARTENAIRE",
        "PARTENAIRE_TYPE_LIBELLE",
      ],
      partnerType,
    );
  }

  if (activities) {
    setAllExistingAttributes(
      attributes,
      availableAttributes,
      [
        "ACTIVITES",
        "ACTIVITE",
        "ACTIVITY",
        "TYPE_ACTIVITE",
        "ACTIVITE_PROPOSEE",
        "ACTIVITE_PROPOSE",
        "ACTIVITEPROPOSEE",
        "ACTIVITES_PROPOSEES",
      ],
      activities,
    );
  }

  if (message) {
    setAllExistingAttributes(
      attributes,
      availableAttributes,
      [
        "MESSAGE",
        "MESSAGE_LIBRE",
        "MESSAGELIBRE",
        "COMMENTAIRE",
        "COMMENTAIRES",
        "NOTES",
      ],
      message,
    );
  }

  return attributes;
};

export default async function handler(req: any, res: any) {
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = getFirstEnv("BREVO_API_KEY", "BREVO_V3_API_KEY", "SENDINBLUE_API_KEY");
  const listIdRaw = getFirstEnv("BREVO_LIST_ID", "BREVO_DEFAULT_LIST_ID", "SENDINBLUE_LIST_ID");
  const listId = Number(listIdRaw);

  if (!apiKey) {
    res.status(500).json({ error: "Missing BREVO_API_KEY" });
    return;
  }

  if (!Number.isFinite(listId)) {
    res.status(500).json({ error: "Missing or invalid BREVO_LIST_ID" });
    return;
  }

  const body = parseBody(req.body);
  const email = toSingleValue(getPayloadValue(body, "email", "EMAIL"));

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

  const allAttributes = buildAttributes(body, availableAttributes);

  const brevoPayload = {
    email,
    listIds: [listId],
    updateEnabled: true,
    attributes: allAttributes,
  };

  try {
    const sendToBrevo = async (payload: Record<string, unknown>) => fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    let response = await sendToBrevo(brevoPayload);
    let responseBody = await response.json().catch(() => null);

    // Fallback progressif : si Brevo rejette un attribut, on retire un attribut
    // à la fois (en commençant par les moins critiques) pour conserver le maximum
    // d'informations plutôt que de basculer directement sur email seul.
    if (!response.ok && Object.keys(allAttributes).length > 0) {
      const attributesForRetry: Record<string, string | string[]> = { ...allAttributes };
      const dropOrder = [
        "ACTIVITYTYPE",
        "MOTIVATION",
        "RECHERCHE",
        "PARTENAIRE",
        "MESSAGE",
        "COMMENTAIRE",
        "COMMENTAIRES",
        "MESSAGE_LIBRE",
        "NOTES",
        "ACTIVITES",
        "ACTIVITE",
        "ACTIVITY",
        "TYPE_ACTIVITE",
        "ACTIVITE_PROPOSEE",
        "TYPE_PARTENAIRE",
        "TYPEPARTENAIRE",
        "PARTNER_TYPE",
        "PARTENAIRE_TYPE",
        "SMS",
        // À conserver le plus longtemps possible :
        // ces attributs sont prioritaires pour les formulaires.
        "DISPONIBILITE",
        "DISPONIBILITES",
        "DISPO",
        "MOMENT",
        "MOMENTS",
        "SLOTS",
      ];

      const dropCandidates = [
        ...dropOrder.filter((key) => key in attributesForRetry),
        ...Object.keys(attributesForRetry).filter((key) => !dropOrder.includes(key)),
      ];

      for (const keyToDrop of dropCandidates) {
        delete attributesForRetry[keyToDrop];

        if (Object.keys(attributesForRetry).length === 0) {
          break;
        }

        const retryPayload = {
          email,
          listIds: [listId],
          updateEnabled: true,
          attributes: attributesForRetry,
        };

        const retryResponse = await sendToBrevo(retryPayload);
        const retryBody = await retryResponse.json().catch(() => null);

        if (retryResponse.ok) {
          res.status(200).json({
            ok: true,
            id: retryBody?.id ?? null,
            warning: `Saved contact after dropping attribute ${keyToDrop}`,
            initialError: responseBody,
          });
          return;
        }

        response = retryResponse;
        responseBody = retryBody;
      }
    }

    if (!response.ok) {

      const minimalPayload = {
        email,
        listIds: [listId],
        updateEnabled: true,
      };

      const retryResponse = await sendToBrevo(minimalPayload);
      const retryBody = await retryResponse.json().catch(() => null);

      if (retryResponse.ok) {
        res.status(200).json({
          ok: true,
          id: retryBody?.id ?? null,
          warning: "Saved contact without custom attributes",
          initialError: responseBody,
        });
        return;
      }

      res.status(retryResponse.status).json({
        error: "Brevo API error",
        details: responseBody,
        retryError: retryBody,
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
