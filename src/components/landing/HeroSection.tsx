import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dumbbell, Flower2, Footprints, StretchHorizontal, MapPin } from "lucide-react";

const sports = [
  { icon: Dumbbell, label: "Functional training" },
  { icon: Flower2, label: "Yoga" },
  { icon: Footprints, label: "Running" },
  { icon: StretchHorizontal, label: "Mobilité" },
];

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Faire du sport devrait être{" "}
            <span className="text-gradient">simple</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto mb-4">
            Chaque semaine, MSP organise pour toi une activité sportive en petit groupe, près de chez toi.
          </p>

          <p className="text-lg md:text-xl font-semibold text-foreground mb-8">
            Tu viens, tu bouges, tu partages.
          </p>

          {/* Sports icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6"
          >
            {sports.map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-gradient-hero-soft flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Bullet points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-4"
          >
            <span>✦ Pas de pression</span>
            <span>✦ Pas d'organisation</span>
            <span>✦ Juste une bonne énergie</span>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4"
          >
            <MapPin className="w-4 h-4 text-secondary" />
            <span>Entre Nice, Antibes et Sophia Antipolis</span>
          </motion.div>

          {/* Value props */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-sm text-muted-foreground mb-10"
          >
            6 personnes max • 100% flexible • près de chez toi
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col items-center gap-3"
          >
            <Button variant="cta" size="lg" className="h-14 px-10 text-lg" onClick={scrollToForm}>
              Trouver mon activité
            </Button>
            <p className="text-xs text-muted-foreground/70">
              Activité sportive • petit groupe • près de chez toi
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
