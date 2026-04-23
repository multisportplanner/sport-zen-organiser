import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import PostalCodeInput from "@/components/ui/postal-code-input";
import {
  Eye, TrendingUp, Check, Rocket,
  CalendarCheck, UserPlus, Shield,
  Mountain, Dumbbell, Building2,
  ArrowRight, ClipboardList, Users, Heart,
} from "lucide-react";

const avantages = [
  { icon: Eye, text: "Gagnez en visibilité localement" },
  { icon: CalendarCheck, text: "Remplissez vos créneaux sans effort" },
  { icon: Shield, text: "Gardez votre liberté d'organisation" },
  { icon: Check, text: "Aucun engagement" },
  { icon: UserPlus, text: "MSP facilite la mise en relation et les inscriptions" },
];

const etapes = [
  { number: "1", icon: ClipboardList, title: "Vous proposez vos créneaux et votre activité" },
  { number: "2", icon: Users, title: "MSP vous met en relation avec des participants proches" },
  { number: "3", icon: CalendarCheck, title: "MSP facilite les inscriptions" },
  { number: "4", icon: Heart, title: "Vous intervenez, on s'occupe du reste" },
];

type PartnerType = "Guide / encadrant outdoor" | "Coach sportif" | "Structure sportive" | "Autre";

const Partenaire = () => {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [partnerType, setPartnerType] = useState<PartnerType[]>([]);
  const [otherType, setOtherType] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [activities, setActivities] = useState("");
  const [gdpr, setGdpr] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!lastName.trim()) e.lastName = "Nom requis";
    if (!firstName.trim()) e.firstName = "Prénom requis";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email invalide";
    if (!phone.trim()) e.phone = "Téléphone requis";
    if (partnerType.includes("Autre") && !otherType.trim()) e.otherType = "Précise ton activité";
    if (!postalCode.trim() || postalCode.length !== 5) e.postalCode = "Code postal requis (5 chiffres)";
    if (!gdpr) e.gdpr = "Acceptation requise";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const normalizedPartnerType = partnerType
      .map((partnerType) => (partnerType === "Autre" ? `Autre: ${otherType.trim()}` : partnerType))
      .join(", ");

    const data = {
      lastName,
      firstName,
      email,
      phone,
      partner_type: normalizedPartnerType,
      partnerType: normalizedPartnerType,
      partnerTypeLabel: normalizedPartnerType,
      partnerType,
      postalCode,
      city,
      activities,
      source: "partenaire",
      gdpr,
      rgpd: gdpr,
      // Alias explicites demandés / utiles pour Brevo et Make.
      NOM: lastName,
      PRENOM: firstName,
      EMAIL: email,
      SMS: phone,
      VILLE: city,
      CODEPOSTAL: postalCode,
      ACTIVITEPROPOSEE: activities,
      PARTNER_TYPE: normalizedPartnerType,
      attributes: {
        SMS: phone,
        FNAME: firstName,
        LNAME: lastName,
        EMAIL: email,
        NOM: lastName,
        PRENOM: firstName,
        VILLE: city,
        CODEPOSTAL: postalCode,
        ACTIVITEPROPOSEE: activities,
        PARTNER_TYPE: normalizedPartnerType,
      },
    };

    const response = await fetch("/api/brevo-contact", {
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

  useEffect(() => {
    if (location.hash === "#partenaire-form") {
      document.getElementById("partenaire-form")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (location.hash === "#partenaire-top") {
      document.getElementById("partenaire-top")?.scrollIntoView({ behavior: "auto" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.hash]);

  const chipClass = (active: boolean) =>
    `flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
      active
        ? "bg-gradient-hero text-primary-foreground border-transparent shadow-glow"
        : "bg-background border-border text-muted-foreground hover:border-primary/30"
    }`;

  const togglePartnerType = (value: PartnerType) => {
    setPartnerType((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      }

      return [...prev, value];
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section id="partenaire-top" className="relative py-24 md:py-32 overflow-hidden">
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
                DEVENEZ <span className="text-gradient">PARTENAIRE MSP</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/90 mb-3 font-medium">
                Proposez vos activités sportives simplement, sans gérer l'organisation
              </p>
              <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
                MSP vous permet de toucher de nouveaux pratiquants près de chez vous, sans complexifier votre quotidien.
              </p>
              <Button variant="cta" size="lg" className="h-14 px-10 text-lg" onClick={scrollToForm}>
                Devenir partenaire
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Section 1 : Vous proposez une activité sportive */}
        <section className="py-32 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-4"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Vous proposez une <span className="text-gradient">activité sportive</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
                MSP s'adapte à votre manière de travailler.
                <br />
                Que vous encadriez des sorties ponctuelles ou des séances régulières, nous vous apportons des participants sans effort supplémentaire.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Mountain,
                  title: "Vous êtes guide ou encadrant outdoor",
                  text: "Randonnée, activités outdoor, sorties nature, etc. Proposez vos sorties ponctuelles le week-end ou pendant les vacances, MSP vous aide à compléter vos groupes.",
                },
                {
                  icon: Dumbbell,
                  title: "Vous êtes coach sportif",
                  text: "Remise en forme, bien-être, renforcement, mobilité, reprise en douceur… MSP vous permet de proposer vos séances à des pratiquants proches de chez vous.",
                },
                {
                  icon: Building2,
                  title: "Vous gérez une structure sportive",
                  text: "Salle de sport, studio, association ou club. Valorisez vos créneaux disponibles et accueillez de nouveaux participants.",
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
          </div>
        </section>

        {/* Section 2 : Pourquoi rejoindre MSP */}
        <section className="py-32">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-center mb-12"
            >
              Pourquoi rejoindre <span className="text-gradient">MSP</span>
            </motion.h2>

            <div className="max-w-2xl mx-auto space-y-4">
              {avantages.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-4 bg-card rounded-2xl px-5 py-4 shadow-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-hero-soft flex items-center justify-center shrink-0">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 : Concrètement */}
        <section className="py-32 bg-muted/30">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-center mb-16"
            >
              Concrètement, comment <span className="text-gradient">ça marche ?</span>
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
                  <p className="text-sm font-medium text-foreground">{s.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulaire */}
        <section id="partenaire-form" className="py-32">
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
                  <h3 className="text-2xl font-bold text-center mb-2">Rejoindre MSP</h3>
                  <p className="text-sm text-muted-foreground text-center mb-8">
                    Remplissez le formulaire, on vous recontacte rapidement.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="p-lastName" className="text-sm font-semibold">Nom *</Label>
                      <Input id="p-lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Votre nom" className="mt-1.5" maxLength={100} />
                      {errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName}</p>}
                    </div>

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
                      <Label htmlFor="p-phone" className="text-sm font-semibold">Téléphone *</Label>
                      <Input id="p-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="06 00 00 00 00" className="mt-1.5" maxLength={20} />
                      {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <Label className="text-sm font-semibold mb-2 block">Type de partenaire</Label>
                      <input type="hidden" name="partner_type" value={partnerType.join(", ")} />
                      <div className="grid grid-cols-1 gap-3">
                        {(["Guide / encadrant outdoor", "Coach sportif", "Structure sportive", "Autre"] as PartnerType[]).map((t) => (
                          <button key={t} type="button" name="partner_type" value={t} onClick={() => togglePartnerType(t)} className={chipClass(partnerType.includes(t))}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {partnerType.includes("Autre") && (
                      <div>
                        <Label htmlFor="p-otherType" className="text-sm font-semibold">Précise ton activité *</Label>
                        <Input id="p-otherType" value={otherType} onChange={(e) => setOtherType(e.target.value)} placeholder="Votre type d'activité" className="mt-1.5" maxLength={200} />
                        {errors.otherType && <p className="text-destructive text-xs mt-1">{errors.otherType}</p>}
                      </div>
                    )}

                    {/* Code postal + Ville */}
                    <PostalCodeInput
                      postalCode={postalCode}
                      city={city}
                      onPostalCodeChange={setPostalCode}
                      onCityChange={setCity}
                      postalCodeId="p-postalCode"
                      cityId="p-city"
                      postalCodeLabel="Code postal"
                      cityLabel="Ville / zone d'intervention"
                      required
                      error={errors.postalCode}
                    />

                    <div>
                      <Label htmlFor="p-activities" className="text-sm font-semibold">Type d'activités proposées</Label>
                      <Input id="p-activities" value={activities} onChange={(e) => setActivities(e.target.value)} placeholder="Ex : yoga, renforcement, escalade, kayak…" className="mt-1.5" maxLength={200} />
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox id="p-gdpr" checked={gdpr} onCheckedChange={(v) => setGdpr(v === true)} className="mt-0.5" />
                      <Label htmlFor="p-gdpr" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                        J'accepte que mes données soient utilisées pour être recontacté dans le cadre de ma demande. *
                      </Label>
                    </div>
                    {errors.gdpr && <p className="text-destructive text-xs">{errors.gdpr}</p>}

                    <Button variant="cta" type="submit" className="w-full h-12 text-base">
                      Devenir partenaire
                    </Button>
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
