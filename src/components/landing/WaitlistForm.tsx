import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Rocket } from "lucide-react";

type Usage = "Activité régulière" | "Activité ponctuelle" | "Les deux";
type Dispo = "Semaine" | "Week-end" | "Les deux";
type Moment = "Matin" | "Midi" | "Soir";
type ActivityType = "Bien-être" | "Outdoor" | "Cardio" | "Renforcement" | "Ouvert(e)";

const WaitlistForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [usage, setUsage] = useState<Usage | "">("");
  const [dispo, setDispo] = useState<Dispo | "">("");
  const [moments, setMoments] = useState<Moment[]>([]);
  const [activityTypes, setActivityTypes] = useState<ActivityType[]>([]);
  const [gdpr, setGdpr] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleMoment = (m: Moment) => {
    setMoments((prev) => (prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]));
  };

  const toggleActivityType = (t: ActivityType) => {
    setActivityTypes((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!firstName.trim()) e.firstName = "Prénom requis";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email invalide";
    if (!gdpr) e.gdpr = "Acceptation requise";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const data = { firstName, email, city, usage, dispo, moments, activityTypes };

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

  if (submitted) {
    return (
      <section id="waitlist-form" className="py-32 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center bg-card rounded-3xl p-10 shadow-card"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-hero mx-auto mb-6 flex items-center justify-center shadow-glow">
              <Rocket className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Merci !</h3>
            <p className="text-muted-foreground">
              On te recontacte rapidement avec des activités adaptées 🚀
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  const chipClass = (active: boolean) =>
    `flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
      active
        ? "bg-gradient-hero text-primary-foreground border-transparent shadow-glow"
        : "bg-background border-border text-muted-foreground hover:border-primary/30"
    }`;

  return (
    <section id="waitlist-form" className="py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <p className="text-center text-foreground text-lg font-bold mb-6">
            MSP organise ton activité sportive.
            <br />
            Tu viens simplement en profiter.
          </p>
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
            <h3 className="text-2xl font-bold text-center mb-2">Dis-nous ce que tu recherches</h3>
            <p className="text-sm text-muted-foreground text-center mb-8">
              Régulier ou ponctuel, indique-nous tes préférences.
              <br />
              On te recontacte avec des activités adaptées.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Prénom */}
              <div>
                <Label htmlFor="firstName" className="text-sm font-semibold">Prénom *</Label>
                <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Ton prénom" className="mt-1.5" maxLength={100} />
                {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName}</p>}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-sm font-semibold">Email *</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ton@email.com" className="mt-1.5" maxLength={255} />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Ville */}
              <div>
                <Label htmlFor="city" className="text-sm font-semibold">Ville</Label>
                <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Nice, Antibes, Sophia..." className="mt-1.5" maxLength={100} />
              </div>

              {/* Usage */}
              <div>
                <Label className="text-sm font-semibold mb-2 block">Je recherche plutôt</Label>
                <div className="flex flex-wrap gap-3">
                  {(["Activité régulière", "Activité ponctuelle", "Les deux"] as Usage[]).map((u) => (
                    <button key={u} type="button" onClick={() => setUsage(u)} className={chipClass(usage === u)}>
                      {u}
                    </button>
                  ))}
                </div>
              </div>

              {/* Disponibilités */}
              <div>
                <Label className="text-sm font-semibold mb-2 block">Disponibilités</Label>
                <div className="flex flex-wrap gap-3">
                  {(["Semaine", "Week-end", "Les deux"] as Dispo[]).map((d) => (
                    <button key={d} type="button" onClick={() => setDispo(d)} className={chipClass(dispo === d)}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Moment */}
              <div>
                <Label className="text-sm font-semibold mb-2 block">Moment</Label>
                <div className="flex flex-wrap gap-3">
                  {(["Matin", "Midi", "Soir"] as Moment[]).map((m) => (
                    <button key={m} type="button" onClick={() => toggleMoment(m)} className={chipClass(moments.includes(m))}>
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type d'activité */}
              <div>
                <Label className="text-sm font-semibold mb-2 block">Type d'activité</Label>
                <div className="flex flex-wrap gap-3">
                  {(["Bien-être", "Outdoor", "Cardio", "Renforcement", "Ouvert(e)"] as ActivityType[]).map((t) => (
                    <button key={t} type="button" onClick={() => toggleActivityType(t)} className={chipClass(activityTypes.includes(t))}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* RGPD */}
              <div className="flex items-start gap-3">
                <Checkbox id="gdpr" checked={gdpr} onCheckedChange={(v) => setGdpr(v === true)} className="mt-0.5" />
                <Label htmlFor="gdpr" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                  J'accepte que mes données soient utilisées pour m'informer du lancement de MSP. Désinscription possible à tout moment. *
                </Label>
              </div>
              {errors.gdpr && <p className="text-destructive text-xs">{errors.gdpr}</p>}

              <Button variant="cta" type="submit" className="w-full h-12 text-base">
                Je trouve mon activité
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Aucun engagement • Réponse personnalisée • Lancement progressif sur la Côte d'Azur
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistForm;
