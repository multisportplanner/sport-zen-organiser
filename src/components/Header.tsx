import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="MSP - MultiSport Planner"
            className="h-8 md:h-11 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#solution"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Comment ça marche
          </a>
          <a
            href="#pilote"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Lancement pilote
          </a>
          <a
            href="#waitlist-form"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Rejoindre
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
