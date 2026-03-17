import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Rocket } from "lucide-react";

const CoachForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [sports, setSports] = useState("");
  const [zones, setZones] = useState("");
  const [gdpr, setGdpr] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Nom requis";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email invalide";
    if (!gdpr) e.gdpr = "Acceptation requise";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const data = {
      name,
      email,
      phone,
      city,
      sports,
      zones,
      source: "coach",
    };

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
      <section id="coach-form" className="py-32 bg-muted/30">
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
              Nous revenons vers vous rapidement pour échanger sur votre profil et le lancement MSP.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="coach-form" className="py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
            <h3 className="text-2xl font-bold text-center mb-2">Rejoindre les coachs MSP</h3>
            <p className="text-sm text-muted-foreground text-center mb-8">
              Commencez par nous dire si le projet vous intéresse.
              <br />
              Nous vous recontacterons ensuite pour compléter votre profil.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="coach-name" className="text-sm font-semibold">Nom *</Label>
                <Input id="coach-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Votre nom" className="mt-1.5" maxLength={100} />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="coach-email" className="text-sm font-semibold">Email *</Label>
                <Input id="coach-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.com" className="mt-1.5" maxLength={255} />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="coach-phone" className="text-sm font-semibold">Téléphone</Label>
                <Input id="coach-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="06 12 34 56 78" className="mt-1.5" maxLength={20} />
              </div>

              <div>
                <Label htmlFor="coach-city" className="text-sm font-semibold">Ville</Label>
                <Input id="coach-city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Nice, Antibes, Sophia..." className="mt-1.5" maxLength={100} />
              </div>

              <div>
                <Label htmlFor="coach-sports" className="text-sm font-semibold">Sports proposés</Label>
                <Input id="coach-sports" value={sports} onChange={(e) => setSports(e.target.value)} placeholder="Yoga, Functional training..." className="mt-1.5" maxLength={255} />
              </div>

              <div>
                <Label htmlFor="coach-zones" className="text-sm font-semibold">Zones d'intervention</Label>
                <Input id="coach-zones" value={zones} onChange={(e) => setZones(e.target.value)} placeholder="Nice centre, Sophia, Antibes..." className="mt-1.5" maxLength={255} />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox id="coach-gdpr" checked={gdpr} onCheckedChange={(v) => setGdpr(v === true)} className="mt-0.5" />
                <Label htmlFor="coach-gdpr" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                  J'accepte que mes données soient utilisées pour me recontacter dans le cadre du lancement de MSP. Désinscription possible à tout moment. *
                </Label>
              </div>
              {errors.gdpr && <p className="text-destructive text-xs">{errors.gdpr}</p>}

              <Button variant="cta" type="submit" className="w-full h-12 text-base">
                Je rejoins MSP
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Nous revenons vers vous rapidement pour échanger sur votre profil et le lancement MSP.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachForm;
