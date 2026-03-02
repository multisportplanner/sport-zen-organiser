import { motion } from "framer-motion";
import { Dumbbell, Wind, HeartPulse, Leaf, Sun, Activity } from "lucide-react";

const activities = [
  { icon: Dumbbell, name: "Renforcement" },
  { icon: Wind, name: "Mobilité" },
  { icon: HeartPulse, name: "Cardio doux" },
  { icon: Leaf, name: "Yoga" },
  { icon: Sun, name: "Outdoor" },
  { icon: Activity, name: "Training fonctionnel" },
];

const ActivitiesSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Chaque semaine, une activité{" "}
            <span className="text-gradient">différente</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Toujours encadré. Toujours accessible. Toujours en petit groupe.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {activities.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-hero-soft flex items-center justify-center">
                <a.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-semibold text-sm">{a.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
