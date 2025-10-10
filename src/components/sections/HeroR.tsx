import { Button } from "@/components/ui/button";
import { url } from "inspector";
import { Github, Linkedin, Mail, Download, Briefcase } from "lucide-react";
import { ReactTyped } from "react-typed";
import { URL } from "url";

const HeroR: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Prince_Sanchela_Resume.pdf"; // your file name in public/
    link.download = "Prince Sanchela Resume.pdf"; // file name for user
    link.click();
    alert("Prince Sanchela Resume downloaded successfully");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className=" relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" >
      {/* Content */}
      <div className="animate-fade-up pt-[5rem]">

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 ...">
          Prince Sanchela
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-mono">
          <ReactTyped
            strings={[
              "Full Stack Web Developer",
              "Python Programmer",
              "App Developer",
            ]}
            typeSpeed={70}
            backSpeed={40}
            backDelay={1500}
            loop
          />
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
            onClick={handleDownload}
            variant="outline"
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10 hover:text-muted-foreground"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/PrinceSanchela" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
            >
              <Github size={24} />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/prince-sanchela" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
            >
              <Linkedin size={24} />
            </Button>
          </a>
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
  );
};

export default HeroR;
