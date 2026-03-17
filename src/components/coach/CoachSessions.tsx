import { motion } from "framer-motion";
import { Clock, Sun, Users, MapPin } from "lucide-react";

const items = [
  { icon: Clock, text: "Séances d'1 heure" },
  { icon: Sun, text: "En extérieur" },
  { icon: Users, text: "Groupes de 4 à 6 participants" },
  { icon: MapPin, text: "Lieux publics proches des sportifs" },
];

const CoachSessions = () => (
  <section className="py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Comment se déroulent les séances{" "}
          <span className="text-gradient">MSP</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {items.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 bg-card rounded-xl px-5 py-4 shadow-card"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-hero-soft flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-sm text-left">{item.text}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-muted-foreground text-sm">
          Le lieu exact est choisi par MSP.
          <br />
          Le coach apporte simplement le matériel nécessaire à son activité.
        </p>
      </motion.div>
    </div>
  </section>
);

export default CoachSessions;
