import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Compass,
  MapPin,
  MessageSquare,
  RefreshCcw,
  Settings,
  Smile,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  CTA_MICRO_REASSURANCE,
  CTA_SUBTEXT,
  WHATSAPP_URL,
  trackCtaClick,
} from "@/lib/cta";

const ACTIVITY_CTA_LABEL = "Découvrir l’activité";
const WHATSAPP_ACTIVITY_LABEL = "On m’organise une activité";
const WHATSAPP_PROJECT_LABEL = "Discuter de mon projet sportif";

const activities = [
  {
    title: "Canyoning",
    description:
      "Descendre un canyon, glisser dans des vasques naturelles et découvrir l’arrière-pays autrement.",
    href: "/activites/canyoning",
    image: "/icons/msp-activities/canyoning.svg",
  },
  {
    title: "Rafting",
    description:
      "Partager une descente en eau vive, avec de l’énergie, du collectif et un encadrement adapté.",
    href: "/activites/rafting",
    image: "/activites/rafting.svg",
  },
  {
    title: "Kayak",
    description:
      "Explorer le littoral, les criques et la Côte d’Azur depuis l’eau, à ton rythme.",
    href: "/activites/kayak",
    image: "/icons/msp-activities/kayak.svg",
  },
  {
    title: "Paddle",
    description:
      "Profiter d’une activité nautique accessible, calme ou sportive selon tes envies du moment.",
    href: "/activites/paddle",
    image: "/activites/paddle.svg",
  },
  {
    title: "Escalade",
    description:
      "Prendre de la hauteur, progresser en confiance et vivre une activité sportive en pleine nature.",
    href: "/activites/escalade",
    image: "/activites/escalade.svg",
  },
  {
    title: "Via Ferrata",
    description:
      "Découvrir une aventure verticale entre randonnée, escalade facile et panorama spectaculaire.",
    href: "/activites/via-ferrata",
    image: "/activites/via-ferrata.svg",
  },
];

const whyCards = [
  {
    icon: Compass,
    title: "Découvrir de nouveaux endroits",
    description:
      "Changer de décor sans partir loin, entre mer, montagne et arrière-pays des Alpes-Maritimes.",
  },
  {
    icon: RefreshCcw,
    title: "Sortir de sa routine",
    description:
      "Remplacer la séance habituelle par une expérience qui donne envie de bouger autrement.",
  },
  {
    icon: Users,
    title: "Rencontrer d’autres personnes",
    description:
      "Partager une sortie avec un groupe adapté, sans devoir tout organiser toi-même.",
  },
  {
    icon: Smile,
    title: "Retrouver le plaisir de bouger",
    description:
      "Faire du sport sans pression de performance, juste pour le plaisir et les sensations.",
  },
];

const steps = [
  {
    icon: CalendarDays,
    number: "1",
    title: "Tu nous contactes",
    desc: "Un message rapide pour lancer l’échange.",
  },
  {
    icon: MessageSquare,
    number: "2",
    title: "Tu nous expliques tes envies",
    desc: "Activité, niveau, zone, disponibilités et attentes.",
  },
  {
    icon: Settings,
    number: "3",
    title: "Nous trouvons une activité adaptée",
    desc: "MSP cherche une option cohérente avec ton profil.",
  },
  {
    icon: Smile,
    number: "4",
    title: "Tu profites",
    desc: "Tu reçois les infos utiles et tu vis l’expérience.",
  },
];

