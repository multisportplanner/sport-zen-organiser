import { motion } from "framer-motion";
import { GraduationCap, Users, MapPin, CalendarCheck } from "lucide-react";

const points = [
  { icon: GraduationCap, text: "Coach qualifié" },
  { icon: Users, text: "Groupe de 6 personnes maximum" },
  { icon: MapPin, text: "Proche de chez toi" },
  { icon: CalendarCheck, text: "Une séance de sport chaque semaine" },
];

const SolutionSection = () => (
  <section id="solution" className="py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          MSP <span className="text-gradient">simplifie tout.</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-12">
          Nous organisons pour toi des séances de sport en petit groupe.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 max-w-lg mx-auto mb-12">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-3 bg-card rounded-xl px-5 py-4 shadow-card"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-hero-soft flex items-center justify-center flex-shrink-0">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground text-left">{p.text}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-lg text-muted-foreground">
          Tu viens simplement <strong className="text-foreground">t'entraîner.</strong>
        </p>
      </motion.div>
    </div>
  </section>
);

export default SolutionSection;
