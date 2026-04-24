export const WHATSAPP_URL =
  "https://wa.me/33759933888?text=Salut%20MSP%2C%20oui%20%C3%A7a%20m'int%C3%A9resse.%20Comment%20ca%20marche%20%3F%20%3A)";

export const CONVERSION_SECTION_ID = "conversion-section";
export const PRIMARY_CTA_LABEL = "On m’organise ma séance";
export const OCCASIONAL_CTA_LABEL = "On m’organise ma sortie";
export const CTA_SUBTEXT = "Réponse immédiate sur WhatsApp, en privé";
export const CTA_MICRO_REASSURANCE = "Pas de groupe WhatsApp. Juste un échange rapide.";
export const EMAIL_ALT_CTA_LABEL = "Laisser mon email";

export type CtaLocation =
  | "hero"
  | "header"
  | "mid_article"
  | "end_article"
  | "final_block"
  | "two_ways_section";

export type PageType = "home" | "blog" | "article";
export type CtaDestination = "scroll" | "whatsapp" | "email";

interface TrackCtaClickParams {
  cta_location: CtaLocation;
  page_type: PageType;
  cta_label: string;
  destination: CtaDestination;
  article_slug?: string;
}

const getStickyHeaderOffset = () => {
  if (typeof document === "undefined") return 0;
  const header = document.querySelector("header");
  if (!header) return 0;
  return header.getBoundingClientRect().height;
};

export const scrollToConversionSection = () => {
  if (typeof document === "undefined") return;
  const target = document.getElementById(CONVERSION_SECTION_ID);
  if (!target) return;

  const offset = getStickyHeaderOffset() + 8;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
};

export const trackCtaClick = ({
  cta_location,
  page_type,
  cta_label,
  destination,
  article_slug,
}: TrackCtaClickParams) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "cta_click", {
      cta_location,
      page_type,
      cta_label,
      destination,
      ...(article_slug ? { article_slug } : {}),
    });
  }
};
