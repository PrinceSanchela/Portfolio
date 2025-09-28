import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/PrinceSanchela", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/prince-sanchela/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:princesanchela@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-card/30 border-t border-border/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-mono text-primary">
              &lt;Prince Sanchela/&gt;
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer passionate about building innovative web solutions 
              with modern technologies.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted/50 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 princesanchela@gmail.com</p>
              <p>📱 +91 94288 33210</p>
              <p>📍 India</p>
            </div>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="sm"
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              <Mail className="mr-2" size={16} />
              Let&apos;s Connect
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm flex items-center">
            Made by Prince Sanchela
          </div>
          
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>

          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary"
          >
            <ArrowUp size={16} className="mr-1" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;