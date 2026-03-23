import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const scrollToForm = () => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      window.location.href = "/#waitlist-form";
      return;
    }
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Accueil
          </Link>
          <a
            href="/#solution"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Comment ça marche
          </a>
          <Link
            to="/coach"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Espace coach
          </Link>
          <Button variant="cta" size="sm" onClick={scrollToForm}>
            Trouver mon activité
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50 px-6 pb-6 pt-2 space-y-4">
          <a
            href="/#solution"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Comment ça marche
          </a>
          <Link
            to="/coach"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Espace coach
          </Link>
          <Button variant="cta" size="sm" className="w-full" onClick={scrollToForm}>
            Trouver mon activité
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
