import { motion } from "framer-motion";
import { Dumbbell, Flower2, Footprints, StretchHorizontal, CircleDot, Flame } from "lucide-react";

const sports = [
  { icon: Dumbbell, label: "Functional training" },
  { icon: Flower2, label: "Yoga" },
  { icon: Footprints, label: "Running" },
  { icon: StretchHorizontal, label: "Mobilité" },
  { icon: CircleDot, label: "Pilates" },
  { icon: Flame, label: "Renforcement" },
];

const SportsSection = () => (
  <section className="py-32 bg-muted/30">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center mb-16"
      >
        Des activités sportives <span className="text-gradient">variées</span>
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
        {sports.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-hero-soft flex items-center justify-center mx-auto mb-3">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <p className="font-semibold text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground text-center mt-8">
        Liste non exhaustive — le plus important, c'est de trouver ce qui te plaît.
      </p>
    </div>
  </section>
);

export default SportsSection;
