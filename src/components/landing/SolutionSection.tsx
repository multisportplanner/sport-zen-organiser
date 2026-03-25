import { motion } from "framer-motion";
import { Sparkles, MapPin, Users, BrainCircuit } from "lucide-react";

const benefits = [
  { icon: Sparkles, title: "Des activités accessibles", text: "Pour bouger, se faire du bien et passer un bon moment" },
  { icon: MapPin, title: "Sur la Côte d'Azur", text: "Autour de Nice, Antibes et dans les Alpes-Maritimes, jusqu'à l'arrière-pays, au cœur de la nature" },
  { icon: Users, title: "En petit groupe", text: "Jusqu'à 6 personnes pour un format convivial" },
  { icon: BrainCircuit, title: "Sans charge mentale", text: "Tu n'as rien à organiser" },
];

const SolutionSection = () => (
  <section id="solution" className="py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          MSP organise ton activité sportive.{" "}
          <span className="text-gradient">Toi, tu profites.</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
          MSP t'aide à faire une activité sportive de façon simple, conviviale et sans pression.
        </p>
        <p className="text-base text-muted-foreground mb-12 max-w-2xl mx-auto">
          Que tu veuilles t'y mettre régulièrement ou simplement trouver une idée d'activité sportive pour le week-end ou les vacances, MSP sélectionne et organise pour toi.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-card rounded-2xl px-5 py-5 shadow-card text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-hero-soft flex items-center justify-center mb-3">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SolutionSection;
