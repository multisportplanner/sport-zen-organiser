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
            Fais du sport chaque semaine,{" "}
            <span className="text-gradient">sans t'organiser</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
            MSP crée ton groupe, planifie les séances et trouve le coach.
            <br />
            <strong className="text-foreground">Tu viens t'entraîner.</strong>
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
          >
            <Button variant="cta" size="lg" className="h-14 px-10 text-lg" onClick={scrollToForm}>
              Trouver mon sport
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