const faqs = [
  {
    q: "Comment choisir une activité sportive ?",
    a: "Le plus simple est de partir de tes envies : fraîcheur, sensations, découverte, nature, effort doux ou moment partagé. MSP t’aide ensuite à trouver une activité sportive sur la Côte d’Azur adaptée à ton niveau, à ta zone et à ton emploi du temps.",
  },
  {
    q: "Peut-on découvrir une activité quand on débute ?",
    a: "Oui. Beaucoup d’activités outdoor dans les Alpes-Maritimes peuvent se découvrir avec un encadrement adapté. L’objectif est de choisir une sortie cohérente avec ton niveau, tes appréhensions éventuelles et les conditions du moment.",
  },
  {
    q: "MSP organise-t-il directement les activités ?",
    a: "MSP facilite l’organisation : tu nous expliques ce que tu recherches, puis nous t’aidons à identifier une activité, un format, un créneau et des options adaptées avec des professionnels ou partenaires locaux quand c’est nécessaire.",
  },
  {
    q: "Comment trouver une activité près de chez moi ?",
    a: "Indique-nous ta zone habituelle, par exemple Nice, Antibes, Cannes, Sophia Antipolis ou une autre commune des Alpes-Maritimes. MSP recherche une activité près de chez toi, de ton travail ou de l’endroit où tu aimes bouger.",
  },
  {
    q: "Quelles activités peut-on pratiquer sur la Côte d’Azur ?",
    a: "La Côte d’Azur permet de pratiquer de nombreuses activités nature et sportives : canyoning, rafting, kayak, paddle, escalade, via ferrata, randonnée, sports collectifs, running, golf, pickleball, renforcement musculaire ou sport santé selon la saison et les disponibilités.",
  },
  {
    q: "Comment fonctionne MSP ?",
    a: "Tu contactes MSP, tu expliques tes envies, ton niveau et tes disponibilités. Nous t’aidons à trouver une activité adaptée, puis tu profites sans gérer toute l’organisation de ton côté.",
  },
];

const setMeta = (name: string, content: string) => {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
};

const trackWhatsAppCta = (location: "hero" | "mid_article" | "final_block") => {
  trackCtaClick({
    cta_location: location,
    page_type: "blog",
    cta_label: WHATSAPP_ACTIVITY_LABEL,
    destination: "whatsapp",
  });
};

