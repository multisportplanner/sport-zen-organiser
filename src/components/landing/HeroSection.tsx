import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHow = () => {
    document.getElementById("comment-ca-marche")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
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
            Chaque semaine ou quand tu en as envie, MSP organise pour toi une activité sportive sur la Côte d'Azur.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6"
          >
            Petit groupe, activités outdoor ou bien-être, en semaine ou le week-end.
            <br />
            Tu choisis ce qui te fait plaisir, on s'occupe du reste.
          </motion.p>

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
            <Button variant="cta" size="lg" className="h-14 px-10 text-lg" onClick={scrollToForm}>
              Trouver mon activité
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-base" onClick={scrollToHow}>
              Comment ça marche
            </Button>
          </motion.div>

          <p className="text-xs text-muted-foreground/70">
            Activité sportive • petit groupe • près de chez toi
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
