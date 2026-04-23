import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { CTA_MICRO_REASSURANCE, CTA_SUBTEXT, PRIMARY_CTA_LABEL, WHATSAPP_URL } from "@/lib/cta";

const DeplacementSection = () => {
  return (
    <section className="py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-hero-soft flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-6 h-6 text-primary" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Même en déplacement professionnel ou loisirs
          </h2>

          <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
            MSP organise pour toi une session, là où tu es.
          </p>
          <p className="text-base text-muted-foreground mb-3 leading-relaxed">
            Pas besoin de chercher. Pas besoin de connaître quelqu'un.
          </p>
          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            Tu continues à bouger, où que tu sois.
          </p>

          <Button asChild variant="cta" size="lg" className="h-14 px-10 text-lg">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              {PRIMARY_CTA_LABEL}
            </a>
          </Button>
          <p className="text-xs text-muted-foreground/70 mt-3">{CTA_SUBTEXT}</p>
          <p className="text-xs text-muted-foreground/70 mt-1">{CTA_MICRO_REASSURANCE}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default DeplacementSection;
