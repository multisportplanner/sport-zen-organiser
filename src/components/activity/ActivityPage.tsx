import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  CalendarDays,
  Settings,
  MessageSquare,
  Smile,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import {
  CTA_MICRO_REASSURANCE,
  CTA_SUBTEXT,
  OCCASIONAL_CTA_LABEL,
  WHATSAPP_URL,
  trackCtaClick,
} from "@/lib/cta";

export interface IconLabel {
  icon: LucideIcon;
  label: string;
  description?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  credit?: string;
}

export interface PlaceCard {
  name: string;
  location: string;
  description: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface RelatedActivity {
  icon: LucideIcon;
  label: string;
  href?: string;
}

export interface LocalSeoBlock {
  title: string;
  description: string;
}

export interface ReadAlsoCard {
  title: string;
  description: string;
  href?: string;
}

export interface ActivityPageProps {
  slug: string;
  seo: { title: string; description: string };
  hero: { h1: string; subtitle: string; intro: string };
  gallery?: { images: GalleryImage[] };
  whatIsIt: {
    title: string;
    intro?: string[];
    items: IconLabel[];
    outro?: string[];
  };
  whyTry: {
    title: string;
    intro?: string;
    cards: IconLabel[];
    outro?: string[];
  };
  whyAppealing: {
    title: string;
    intro?: string;
    outro?: string;
    pillars: IconLabel[];
  };
  intermediateCta?: { title: string; text: string };
  places: { title: string; intro?: string; cards: PlaceCard[] };
  audience: { title: string; intro?: string; profiles: IconLabel[] };
  reassurance: { title: string; items: FAQItem[] };
  localSeo: {
    title: string;
    paragraphs: string[];
    blocksTitle?: string;
    blocks?: LocalSeoBlock[];
  };
  faq: { title?: string; items: FAQItem[] };
  related: { title: string; items: RelatedActivity[] };
  readAlso?: { title: string; cards: ReadAlsoCard[] };
  howItWorks?: { steps: { title: string; desc: string }[] };
  finalCta: { title: string; text?: string };
}

const ctaClick = (location: "hero" | "final_block" | "mid_article") => {
  trackCtaClick({
    cta_location: location,
    page_type: "blog",
    cta_label: OCCASIONAL_CTA_LABEL,
    destination: "whatsapp",
  });
};

const stepIcons = [CalendarDays, Settings, MessageSquare, Smile];

const defaultSteps = [
  { title: "Tu nous contactes", desc: "Un message rapide sur WhatsApp." },
  {
    title: "Tu nous expliques",
    desc: "Ce que tu recherches, tes envies, ton niveau.",
  },
  {
    title: "On trouve la sortie",
    desc: "Un partenaire de confiance, un lieu, un créneau.",
  },
  {
    title: "Tu profites",
    desc: "Plus rien à organiser, juste à vivre l'expérience.",
  },
];

export const ActivityPage = ({
  slug,
  seo,
  hero,
  gallery,
  whatIsIt,
  whyTry,
  whyAppealing,
  intermediateCta,
  places,
  audience,
  reassurance,
  localSeo,
  howItWorks,
  faq,
  related,
  readAlso,
  finalCta,
}: ActivityPageProps) => {
  useEffect(() => {
    document.title = seo.title;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(
        `meta[name="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta("description", seo.description);

    const canonicalHref = `/activites/${slug}`;
    let canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    const previous = canonical?.href;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);

    return () => {
      if (canonical && previous) canonical.setAttribute("href", previous);
    };
  }, [seo.title, seo.description, slug]);

  const pageSteps = howItWorks?.steps ?? defaultSteps;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* HERO */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/10 blur-3xl" />
          </div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4 uppercase">
                {hero.h1}
              </h1>
              <p className="text-lg md:text-xl font-semibold text-foreground mb-4">
                {hero.subtitle}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
                {hero.intro}
              </p>
              <Button
                asChild
                variant="cta"
                size="lg"
                className="h-14 px-10 text-lg"
                onClick={() => ctaClick("hero")}
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {OCCASIONAL_CTA_LABEL}
                </a>
              </Button>
              <p className="text-xs text-muted-foreground/70 mt-3">
                {CTA_SUBTEXT}
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                {CTA_MICRO_REASSURANCE}
              </p>
            </motion.div>
          </div>
        </section>

        {/* GALLERY */}
        {gallery && (
          <section className="py-16">
            <div className="container">
              <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {gallery.images.map((image, i) => (
                  <motion.figure
                    key={image.src}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-card rounded-2xl overflow-hidden shadow-card"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                    <figcaption className="p-4">
                      <p className="text-sm font-semibold">{image.title}</p>
                      {image.credit && (
                        <p className="text-xs text-muted-foreground/70 mt-1">
                          {image.credit}
                        </p>
                      )}
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* WHAT IS IT */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
              {whatIsIt.title.split(",")[0]},{" "}
              <span className="text-gradient">
                {whatIsIt.title.split(",").slice(1).join(",").trim() ||
                  "c'est quoi ?"}
              </span>
            </h2>
            {whatIsIt.intro && (
              <div className="max-w-2xl mx-auto space-y-4 text-center text-muted-foreground text-base leading-relaxed mb-12">
                {whatIsIt.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {whatIsIt.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card rounded-2xl p-5 shadow-card text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-hero-soft flex items-center justify-center mx-auto mb-2">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
            {whatIsIt.outro && (
              <div className="max-w-2xl mx-auto space-y-4 text-center text-muted-foreground text-base leading-relaxed mt-12">
                {whatIsIt.outro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* WHY TRY (4 cards) */}
        <section className="py-24">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
              {whyTry.title.split("?")[0]}
              <span className="text-gradient">?</span>
            </h2>
            {whyTry.intro && (
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                {whyTry.intro}
              </p>
            )}
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyTry.cards.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-2xl p-6 shadow-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero-soft flex items-center justify-center mb-4">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base font-bold mb-2">{c.label}</h3>
                  {c.description && (
                    <p className="text-sm text-muted-foreground">
                      {c.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
            {whyTry.outro && (
              <div className="max-w-2xl mx-auto space-y-4 text-center text-muted-foreground text-base leading-relaxed mt-12">
                {whyTry.outro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* WHY APPEALING (pillars) */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              {whyAppealing.title}
            </h2>
            {whyAppealing.intro && (
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                {whyAppealing.intro}
              </p>
            )}
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
              {whyAppealing.pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-card rounded-2xl p-5 shadow-card text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-hero-soft flex items-center justify-center mx-auto mb-2">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm">{p.label}</p>
                  {p.description && (
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {p.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
            {whyAppealing.outro && (
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-12 leading-relaxed">
                {whyAppealing.outro}
              </p>
            )}
          </div>
        </section>

        {/* INTERMEDIATE CTA */}
        {intermediateCta && (
          <section className="py-20">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto bg-card rounded-3xl p-8 md:p-10 shadow-card text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {intermediateCta.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                  {intermediateCta.text}
                </p>
                <Button
                  asChild
                  variant="cta"
                  size="lg"
                  className="h-14 px-10 text-lg"
                  onClick={() => ctaClick("mid_article")}
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {OCCASIONAL_CTA_LABEL}
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground/70 mt-3">
                  {CTA_SUBTEXT}
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  {CTA_MICRO_REASSURANCE}
                </p>
              </motion.div>
            </div>
          </section>
        )}

        {/* PLACES */}
        <section className="py-24">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
              {places.title}
            </h2>
            {places.intro && (
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                {places.intro}
              </p>
            )}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
              {places.cards.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-2xl p-6 shadow-card"
                >
                  <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-primary font-medium mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{p.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {p.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AUDIENCE */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
              {audience.title}
            </h2>
            {audience.intro && (
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                {audience.intro}
              </p>
            )}
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
              {audience.profiles.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-card rounded-2xl p-5 shadow-card text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-hero-soft flex items-center justify-center mx-auto mb-2">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm">{p.label}</p>
                  {p.description && (
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {p.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* REASSURANCE */}
        <section className="py-24">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                {reassurance.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {reassurance.items.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`r-${i}`}
                    className="bg-card rounded-xl px-6 shadow-card border-none"
                  >
                    <AccordionTrigger className="text-left font-semibold text-sm hover:no-underline py-4">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm pb-4">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* LOCAL SEO */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                {localSeo.title}
              </h2>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                {localSeo.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {localSeo.blocks && (
                <div className="mt-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                    {localSeo.blocksTitle ??
                      "Où faire du canyoning dans les Alpes-Maritimes ?"}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {localSeo.blocks.map((block) => (
                      <div
                        key={block.title}
                        className="bg-card rounded-2xl p-5 shadow-card"
                      >
                        <h4 className="font-bold mb-2">{block.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {block.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* HOW MSP WORKS */}
        <section className="py-24">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Comment fonctionne <span className="text-gradient">MSP ?</span>
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {pageSteps.map((s, i) => {
                const Icon = stepIcons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-hero mx-auto mb-5 flex items-center justify-center shadow-glow">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-3">
                      {i + 1}
                    </div>
                    <h3 className="text-lg font-bold mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                Questions <span className="text-gradient">fréquentes</span>
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {faq.items.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-card rounded-xl px-6 shadow-card border-none"
                  >
                    <AccordionTrigger className="text-left font-semibold text-sm hover:no-underline py-4">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm pb-4">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="py-24">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              {related.title}
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
              {related.items.map((r, i) => {
                const Inner = (
                  <>
                    <div className="w-10 h-10 rounded-xl bg-gradient-hero-soft flex items-center justify-center mx-auto mb-2">
                      <r.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-semibold text-sm">{r.label}</p>
                  </>
                );
                const className =
                  "bg-card rounded-2xl p-5 shadow-card text-center block hover:shadow-card-hover active:shadow-card transition-shadow cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2";
                return r.href ? (
                  <Link
                    key={i}
                    to={r.href}
                    className={className}
                    aria-label={`Découvrir la page ${r.label}`}
                  >
                    {Inner}
                  </Link>
                ) : (
                  <div key={i} className={className}>
                    {Inner}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* READ ALSO */}
        {readAlso && (
          <section className="py-24 bg-muted/30">
            <div className="container">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                {readAlso.title}
              </h2>
              <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {readAlso.cards.map((card) => {
                  const content = (
                    <>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">
                        {card.href ? "Lire l'article" : "Bientôt disponible"}
                      </p>
                      <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </>
                  );

                  return card.href ? (
                    <Link
                      key={card.title}
                      to={card.href}
                      className="bg-card rounded-2xl p-6 shadow-card opacity-90 block hover:shadow-card-hover active:shadow-card transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                    >
                      {content}
                    </Link>
                  ) : (
                    <article
                      key={card.title}
                      className="bg-card rounded-2xl p-6 shadow-card opacity-90"
                      aria-disabled="true"
                    >
                      {content}
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* FINAL CTA */}
        <section className="py-32 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                {finalCta.title.split("?")[0]}
                <span className="text-gradient">?</span>
              </h2>
              {finalCta.text && (
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
                  {finalCta.text}
                </p>
              )}
              <Button
                asChild
                variant="cta"
                size="lg"
                className="h-14 px-10 text-lg"
                onClick={() => ctaClick("final_block")}
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {OCCASIONAL_CTA_LABEL}
                </a>
              </Button>
              <p className="text-xs text-muted-foreground/70 mt-3">
                {CTA_SUBTEXT}
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                {CTA_MICRO_REASSURANCE}
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  );
};

export default ActivityPage;
