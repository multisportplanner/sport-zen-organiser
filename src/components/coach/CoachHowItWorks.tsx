import { motion } from "framer-motion";
import { Send, ShieldCheck, Users, Dumbbell } from "lucide-react";

const steps = [
  { icon: Send, number: "1", title: "Tu candidatures" },
  { icon: ShieldCheck, number: "2", title: "On valide ton profil" },
  { icon: Users, number: "3", title: "MSP remplit tes séances" },
  { icon: Dumbbell, number: "4", title: "Tu animes" },
];

const CoachHowItWorks = () => (
  <section id="coach-how" className="py-32 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Comment ça{" "}
          <span className="text-gradient">fonctionne</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-hero mx-auto mb-5 flex items-center justify-center shadow-glow">
              <step.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="text-3xl font-bold text-primary mb-3">{step.number}</div>
            <h3 className="text-lg font-bold">{step.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoachHowItWorks;
