import { motion } from "framer-motion";
import { UserCircle, Users, Dumbbell } from "lucide-react";

const steps = [
  {
    icon: UserCircle,
    number: "1",
    title: "Vous complétez votre profil",
    description: "Vous indiquez vos sports, vos disponibilités et vos zones d'intervention.",
  },
  {
    icon: Users,
    number: "2",
    title: "MSP construit les groupes",
    description: "Nous regroupons des sportifs compatibles selon leurs disponibilités, leur localisation et les activités recherchées.",
  },
  {
    icon: Dumbbell,
    number: "3",
    title: "Vous animez la séance",
    description: "Vous intervenez sur un créneau confirmé avec un groupe déjà organisé.",
  },
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

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
            <div className="text-sm font-semibold text-secondary mb-2">Étape {step.number}</div>
            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoachHowItWorks;
