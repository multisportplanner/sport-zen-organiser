import { motion } from "framer-motion";
import { MapPin, Users } from "lucide-react";

const LaunchSection = () => (
  <section className="py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          MSP lance actuellement ses{" "}
          <span className="text-gradient">premiers groupes sportifs.</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <div className="flex items-center gap-3 bg-card rounded-xl px-5 py-4 shadow-card">
            <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-sm">Entre Nice, Antibes et Sophia Antipolis</span>
          </div>
          <div className="flex items-center gap-3 bg-card rounded-xl px-5 py-4 shadow-card">
            <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-sm">Places limitées pour les premiers participants</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default LaunchSection;
