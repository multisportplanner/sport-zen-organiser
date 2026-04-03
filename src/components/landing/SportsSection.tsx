import { motion } from "framer-motion";
import { Activity, Dumbbell, Heart, Sparkles, Flame, StretchHorizontal, Mountain, Waves, TreePine, Compass, Footprints } from "lucide-react";

const regulieres = [
  { icon: Activity, label: "Mobilité" },
  { icon: Dumbbell, label: "Renforcement" },
  { icon: Flame, label: "Fitness" },
  { icon: Heart, label: "Bien-être" },
  { icon: Sparkles, label: "Remise en forme" },
  { icon: Stretch, label: "Mouvement doux" },
];

const ponctuelles = [
  { icon: Footprints, label: "Randonnée" },
  { icon: Compass, label: "Yoga outdoor" },
  { icon: Waves, label: "Paddle" },
  { icon: Mountain, label: "Canyoning" },
  { icon: TreePine, label: "Escalade" },
  { icon: Compass, label: "Activités outdoor" },
];

const SportsSection = () => (
  <section id="activites" className="py-32 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Des activités selon <span className="text-gradient">tes envies</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Certaines activités s'intègrent facilement dans la semaine. D'autres se vivent plutôt le week-end ou pendant les vacances.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 mt-12">
        {/* Régulières */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <h3 className="text-lg font-bold text-center">Activités régulières</h3>
          </div>
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
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <h3 className="text-lg font-bold text-center">Activités ponctuelles</h3>
          </div>
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
