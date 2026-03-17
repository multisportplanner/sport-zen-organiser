import { motion } from "framer-motion";

const CoachSolution = () => (
  <section className="py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          MSP organise les groupes{" "}
          <span className="text-gradient">pour vous</span>
        </h2>

        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p className="text-center">
            Avec MSP, vous n'avez plus besoin de chercher des clients seul.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <p className="font-semibold text-foreground mb-3">Vous indiquez simplement :</p>
              <ul className="space-y-2 text-sm">
                <li>— les sports que vous proposez</li>
                <li>— vos créneaux disponibles</li>
                <li>— les zones où vous souhaitez intervenir</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card">
              <p className="font-semibold text-foreground mb-3">Ensuite MSP :</p>
              <ul className="space-y-2 text-sm">
                <li>— constitue des groupes compatibles</li>
                <li>— organise les séances</li>
                <li>— gère les réservations et les paiements</li>
              </ul>
            </div>
          </div>

          <p className="text-center font-semibold text-foreground">
            Vous intervenez uniquement pour coacher la séance.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CoachSolution;
