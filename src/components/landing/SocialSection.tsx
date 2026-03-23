import { motion } from "framer-motion";
import { Heart, CalendarCheck, Smile, RefreshCw } from "lucide-react";

const benefits = [
  { icon: Heart, text: "Plus motivant" },
  { icon: CalendarCheck, text: "Plus simple de s'y tenir" },
  { icon: Smile, text: "Plus convivial" },
  { icon: RefreshCw, text: "Plus régulier" },
];

const SocialSection = () => (
  <section className="py-32 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Pourquoi en <span className="text-gradient">petit groupe ?</span>
        </h2>

        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-10">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-3 bg-card rounded-xl px-4 py-3 shadow-card"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-hero-soft flex items-center justify-center flex-shrink-0">
                <b.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{b.text}</span>
            </motion.div>
          ))}
        </div>

        <div className="w-12 h-px bg-border mx-auto mb-6" />

        <p className="text-lg text-muted-foreground">
          Seul, on reporte.
          <br />
          <strong className="text-foreground">À plusieurs, on y va.</strong>
        </p>
      </motion.div>
    </div>
  </section>
);

export default SocialSection;
