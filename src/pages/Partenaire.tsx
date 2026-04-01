import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Users, Eye, TrendingUp, Settings, Check, Rocket,
  MessageSquare, Handshake, CalendarCheck, UserPlus,
  Dumbbell, Mountain, TreePine,
} from "lucide-react";

const valeurs = [
  { icon: UserPlus, title: "De nouveaux participants", text: "MSP vous apporte des pratiquants qualifiés" },
  { icon: Eye, title: "Une visibilité locale ciblée", text: "Touchez une audience sportive sur la Côte d'Azur" },
  { icon: TrendingUp, title: "Une activité supplémentaire", text: "Sans effort marketing de votre côté" },
  { icon: Settings, title: "Une organisation simplifiée", text: "MSP gère les inscriptions et la logistique" },
];

const etapes = [
  { icon: MessageSquare, number: "1", title: "On échange", desc: "Pour comprendre votre activité" },
  { icon: Handshake, number: "2", title: "On définit les modalités", desc: "Ensemble, selon votre fonctionnement" },
  { icon: CalendarCheck, number: "3", title: "MSP propose votre activité", desc: "À notre communauté de pratiquants" },
  { icon: Users, number: "4", title: "On constitue les groupes", desc: "Et on gère les inscriptions" },
];

type PartnerType = "Coach" | "Structure sportive" | "Activité outdoor" | "Autre";

