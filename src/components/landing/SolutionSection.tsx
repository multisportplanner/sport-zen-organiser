import { motion } from "framer-motion";
import { CalendarCheck, Users, Bell } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    number: "1",
    title: "Tu renseignes tes disponibilités",
    description: "Une seule fois, en 2 minutes.",
  },
  {
    icon: Users,
    number: "2",
    title: "On crée ton groupe et ton créneau fixe",
    description: "Un petit groupe qui te correspond.",
  },
  {
    icon: Bell,
    number: "3",
    title: "Tu reçois ton rendez-vous chaque semaine",
    description: "Simple. Régulier. Sans effort.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            On organise.{" "}
            <span className="text-gradient">Tu profites.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-lg text-muted-foreground max-w-md mx-auto"
        >
          Tu viens en tenue simple.
          <br />
          <strong className="text-foreground">On s'occupe du reste.</strong>
        </motion.p>
      </div>
    </section>
  );
};

export default SolutionSection;
