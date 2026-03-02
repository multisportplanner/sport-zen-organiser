import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Rocket } from "lucide-react";

type Slot = "Matin" | "Midi" | "Soir";
type Level = "Reprise" | "Intermédiaire" | "Sportif";

const WaitlistForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [slots, setSlots] = useState<Slot[]>([]);
  const [level, setLevel] = useState<Level | "">("");
  const [gdpr, setGdpr] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleSlot = (s: Slot) => {
    setSlots((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!firstName.trim()) e.firstName = "Prénom requis";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email invalide";
    if (!gdpr) e.gdpr = "Acceptation requise";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section id="waitlist-form" className="py-24 bg-muted/50">
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
              Tu fais partie des premiers à tester MSP 🚀
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist-form" className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
            <h3 className="text-2xl font-bold text-center mb-2">Rejoins la liste d'attente</h3>
            <p className="text-sm text-muted-foreground text-center mb-8">
              2 minutes pour s'inscrire. Zéro engagement.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Prénom */}
              <div>
                <Label htmlFor="firstName" className="text-sm font-semibold">Prénom *</Label>
                <Input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Ton prénom"
                  className="mt-1.5"
                  maxLength={100}
                />
                {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName}</p>}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-sm font-semibold">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ton@email.com"
                  className="mt-1.5"
                  maxLength={255}
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Ville */}
              <div>
                <Label htmlFor="city" className="text-sm font-semibold">Ville</Label>
                <Input
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Nice, Sophia, Antibes..."
                  className="mt-1.5"
                  maxLength={100}
                />
              </div>

              {/* Créneaux */}
              <div>
                <Label className="text-sm font-semibold mb-2 block">Créneaux préférés</Label>
                <div className="flex gap-3">
                  {(["Matin", "Midi", "Soir"] as Slot[]).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleSlot(s)}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                        slots.includes(s)
                          ? "bg-gradient-hero text-primary-foreground border-transparent shadow-glow"
                          : "bg-background border-border text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Niveau */}
              <div>
                <Label className="text-sm font-semibold mb-2 block">Niveau</Label>
                <div className="flex gap-3">
                  {(["Reprise", "Intermédiaire", "Sportif"] as Level[]).map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => setLevel(l)}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                        level === l
                          ? "bg-gradient-hero text-primary-foreground border-transparent shadow-glow"
                          : "bg-background border-border text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* RGPD */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="gdpr"
                  checked={gdpr}
                  onCheckedChange={(v) => setGdpr(v === true)}
                  className="mt-0.5"
                />
                <Label htmlFor="gdpr" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                  J'accepte que mes données soient utilisées pour m'informer du lancement de MSP. Désinscription possible à tout moment. *
                </Label>
              </div>
              {errors.gdpr && <p className="text-destructive text-xs">{errors.gdpr}</p>}

              <Button variant="cta" type="submit" className="w-full h-12 text-base">
                Je rejoins la liste d'attente
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistForm;
