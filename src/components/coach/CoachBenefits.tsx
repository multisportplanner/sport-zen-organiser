import { motion } from "framer-motion";
import { Target, UserPlus, Users, MapPin, CalendarCheck, Banknote } from "lucide-react";

const benefits = [
  { icon: Target, title: "Tu te concentres sur ton coaching" },
  { icon: UserPlus, title: "MSP s'occupe de trouver les participants" },
  { icon: Users, title: "Groupes de 6 personnes maximum" },
  { icon: MapPin, title: "Séances proches de chez toi" },
  { icon: CalendarCheck, title: "Planning flexible" },
  { icon: Banknote, title: "Rémunération à la séance" },
];

const CoachBenefits = () => (
  <section className="py-32 bg-muted/30">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center mb-16"
      >
        Pourquoi rejoindre{" "}
        <span className="text-gradient">MSP ?</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-hero-soft flex items-center justify-center mb-4 mx-auto">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-base">{b.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoachBenefits;
