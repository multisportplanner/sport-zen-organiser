import { motion } from "framer-motion";
import { CalendarCheck, Users, Dumbbell } from "lucide-react";

const steps = [
  { icon: CalendarCheck, number: "1", title: "Tu indiques tes disponibilités" },
  { icon: Users, number: "2", title: "MSP organise ton groupe" },
  { icon: Dumbbell, number: "3", title: "Tu viens t'entraîner" },
];

const HowItWorksSection = () => (
  <section className="py-32">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center mb-16"
      >
        Comment ça <span className="text-gradient">marche ?</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-hero mx-auto mb-5 flex items-center justify-center shadow-glow">
              <s.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="text-sm font-semibold text-secondary mb-2">Étape {s.number}</div>
            <h3 className="text-lg font-bold">{s.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
