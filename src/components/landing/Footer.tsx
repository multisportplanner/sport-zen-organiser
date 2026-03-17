import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container text-center space-y-3">
      <p className="font-display font-bold text-lg text-gradient">MSP</p>
      <p className="text-sm text-muted-foreground">
        Tu es coach sportif ?{" "}
        <Link to="/coach" className="text-primary font-medium hover:text-primary/80 transition-colors">
          Devenir coach partenaire
        </Link>
      </p>
      <p className="text-xs text-muted-foreground">
        MultiSportPlanner © {new Date().getFullYear()} — Nice & Sophia Antipolis
      </p>
    </div>
  </footer>
);

export default Footer;
