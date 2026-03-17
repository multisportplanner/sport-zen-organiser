import { motion } from "framer-motion";

const pain = [
  "Trouver un créneau",
  "Organiser un groupe",
  "Réserver un coach",
  "Rester motivé",
];

const ProblemSection = () => (
  <section className="py-32 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          Pourquoi est-il si difficile de faire du sport{" "}
          <span className="text-gradient">régulièrement ?</span>
        </h2>

        <div className="space-y-4 mb-10">
          {pain.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-lg text-muted-foreground"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div className="w-12 h-px bg-border mx-auto mb-6" />

        <p className="text-lg text-muted-foreground">
          Résultat : <strong className="text-foreground">beaucoup de personnes abandonnent.</strong>
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
