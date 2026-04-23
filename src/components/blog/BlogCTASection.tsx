import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Reuses the EXACT same primary CTA flow as the homepage ContactSection
 * (WhatsApp link + "Échanger sur WhatsApp" wording + same destination).
 * Used on /blog and at the bottom of every article.
 */

const WHATSAPP_URL =
  "https://wa.me/33759933888?text=Salut%20MSP%2C%20oui%20%C3%A7a%20m'int%C3%A9resse.%20Comment%20ca%20marche%20%3F%20%3A)";

interface BlogCTASectionProps {
  title?: string | null;
  text?: string | null;
  buttonLabel?: string;
  subText?: string;
  microText?: string;
  compactTopSpacing?: boolean;
}

const BlogCTASection = ({
  title = "Tu veux essayer sans t'organiser ?",
  text = "Chaque semaine, MSP organise pour toi une séance de sport en petit groupe près de chez toi.",
  buttonLabel = "Échanger sur WhatsApp",
  subText = "Réponse immédiate • Pas de formulaire à remplir",
  microText,
  compactTopSpacing = false,
}: BlogCTASectionProps) => {
  return (
    <section
      className={cn(
        "pb-24 md:pb-32 bg-background",
        compactTopSpacing ? "pt-10 md:pt-14" : "pt-24 md:pt-32",
      )}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto bg-card border-2 border-primary rounded-3xl p-10 md:p-14 shadow-glow"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-hero mx-auto mb-6 flex items-center justify-center shadow-glow">
            <MessageCircle className="w-7 h-7 text-primary-foreground" />
          </div>

          {title && <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">{title}</h2>}

          {text && <p className="text-muted-foreground text-center mb-8 leading-relaxed">{text}</p>}

          <Button asChild variant="cta" className="w-full max-w-md mx-auto flex h-14 text-base">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              {buttonLabel}
            </a>
          </Button>

          <p className="text-sm text-foreground/70 text-center mt-5 font-medium">{subText}</p>

          {microText && <p className="text-xs text-foreground/55 text-center mt-2">{microText}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogCTASection;
