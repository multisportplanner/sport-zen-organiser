import { motion } from "framer-motion";
import { Flower2, Footprints, StretchHorizontal, Dumbbell, Flame, Waves, Mountain, TreePine } from "lucide-react";

const regulieres = [
  { icon: Flower2, label: "Yoga" },
  { icon: Flower2, label: "Pilates" },
  { icon: StretchHorizontal, label: "Mobilité" },
  { icon: Dumbbell, label: "Renforcement doux" },
  { icon: Flame, label: "Fitness en petit groupe" },
];

const ponctuelles = [
  { icon: Mountain, label: "Canyoning" },
  { icon: Footprints, label: "VTT électrique" },
  { icon: Waves, label: "Kayak guidé" },
  { icon: Waves, label: "Plongée sous-marine" },
  { icon: TreePine, label: "Rafting" },
];

const SportsSection = () => (
  <section id="activites" className="py-32 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Des activités adaptées <span className="text-gradient">à tes envies</span>
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Régulières */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg font-bold mb-4 text-center">Activités régulières</h3>
          <div className="grid grid-cols-2 gap-4">
            {regulieres.map((s, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-5 shadow-card text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-hero-soft flex items-center justify-center mx-auto mb-2">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Ponctuelles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-bold mb-4 text-center">Activités ponctuelles</h3>
          <div className="grid grid-cols-2 gap-4">
            {ponctuelles.map((s, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-5 shadow-card text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-hero-soft flex items-center justify-center mx-auto mb-2">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <p className="text-sm text-muted-foreground text-center mt-8">
        Les activités évoluent selon les saisons, les envies et les partenaires
      </p>
    </div>
  </section>
);

export default SportsSection;