const Activites = () => {
  useEffect(() => {
    document.title = "Activités sportives sur la Côte d’Azur | MultiSport Planner";
    setMeta(
      "description",
      "Découvrez des activités sportives et outdoor sur la Côte d’Azur. Canyoning, rafting, kayak, paddle, escalade, via ferrata et bien plus encore.",
    );

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const previous = canonical?.href;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "/activites");

    return () => {
      if (canonical && previous) canonical.setAttribute("href", previous);
    };
  }, []);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
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
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-5">
                Trouve une activité sportive qui te correspond
              </h1>
              <p className="text-lg md:text-xl font-semibold text-foreground mb-6">
                Découvre de nouvelles façons de bouger sur la Côte d’Azur sans t’occuper de l’organisation.
              </p>
              <div className="max-w-2xl mx-auto space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
                <p>Tu as envie de faire du sport mais tu ne sais pas quoi choisir&nbsp;?</p>
                <p>
                  Que tu recherches une activité outdoor, nautique, nature ou plus sportive, MSP t’aide à trouver une activité adaptée à tes envies, ton niveau et ton emploi du temps.
                </p>
                <p>Le plus difficile n’est souvent pas de faire du sport.</p>
                <p>C’est de choisir, trouver un groupe et organiser la sortie.</p>
                <p>MSP s’occupe de tout ça pour toi.</p>
              </div>
              <Button
                asChild
                variant="cta"
                size="lg"
                className="h-14 px-10 text-lg"
                onClick={() => trackWhatsAppCta("hero")}
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  {WHATSAPP_ACTIVITY_LABEL}
                </a>
              </Button>
              <p className="text-xs text-muted-foreground/70 mt-3">{CTA_SUBTEXT}</p>
              <p className="text-xs text-muted-foreground/70 mt-1">{CTA_MICRO_REASSURANCE}</p>
            </motion.div>
          </div>
        </section>

        <section id="activites-outdoor" className="py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Activités outdoor <span className="text-gradient">et aventures</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Découvre des activités nature pour sortir du quotidien, explorer la Côte d’Azur autrement et partager des expériences mémorables.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {activities.map((activity, index) => (
                <motion.article
                  key={activity.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-card flex flex-col"
                >
                  <Link to={activity.href} className="block bg-gradient-hero-soft p-8" aria-label={`Découvrir ${activity.title}`}>
                    <img
                      src={activity.image}
                      alt={`${activity.title} sur la Côte d’Azur`}
                      className="h-24 w-24 mx-auto object-contain"
                      loading={index < 3 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold mb-2">{activity.title}</h3>
                    <p className="text-sm text-muted-foreground mb-5 flex-1">{activity.description}</p>
                    <Button asChild variant="cta" size="sm" className="w-full">
                      <Link to={activity.href}>{ACTIVITY_CTA_LABEL}</Link>
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              Pourquoi essayer une <span className="text-gradient">nouvelle activité&nbsp;?</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {whyCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-card rounded-2xl p-6 shadow-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero-soft flex items-center justify-center mb-4">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-hero mx-auto mb-6 flex items-center justify-center shadow-glow">
                <Sparkles className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Tu ne sais pas quelle <span className="text-gradient">activité choisir&nbsp;?</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>Toutes les activités ne correspondent pas aux mêmes envies.</p>
                <p>Certaines permettent de se rafraîchir en été.</p>
                <p>
                  D’autres privilégient l’aventure, la découverte, les sensations ou simplement le plaisir d’être dehors.
                </p>
                <p>MSP peut t’aider à trouver l’activité qui te correspond le mieux.</p>
              </div>
              <Button
                asChild
                variant="cta"
                size="lg"
                className="h-14 px-10 text-lg"
                onClick={() => trackWhatsAppCta("mid_article")}
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  {WHATSAPP_PROJECT_LABEL}
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-card"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-hero-soft flex items-center justify-center mb-5">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <p className="text-sm font-semibold text-primary mb-2">Côte d’Azur · Alpes-Maritimes</p>
                <p className="text-muted-foreground leading-relaxed">
                  Un hub pour trouver une activité sportive Côte d’Azur, une activité outdoor Alpes-Maritimes ou une activité nature Côte d’Azur près de tes repères du quotidien.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Des activités sportives près de Nice, Antibes et Sophia Antipolis
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    MSP aide les personnes qui cherchent du sport à Nice, du sport à Antibes, une activité sportive à Sophia Antipolis ou une sortie nature autour de Cannes.
                  </p>
                  <p>
                    L’idée est simple : découvrir des activités près de chez toi, près de ton travail ou dans ta zone habituelle, sans passer des heures à comparer les options.
                  </p>
                  <p>
                    Que tu habites dans les Alpes-Maritimes ou que tu veuilles profiter de la Côte d’Azur autrement, cette page centralise les activités actuelles et accueillera les futures pages MSP.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="comment-ca-marche" className="py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Comment fonctionne <span className="text-gradient">MSP&nbsp;?</span>
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-hero mx-auto mb-5 flex items-center justify-center shadow-glow">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-3">{step.number}</div>
                  <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                Questions <span className="text-gradient">fréquentes</span>
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.q} value={`faq-${index}`} className="bg-card rounded-2xl px-6 shadow-card border-0">
                    <AccordionTrigger className="text-left font-bold hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-32 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-hero mx-auto mb-6 flex items-center justify-center shadow-glow">
                <Sun className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Prêt à découvrir une <span className="text-gradient">nouvelle activité&nbsp;?</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Dis-nous simplement ce que tu recherches et nous t’aiderons à trouver une activité adaptée.
              </p>
              <Button
                asChild
                variant="cta"
                size="lg"
                className="h-14 px-10 text-lg"
                onClick={() => trackWhatsAppCta("final_block")}
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  {WHATSAPP_ACTIVITY_LABEL}
                </a>
              </Button>
              <p className="text-xs text-muted-foreground/70 mt-3">{CTA_SUBTEXT}</p>
              <p className="text-xs text-muted-foreground/70 mt-1">{CTA_MICRO_REASSURANCE}</p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
};

export default Activites;
