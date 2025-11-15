import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, FileText, User, Briefcase, Mail, BookOpen } from "lucide-react";
import PrinceProgrammerLogo from "@/assets/Prince_programmer_logo.png"
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  

  const navItems = [
    { id: "home", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "blog", label: "Blog", icon: BookOpen },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },);

useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (sectionId) {
      const element = document.getElementById(sectionId);

      setTimeout(() => {
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 350);

      // Optional improvement: clear state after scroll
      setTimeout(() => {
        navigate(location.pathname, { replace: true, state: null });
      }, 600);
    }
  }, [location.pathname, location.state, navigate]);

  const scrollToSection = (sectionId: string) => {

  if (location.pathname !== "/") {
    // If not on home page → send scroll target to home
    navigate("/", { state: { scrollTo: sectionId } });
  } else {
    // Already on home → scroll directly
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  setIsOpen(false);
};

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold font-mono text-primary hover:text-primary-glow transition-colors"
            >
              <img className="h-10" src={PrinceProgrammerLogo} alt="prince_logo" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return item.id === "blog" ? (
                  // ✅ Use Link for Blog
                  <Link
                    key={item.id}
                    to="/blog"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                      }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </Link>
                ) : (
                  // Regular scroll button for other items
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                      }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-b border-border">
            {navItems.map((item) => {
              const Icon = item.icon;
              return item.id === "blog" ? (
                // ✅ Use Link for Blog
                <Link
                  key={item.id}
                  to="/blog"
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeSection === item.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                    }`}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              ) : (
                // Regular scroll button for other items
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeSection === item.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                    }`}
                >
                  <Icon size={16} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;