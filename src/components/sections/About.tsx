import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, Cloud, Zap, Users } from "lucide-react";
//import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import RevealOnScroll from "./RevealOnScroll";
const About = () => {
  //const [ref, isVisible] = useInViewAnimation();
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, JavaScript, TypeScript with modern UI/UX principles"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Python, Node.js, RESTful APIs, and microservices architecture"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "MongoDB, PostgreSQL, Redis for optimal data management"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "AWS, Azure, Docker for scalable deployment solutions"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimization, caching, and best practices for fast applications"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Agile methodologies, Git workflows, and code reviews"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-tech ">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up" >
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building the <span className="text-primary">Future</span> of Web
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I&apos;m Prince — a tech enthusiast and B.Tech student in VLSI at SVNIT. I love building digital solutions through web and app development, Python programming, and creative problem-solving. I’m always exploring new technologies, from data science to Arduino projects, and recently started my freelancing journey to turn my passion into real-world experience. My goal is to keep learning, growing, and creating meaningful digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-up"      >
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With several years of experience in full stack development, I&apos;ve had the
                  opportunity to work on diverse projects ranging from small business websites
                  to large-scale enterprise applications.
                </p>
                <p>
                  My expertise spans across the entire development stack, from crafting intuitive
                  user interfaces with React to building robust backend systems with Python and
                  managing databases with MongoDB.
                </p>
                <p>
                  I&apos;m always eager to learn new technologies and stay updated with the latest
                  industry trends. When I&apos;m not coding, you can find me contributing to open
                  source projects or writing technical articles.
                </p>
              </div>
            </div>

            <div className="animate-fade-up">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4">Quick Facts</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location</span>
                      <span>India</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Experience</span>
                      <span>3+ Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Focus</span>
                      <span>Full Stack Development</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Specialization</span>
                      <span>Web Applications</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up ">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <h4 className="font-semibold">{highlight.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;