const Partenaire = () => {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [structure, setStructure] = useState("");
  const [partnerType, setPartnerType] = useState<PartnerType | "">("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [gdpr, setGdpr] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!firstName.trim()) e.firstName = "Prénom requis";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email invalide";
    if (!gdpr) e.gdpr = "Acceptation requise";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const data = { firstName, email, structure, partnerType, city, message, source: "partenaire" };

    const response = await fetch("https://hook.eu1.make.com/qib3vbg9e53r41ebcgds3nqzivl0qbd3", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("Une erreur est survenue. Merci de réessayer.");
    }
  };

  const scrollToForm = () => {
    document.getElementById("partenaire-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const chipClass = (active: boolean) =>
    `flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
      active
        ? "bg-gradient-hero text-primary-foreground border-transparent shadow-glow"
        : "bg-background border-border text-muted-foreground hover:border-primary/30"
    }`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />
          </div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Proposez vos activités à de <span className="text-gradient">nouveaux participants</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                MSP vous aide à remplir vos séances et à simplifier leur organisation sur la Côte d'Azur.
              </p>
              <Button variant="cta" size="lg" className="h-14 px-10 text-lg" onClick={scrollToForm}>
                Discuter avec nous
              </Button>
              <p className="text-xs text-muted-foreground/70 mt-3">
                Nous vous expliquons comment MSP peut vous apporter des participants
              </p>
            </motion.div>
          </div>
        </section>

        {/* Rassurance */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <p className="text-lg text-muted-foreground">
                Vous continuez à proposer vos activités comme aujourd'hui.
                <br />
                MSP vous apporte simplement des participants en plus.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Rendre le sport plus <span className="text-gradient">simple et plus varié</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Beaucoup de personnes veulent faire du sport, mais se retrouvent limitées par le manque de temps, d'organisation ou d'idées.
                <br /><br />
                MSP simplifie tout. Nous organisons des séances en petit groupe, proches de chez eux, sans charge mentale.
                Et nous permettons aussi de découvrir de nouvelles activités.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pour qui */}
        <section className="py-32 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-4"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Vous proposez une <span className="text-gradient">activité sportive ?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-12">
                MSP vous permet de toucher de nouveaux pratiquants, sans effort supplémentaire.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
              {[
                {
                  icon: Mountain,
                  title: "Activités ponctuelles",
                  text: "Canyoning, kayak, escalade, VTT, paddle, randonnée. MSP vous apporte des groupes sur des sorties ponctuelles",
                },
                {
                  icon: Dumbbell,
                  title: "Activités régulières et structures",
                  text: "Yoga, pilates, renforcement, cross training ou structures sportives. MSP vous apporte des pratiquants sur vos créneaux",
                },
                {
                  icon: TreePine,
                  title: "Vous êtes coach sportif ?",
                  text: "MSP travaille aussi avec des coachs pour encadrer les séances régulières en petit groupe. Vous choisissez vos disponibilités, MSP remplit les groupes",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-card rounded-2xl p-6 shadow-card text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero-soft flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="cta" size="lg" onClick={scrollToForm}>
                Discuter avec nous
              </Button>
            </div>
          </div>
        </section>

        {/* Valeur */}
        <section className="py-32">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-center mb-12"
            >
              Pourquoi collaborer avec <span className="text-gradient">MSP ?</span>
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {valeurs.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-card rounded-2xl px-5 py-5 shadow-card text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-hero-soft flex items-center justify-center mb-3">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fonctionnement */}
        <section className="py-32 bg-muted/30">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-center mb-16"
            >
              <span className="text-gradient">Concrètement</span>
            </motion.h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {etapes.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-hero mx-auto mb-4 flex items-center justify-center shadow-glow">
                    <s.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{s.number}</div>
                  <h3 className="text-sm font-bold mb-1">{s.title}</h3>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration */}
        <section className="py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Une collaboration <span className="text-gradient">simple et transparente</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                Nous définissons ensemble les modalités selon votre activité.
              </p>
              <p className="text-muted-foreground mb-4">
                Vous payez uniquement sur les participants venant de MSP.
              </p>
              <p className="text-muted-foreground">
                MSP propose des conditions avantageuses pour ses premiers partenaires.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Momentum */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <p className="text-lg font-semibold text-foreground mb-2">
                MSP lance actuellement ses premières activités sur la Côte d'Azur.
              </p>
              <p className="text-muted-foreground">
                C'est le moment idéal pour faire partie des premiers partenaires.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Envie d'en <span className="text-gradient">savoir plus ?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Nous vous présentons le fonctionnement et comment MSP peut vous apporter des participants.
              </p>
              <Button variant="cta" size="lg" className="h-14 px-10 text-lg" onClick={scrollToForm}>
                Discuter avec nous
              </Button>
              <p className="text-xs text-muted-foreground/70 mt-3">
                Réponse rapide • Aucun engagement
              </p>
            </motion.div>
          </div>
        </section>

        {/* Formulaire */}
        <section id="partenaire-form" className="py-32 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto"
            >
              {submitted ? (
                <div className="text-center bg-card rounded-3xl p-10 shadow-card">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-hero mx-auto mb-6 flex items-center justify-center shadow-glow">
                    <Rocket className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Merci !</h3>
                  <p className="text-muted-foreground">
                    Nous vous recontactons rapidement pour échanger.
                  </p>
                </div>
              ) : (
                <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
                  <h3 className="text-2xl font-bold text-center mb-2">Discuter avec nous</h3>
                  <p className="text-sm text-muted-foreground text-center mb-8">
                    Remplissez le formulaire, on vous recontacte rapidement.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="p-firstName" className="text-sm font-semibold">Prénom *</Label>
                      <Input id="p-firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Votre prénom" className="mt-1.5" maxLength={100} />
                      {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName}</p>}
                    </div>

                    <div>
                      <Label htmlFor="p-email" className="text-sm font-semibold">Email *</Label>
                      <Input id="p-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.com" className="mt-1.5" maxLength={255} />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <Label htmlFor="p-structure" className="text-sm font-semibold">Structure ou activité</Label>
                      <Input id="p-structure" value={structure} onChange={(e) => setStructure(e.target.value)} placeholder="Nom de votre structure" className="mt-1.5" maxLength={200} />
                    </div>

                    <div>
                      <Label className="text-sm font-semibold mb-2 block">Type de partenaire</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {(["Coach", "Structure sportive", "Activité outdoor", "Autre"] as PartnerType[]).map((t) => (
                          <button key={t} type="button" onClick={() => setPartnerType(t)} className={chipClass(partnerType === t)}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="p-city" className="text-sm font-semibold">Ville</Label>
                      <Input id="p-city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Nice, Antibes, Cannes..." className="mt-1.5" maxLength={100} />
                    </div>

                    <div>
                      <Label htmlFor="p-message" className="text-sm font-semibold">Message</Label>
                      <textarea
                        id="p-message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Présentez-nous brièvement votre activité"
                        className="mt-1.5 flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[80px]"
                        maxLength={1000}
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox id="p-gdpr" checked={gdpr} onCheckedChange={(v) => setGdpr(v === true)} className="mt-0.5" />
                      <Label htmlFor="p-gdpr" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                        J'accepte que mes données soient utilisées pour être recontacté par MSP *
                      </Label>
                    </div>
                    {errors.gdpr && <p className="text-destructive text-xs">{errors.gdpr}</p>}

                    <Button variant="cta" type="submit" className="w-full h-12 text-base">
                      Discuter avec nous
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      Réponse rapide • Aucun engagement
                    </p>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Partenaire;
