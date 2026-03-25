import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  <>Tu veux faire une activité sportive <strong>sans passer des heures à chercher</strong></>,
  <>Tu cherches une approche <strong>plaisir, bien-être et sans pression</strong></>,
  <>Tu préfères bouger en <strong>petit groupe</strong></>,
  <>Tu veux quelque chose de <strong>simple et proche de chez toi</strong></>,
  <>Tu as envie de t'y remettre <strong>sans contrainte</strong></>,
];

const IdentificationSection = () => (
  <section className="py-32 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          MSP est fait pour toi <span className="text-gradient">si…</span>
        </h2>

        <div className="space-y-5">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-start gap-4 bg-card rounded-xl px-5 py-4 shadow-card"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0 mt-0.5 shadow-glow">
                <Check className="w-4 h-4 text-primary-foreground" />
              </div>
              <p className="text-foreground font-medium">{r}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default IdentificationSection;
