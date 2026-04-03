const BREVO_API_URL = "https://api.brevo.com/v3/contacts";

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

const pickAllowed = (values: string[], allowed: string[]): string[] => {
  const allowedMap = new Map(allowed.map((item) => [normalize(item), item]));

  return Array.from(
    new Set(
      values
        .map((item) => allowedMap.get(normalize(item)))
        .filter((item): item is string => Boolean(item)),
    ),
  );
};

const buildAttributes = (payload: Record<string, unknown>) => {
  const firstName = toSingleValue(payload.firstName || payload.name);
  const city = toSingleValue(payload.city);
  const postalCode = toSingleValue(payload.postalCode);

  const moments = pickAllowed(toStringArray(payload.moments || payload.moment), ["Matin", "Midi", "Soir"]);
  const disponibilites = pickAllowed(toStringArray(payload.dispo || payload.disponibilite), [
    "Semaine",
    "Week-end",
    "Les deux",
  ]);

  const usage = toSingleValue(payload.usage);
  const recherche = usage ? [usage] : pickAllowed(toStringArray(payload.recherche), ["Activité régulière", "Activité ponctuelle", "Les deux"]);

  const partnerPreferences = toStringArray(payload.partenaire);
  const motivations = toStringArray(payload.motivations);
  const activityTypes = toStringArray(payload.activityTypes);
  const sports = toSingleValue(payload.sports);
  const zones = toSingleValue(payload.zones);
  const phone = toSingleValue(payload.phone);
  const partnerType = toSingleValue(payload.partnerType);
  const activities = toSingleValue(payload.activities);
  const message = toSingleValue(payload.message);
  const source = toSingleValue(payload.source) || "site";

  const attributes: Record<string, string | string[]> = {
    SOURCE: source,
  };

  if (firstName) attributes.FIRSTNAME = firstName;
  if (city) attributes.CITY = city;
  if (postalCode) attributes.POSTAL_CODE = postalCode;
  if (phone) attributes.SMS = phone;
  if (moments.length) attributes.MOMENT = moments;
  if (disponibilites.length) attributes.DISPONIBILITE = disponibilites;
  if (recherche.length) attributes.RECHERCHE = recherche;
  if (partnerPreferences.length) attributes.PARTENAIRE = partnerPreferences;
  if (motivations.length) attributes.MOTIVATION = motivations;
  if (activityTypes.length) attributes.ACTIVITYTYPE = activityTypes;
  if (sports) attributes.SPORTS = [sports];
  if (zones) attributes.ZONES = [zones];
  if (partnerType) attributes.PARTNERTYPE = [partnerType];
  if (activities) attributes.ACTIVITIES = [activities];
  if (message) attributes.MESSAGE = [message];

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

  const email = toSingleValue(req.body?.email);

  if (!email) {
    res.status(400).json({ error: "Missing email" });
    return;
  }

  const payload = {
    email,
    listIds: [listId],
    updateEnabled: true,
    attributes: buildAttributes(req.body ?? {}),
  };

  try {
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(payload),
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
