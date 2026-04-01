import { motion } from "framer-motion";
import { Award, Settings, Smile } from "lucide-react";

const columns = [
  { icon: Award, title: "MSP sélectionne des partenaires de qualité", text: "Des acteurs locaux fiables pour des activités agréables à vivre" },
  { icon: Settings, title: "MSP organise pour toi", text: "Créneaux, partenaires, organisation : tout est simplifié" },
  { icon: Smile, title: "MSP simplifie", text: "Moins de charge mentale, plus de plaisir" },
];

const DifferentiationSection = () => (
  <section className="py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Pourquoi MSP est <span className="text-gradient">différent ?</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Aujourd'hui, les offres existent. Le plus difficile, c'est de choisir, organiser et passer à l'action.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {columns.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="bg-card rounded-2xl p-6 shadow-card text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-hero-soft flex items-center justify-center mx-auto mb-4">
              <c.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentiationSection;
