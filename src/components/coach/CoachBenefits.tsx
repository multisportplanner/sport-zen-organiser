import { motion } from "framer-motion";
import { UserPlus, CalendarCheck, Clock, Gift } from "lucide-react";

const benefits = [
  { icon: UserPlus, title: "Plus de sportifs", description: "MSP vous met en relation avec des sportifs près de chez vous." },
  { icon: CalendarCheck, title: "Des groupes déjà organisés", description: "Vous n'avez plus à gérer l'organisation." },
  { icon: Clock, title: "Créneaux flexibles", description: "Vous choisissez vos disponibilités." },
  { icon: Gift, title: "Inscription gratuite", description: "Vous êtes rémunéré uniquement lorsque vous intervenez." },
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
        <span className="text-gradient">MSP</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-hero-soft flex items-center justify-center mb-4">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-1">{b.title}</h3>
            <p className="text-muted-foreground text-sm">{b.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoachBenefits;
