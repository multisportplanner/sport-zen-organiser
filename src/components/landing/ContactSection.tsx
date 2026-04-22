import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, Rocket } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/33759933888?text=Salut%20MSP%2C%20oui%20%C3%A7a%20m'int%C3%A9resse.%20Comment%20ca%20marche%20%3F%20%3A)";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Email invalide");
      return;
    }

    const response = await fetch("/api/brevo-contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "newsletter", gdpr: true, rgpd: true }),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      setError("Une erreur est survenue. Merci de réessayer.");
    }
  };

  return (
    <section id="waitlist-form" className="py-32 md:py-40 bg-background">
      <div className="container">
        <div className="max-w-lg mx-auto space-y-10">
          {/* Bloc principal WhatsApp - prioritaire */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-primary rounded-3xl p-8 md:p-12 shadow-card"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-hero mx-auto mb-6 flex items-center justify-center shadow-glow">
              <MessageCircle className="w-7 h-7 text-primary-foreground" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-center mb-3">
              Le plus simple pour commencer
            </h3>

            <p className="text-muted-foreground text-center mb-8 leading-relaxed">
              3 questions, 30 secondes, on s'occupe du reste
            </p>

            <Button asChild variant="cta" className="w-full h-12 text-base">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Échanger sur WhatsApp
              </a>
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-3">
              Réponse immédiate • Pas de formulaire à remplir
            </p>
          </motion.div>

          {/* Bloc secondaire email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-2xl p-6 md:p-8"
          >
            {submitted ? (
              <div className="text-center py-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-hero mx-auto mb-4 flex items-center justify-center shadow-glow">
                  <Rocket className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-bold mb-1">Merci !</h4>
                <p className="text-sm text-muted-foreground">
                  On te tient au courant des nouveautés MSP.
                </p>
              </div>
            ) : (
              <>
                <h4 className="text-lg md:text-xl font-bold text-center mb-2">
                  Tu préfères y aller doucement ?
                </h4>
                <p className="text-sm text-muted-foreground text-center mb-3">
                  Laisse simplement ton email pour :
                </p>
                <ul className="space-y-2 mb-5 max-w-xs mx-auto">
                  {[
                    "accéder à des avantages réservés aux inscrits",
                    "recevoir des idées d'activités",
                    "découvrir les nouveautés près de chez toi",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <Label htmlFor="newsletter-email" className="sr-only">
                      Email
                    </Label>
                    <Input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ton@email.com"
                      maxLength={255}
                      className="h-11"
                    />
                    {error && <p className="text-destructive text-xs mt-1">{error}</p>}
                  </div>

                  <Button type="submit" variant="outline" className="w-full h-11">
                    Accéder aux avantages
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
