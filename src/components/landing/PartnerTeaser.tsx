import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Handshake } from "lucide-react";

const PartnerTeaser = () => (
  <section id="partenaires" className="py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center bg-card rounded-3xl p-10 shadow-card"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-hero-soft flex items-center justify-center mx-auto mb-5">
          <Handshake className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-3">Tu proposes des activités sportives ?</h2>
        <p className="text-muted-foreground mb-6">
          Coach, moniteur, salle ou association : MSP t'aide à trouver des clients et remplir tes créneaux.
        </p>
        <Link to="/partenaire#partenaire-top">
          <Button variant="cta" size="lg">
            Devenir partenaire
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default PartnerTeaser;
