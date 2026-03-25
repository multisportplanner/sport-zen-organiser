import { motion } from "framer-motion";
import { Flower2, Footprints, StretchHorizontal, Dumbbell, Flame, Waves, Mountain, TreePine } from "lucide-react";

const sports = [
  { icon: Flower2, label: "Yoga" },
  { icon: Footprints, label: "Running" },
  { icon: StretchHorizontal, label: "Mobilité" },
  { icon: Dumbbell, label: "Renforcement" },
  { icon: Flame, label: "Marche active" },
  { icon: Waves, label: "Paddle" },
  { icon: Mountain, label: "Randonnée" },
  { icon: TreePine, label: "Activités outdoor" },
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
          Des activités sportives <span className="text-gradient">variées</span>, selon les envies
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Outdoor, bien-être, remise en mouvement ou activités plus dynamiques : MSP sélectionne des formats accessibles et agréables à vivre.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
        {sports.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-hero-soft flex items-center justify-center mx-auto mb-3">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <p className="font-semibold text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground text-center mt-8">
        Et ce n'est qu'un début : d'autres activités sportives seront proposées selon les envies, les partenaires et la saison.
      </p>
    </div>
  </section>
);

export default SportsSection;
