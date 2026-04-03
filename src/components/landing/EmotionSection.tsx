import { motion } from "framer-motion";
import { Smile, Heart, Gamepad2 } from "lucide-react";

const EmotionSection = () => (
  <section className="py-32 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Bouger sans <span className="text-gradient">pression</span>
        </h2>

        <div className="flex justify-center gap-6 md:gap-10 mb-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-hero-soft flex items-center justify-center">
              <Smile className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground font-medium">Plaisir</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-hero-soft flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground font-medium">Bien-être</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-hero-soft flex items-center justify-center">
              <Gamepad2 className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground font-medium">Jeu</span>
          </div>
        </div>

        <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
          Ici, l'objectif n'est pas la performance.
          <br />
          C'est de retrouver le <span className="text-foreground font-medium">plaisir de bouger</span>, de passer un bon moment et parfois même une sensation de jeu.
        </p>

        <p className="text-base text-muted-foreground leading-relaxed">
          Quand tout est déjà organisé, il devient plus simple de rejoindre un groupe, de profiter de l'activité et d'y revenir naturellement.
        </p>
      </motion.div>
    </div>
  </section>
);

export default EmotionSection;
