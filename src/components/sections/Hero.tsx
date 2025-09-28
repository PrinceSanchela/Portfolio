import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, ArrowDown, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Prince Sanchela
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-mono">
            &lt; Full Stack Developer /&gt;
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Crafting scalable web applications with{" "}
            <span className="text-primary font-semibold">Python</span>,{" "}
            <span className="text-accent font-semibold">React</span>, and{" "}
            <span className="text-success font-semibold">MongoDB</span>.
            Passionate about building innovative solutions that drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow shadow-glow hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection("projects")}
            >
              <Briefcase className="mr-2" size={20} />
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
            >
              <Github size={24} />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
            >
              <Linkedin size={24} />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
              onClick={() => scrollToSection("contact")}
            >
              <Mail size={24} />
            </Button>
          </div>
        </div>
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