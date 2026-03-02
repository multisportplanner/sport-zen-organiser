import { motion } from "framer-motion";
import { Brain, TrendingUp, Heart, Zap } from "lucide-react";
import socialImg from "@/assets/social-group.jpg";

const benefits = [
  { icon: Brain, title: "Moins de charge mentale", description: "Plus besoin de chercher quoi faire ni quand." },
  { icon: TrendingUp, title: "Plus de régularité", description: "Un créneau fixe, chaque semaine, sans y penser." },
  { icon: Heart, title: "Plus de lien social", description: "Des groupes à taille humaine, entre voisins." },
  { icon: Zap, title: "Plus d'énergie", description: "Le mouvement régulier change tout." },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Ce que ça change{" "}
          <span className="text-gradient">concrètement</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-hero-soft flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-1">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.description}</p>
              {b.title === "Plus de lien social" && (
                <img
                  src={socialImg}
                  alt="Amis riant ensemble après une séance de sport"
                  className="mt-4 rounded-xl object-cover w-full aspect-[4/3]"
                  loading="lazy"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
