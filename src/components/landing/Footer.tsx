const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container text-center">
      <p className="font-display font-bold text-lg text-gradient mb-1">MSP</p>
      <p className="text-xs text-muted-foreground">
        MultiSportPlanner © {new Date().getFullYear()} — Nice & Sophia Antipolis
      </p>
    </div>
  </footer>
);

export default Footer;
