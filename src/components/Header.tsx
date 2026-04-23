import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONVERSION_SECTION_ID, PRIMARY_CTA_LABEL } from "@/lib/cta";
import { SHOW_BLOG_IN_NAV } from "@/config/features";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/#hero");
      return;
    }
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const goToPartnerPage = () => {
    setMobileOpen(false);
    navigate("/partenaire");
  };

  const goToBlog = () => {
    setMobileOpen(false);
    navigate("/blog");
  };

  const goToConversionSection = () => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${CONVERSION_SECTION_ID}`);
      return;
    }
    document.getElementById(CONVERSION_SECTION_ID)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <button onClick={scrollToTop} className="flex items-center">
          <img
            src={logo}
            alt="MSP - MultiSport Planner"
            className="h-8 md:h-11 w-auto object-contain"
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={scrollToTop}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection("activites")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Idées d'activités
          </button>
          <button
            onClick={() => scrollToSection("comment-ca-marche")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Comment ça marche
          </button>
          {SHOW_BLOG_IN_NAV && (
            <button
              onClick={goToBlog}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </button>
          )}
          <button
            onClick={goToPartnerPage}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Partenaires
          </button>
          <Button variant="cta" size="sm" onClick={goToConversionSection}>
            {PRIMARY_CTA_LABEL}
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
          <button
            onClick={scrollToTop}
            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors w-full text-left"
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection("activites")}
            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors w-full text-left"
          >
            Idées d'activités
          </button>
          <button
            onClick={() => scrollToSection("comment-ca-marche")}
            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors w-full text-left"
          >
            Comment ça marche
          </button>
          {SHOW_BLOG_IN_NAV && (
            <button
              onClick={goToBlog}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors w-full text-left"
            >
              Blog
            </button>
          )}
          <button
            onClick={goToPartnerPage}
            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors w-full text-left"
          >
            Partenaires
          </button>
          <Button variant="cta" size="sm" className="w-full" onClick={goToConversionSection}>
            {PRIMARY_CTA_LABEL}
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
