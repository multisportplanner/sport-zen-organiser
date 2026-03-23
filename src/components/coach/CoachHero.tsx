import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CoachHero = () => {
  const scrollToForm = () => {
    document.getElementById("coach-form")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHow = () => {
    document.getElementById("coach-how")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-cta animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Recrutement coachs — Nice ↔ Sophia Antipolis
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Vous êtes{" "}
            <span className="text-gradient">coach sportif ?</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Rejoignez MSP et animez des séances en petit groupe, près de chez vous, sans gérer l'organisation.
          </p>

          <p className="text-sm text-muted-foreground/70 mb-8">
            6 participants max • séances organisées par MSP • focus sur le coaching
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="cta" size="lg" className="h-14 px-10 text-lg" onClick={scrollToForm}>
              Devenir coach partenaire
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8" onClick={scrollToHow}>
              Voir comment ça fonctionne
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachHero;
