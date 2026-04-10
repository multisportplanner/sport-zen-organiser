import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container text-center space-y-4">
      <p className="font-display font-bold text-lg text-gradient">MSP</p>

      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">Une question sur MSP ?</p>
        <a
          href="mailto:claire@multisportplanner.com"
          className="text-sm text-primary font-medium hover:text-primary/80 transition-colors"
        >
          claire@multisportplanner.com
        </a>
        <p className="text-xs text-muted-foreground">Je te réponds rapidement</p>
      </div>

      <div className="flex items-center justify-center gap-4 pt-1">
        <a
          href="https://www.instagram.com/claire0406msp/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61573334824171"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/company/112341125"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

      <p className="text-sm text-muted-foreground">
        Tu proposes des activités sportives ?{" "}
        <Link to="/partenaire" className="text-primary font-medium hover:text-primary/80 transition-colors">
          Devenir partenaire
        </Link>
      </p>
      <p className="text-xs text-muted-foreground">
        MultiSportPlanner © {new Date().getFullYear()} — Côte d'Azur
      </p>
    </div>
  </footer>
);

export default Footer;
