import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const DeplacementSection = () => {
  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

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

          <Button variant="cta" size="lg" className="h-14 px-10 text-lg" onClick={scrollToForm}>
            Rejoindre un groupe
          </Button>
          <p className="text-xs text-muted-foreground/70 mt-3">
            Où que tu sois • On s'occupe du reste
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DeplacementSection;
