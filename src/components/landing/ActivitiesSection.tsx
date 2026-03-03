import { motion } from "framer-motion";
import { CalendarClock, LayoutGrid, Repeat } from "lucide-react";

const blocks = [
  {
    icon: CalendarClock,
    title: "Tu donnes tes disponibilités.",
    description: "Une seule fois, en 2 minutes.",
  },
  {
    icon: LayoutGrid,
    title: "On te propose un créneau fixe.",
    description: "Adapté à ton emploi du temps.",
  },
  {
    icon: Repeat,
    title: "Tu viens. Chaque semaine.",
    description: "Sans y penser. Sans organiser.",
  },
];

const ActivitiesSection = () => {
  return (
    <section className="py-32">
      <div className="container max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-center mb-20"
        >
          Un système <span className="text-gradient">simple.</span>
        </motion.h2>

        <div className="space-y-16">
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-hero flex-shrink-0 flex items-center justify-center shadow-glow">
                <block.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{block.title}</h3>
                <p className="text-muted-foreground">{block.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
