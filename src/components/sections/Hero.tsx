import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, ArrowDown, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import HeroR from "@/components/sections/HeroR";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const Hero = () => {
  const [ref, isVisible] = useInViewAnimation();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-700 ease-out transform ${isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
        }`}

      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/" />

      {/* Destop Interface */}
      <div className=" relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center hidden md:flex" >
        <HeroR />
        {/* Profile Photo */}
        <div className="relative animate fade-in-20 animate-fade-in transition-opacity delay-300 duration-600 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img src="src\assets\Profile_Desktop_img.png" alt="profile photo" style={{ height: "27rem", width: "19rem", paddingBottom: "4rem" }} />
        </div>
      </div>
      {/* Mobile Interface */}
      <div className=" relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:hidden" >
        {/* Profile Photo */}
        <div className="animate fade-in-20">
          <img src="src\assets\Profile_Mobile_img.png" alt="profile photo" style={{ margin: "1rem" }} />
        </div>
        <HeroR />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-tech-float">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection("about")}
          className="text-muted-foreground hover:text-primary"
        >
          <ArrowDown size={24} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;