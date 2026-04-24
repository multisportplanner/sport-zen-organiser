import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CTA_MICRO_REASSURANCE, CTA_SUBTEXT, PRIMARY_CTA_LABEL, scrollToConversionSection, trackCtaClick } from "@/lib/cta";

const HeroSection = () => {
  const scrollToHow = () => {
    document.getElementById("comment-ca-marche")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4 uppercase">
            Du sport <span className="text-gradient">sans l'organiser</span>
          </h1>

          <p className="text-lg md:text-xl font-semibold text-foreground mb-3">
            Juste pour le plaisir de bouger, sans pression
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-4">
            Chaque semaine ou quand tu en as envie, MSP organise pour toi une activité sportive sur la Côte d'Azur, avec tes amis ou avec d'autres personnes.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-sm text-muted-foreground mb-10"
          >
            6 personnes max • sans charge mentale • sur la Côte d'Azur
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3"
          >
            <Button variant="cta" size="lg" className="h-14 px-10 text-lg" onClick={() => {
              trackCtaClick({
                cta_location: "hero",
                page_type: "home",
                cta_label: PRIMARY_CTA_LABEL,
                destination: "scroll",
              });
              scrollToConversionSection();
            }}>
              {PRIMARY_CTA_LABEL}
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-base" onClick={scrollToHow}>
              Comment ça marche
            </Button>
          </motion.div>

          <p className="text-xs text-muted-foreground/70">{CTA_SUBTEXT}</p>
          <p className="text-xs text-muted-foreground/70 mt-1">{CTA_MICRO_REASSURANCE}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
