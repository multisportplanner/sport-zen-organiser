import { motion } from "framer-motion";
import { Rocket, Star, Gift } from "lucide-react";

const perks = [
  { icon: Rocket, text: "Accès en avant-première" },
  { icon: Star, text: "Priorité sur les premiers créneaux" },
  { icon: Gift, text: "Test gratuit de l'expérience" },
];

const PilotSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Lancement pilote —{" "}
            <span className="text-gradient">Nice ↔ Sophia</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Phase de test gratuite. Les inscrits auront :
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {perks.map((p, i) => (
              <motion.div
                key={p.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-card rounded-xl px-5 py-4 shadow-card"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
                  <p.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-semibold text-sm text-left">{p.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PilotSection;
