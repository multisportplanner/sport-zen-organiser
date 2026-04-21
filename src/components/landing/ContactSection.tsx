import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, MessageCircle, Rocket } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/33759933888?text=Salut%20MSP%20👋%0AJe%20souhaite%20faire%20du%20sport%20sans%20avoir%20%C3%A0%20organiser.%0AComment%20%C3%A7a%20fonctionne%20%3F";

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
    <section id="waitlist-form" className="py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-lg mx-auto space-y-10">
          {/* Bloc principal WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 md:p-10 shadow-card"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-hero mx-auto mb-6 flex items-center justify-center shadow-glow">
              <MessageCircle className="w-7 h-7 text-primary-foreground" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Le plus simple pour commencer
            </h3>

            <p className="text-muted-foreground text-center mb-6 leading-relaxed">
              Échange directement sur WhatsApp pour organiser une activité sportive près de chez toi.
              <br />
              Tu nous dis tes disponibilités et les sports qui t'intéressent, on s'occupe du reste.
            </p>

            <ul className="space-y-3 mb-8 max-w-xs mx-auto">
              {["Tes disponibilités", "Les sports qui t'intéressent", "Ton lieu (ville)"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Button asChild variant="cta" className="w-full h-12 text-base">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Échanger sur WhatsApp
              </a>
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-3">
              Simple et rapide • Pas de formulaire à remplir
            </p>
          </motion.div>

          {/* Bloc secondaire email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-border rounded-2xl p-6 md:p-8"
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
                  Tu préfères commencer plus tranquillement ?
                </h4>
                <p className="text-sm text-muted-foreground text-center mb-5">
                  Laisse simplement ton email pour suivre le lancement, recevoir les articles du blog
                  et profiter d'avantages exclusifs et parrainage.
                </p>

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
                    Recevoir les infos MSP
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
