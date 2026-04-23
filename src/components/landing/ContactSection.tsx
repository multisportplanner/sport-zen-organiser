import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, Rocket } from "lucide-react";
import {
  CONVERSION_SECTION_ID,
  CTA_MICRO_REASSURANCE,
  CTA_SUBTEXT,
  EMAIL_ALT_CTA_LABEL,
  PRIMARY_CTA_LABEL,
  WHATSAPP_URL,
} from "@/lib/cta";

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
    <section id={CONVERSION_SECTION_ID} className="py-32 md:py-40 bg-background">
      <div className="container">
        <div className="max-w-lg mx-auto space-y-10">
          {/* Bloc principal WhatsApp - prioritaire */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border-2 border-primary rounded-3xl p-10 md:p-14 shadow-glow"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-hero mx-auto mb-6 flex items-center justify-center shadow-glow">
              <MessageCircle className="w-7 h-7 text-primary-foreground" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-center mb-3">
              Le plus simple pour commencer
            </h3>

            <p className="text-muted-foreground text-center mb-10 leading-relaxed">
              3 questions, 30 secondes, on s'occupe du reste
            </p>

            <Button asChild variant="cta" className="w-full max-w-md mx-auto flex h-14 text-base">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                {PRIMARY_CTA_LABEL}
              </a>
            </Button>

            <p className="text-sm text-foreground/70 text-center mt-5 font-medium">
              {CTA_SUBTEXT}
            </p>
            <p className="text-xs text-foreground/55 text-center mt-2">{CTA_MICRO_REASSURANCE}</p>
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
                  L'email reste une alternative si tu préfères.
                </p>
                <ul className="space-y-2 mb-5 max-w-xs mx-auto">
                  {[
                    "recevoir les prochaines activités près de chez moi",
                    "découvrir les nouveautés près de chez toi",
                    "choisir tranquillement ton prochain créneau",
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
                    {EMAIL_ALT_CTA_LABEL}
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
