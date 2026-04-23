export const WHATSAPP_URL =
  "https://wa.me/33759933888?text=Salut%20MSP%2C%20oui%20%C3%A7a%20m'int%C3%A9resse.%20Comment%20ca%20marche%20%3F%20%3A)";

export const CONVERSION_SECTION_ID = "waitlist-form";
export const PRIMARY_CTA_LABEL = "On m’organise ma séance";
export const SECONDARY_CTA_LABEL = "Je me lance simplement";
export const CTA_SUBTEXT = "Réponse immédiate sur WhatsApp, en privé";
export const CTA_MICRO_REASSURANCE = "Pas de groupe WhatsApp. Juste un échange rapide.";
export const EMAIL_ALT_CTA_LABEL = "Recevoir les prochaines activités près de chez moi";

export const scrollToConversionSection = () => {
  document.getElementById(CONVERSION_SECTION_ID)?.scrollIntoView({ behavior: "smooth", block: "start" });
};
