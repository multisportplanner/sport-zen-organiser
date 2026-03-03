import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Tu sais que le sport est{" "}
            <span className="text-gradient">important.</span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Pour la santé.<br />
              Pour l'énergie.<br />
              Pour l'équilibre.
            </p>

            <div className="w-12 h-px bg-border mx-auto" />

            <p>
              Mais ce n'est pas un problème de <strong className="text-foreground">motivation</strong>.
              <br />
              C'est un problème d'<strong className="text-foreground">organisation</strong>.
            </p>

            <p className="text-base">
              Dans un quotidien chargé, ça passe après.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
