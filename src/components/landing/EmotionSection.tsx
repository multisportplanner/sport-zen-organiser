import { motion } from "framer-motion";

const EmotionSection = () => (
  <section className="py-32 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Bouger sans pression, dans un cadre{" "}
          <span className="text-gradient">simple et agréable</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-4">
          Ici, l'objectif n'est pas la performance.
          <br />
          C'est de retrouver le plaisir de bouger, de passer un bon moment et parfois même de redécouvrir une activité comme un jeu.
        </p>

        <p className="text-base text-muted-foreground">
          Parce que faire une activité sportive, c'est souvent plus simple — et plus agréable — quand tout n'est pas à organiser seul(e).
        </p>
      </motion.div>
    </div>
  </section>
);

export default EmotionSection;
