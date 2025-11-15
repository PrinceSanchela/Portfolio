import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { useState, useEffect, useRef } from "react";
import RevealOnScroll from "./RevealOnScroll";
import webcer from "../../assets/certificates/Web development - sololearn.jpg";
import ccer from "../../assets/certificates/Prince Sanchela - C sololearn.jpg";
import pycer from "../../assets/certificates/Prince Sanchela - Python.png";

interface Skill {
  name: string;
  level: number; // percent
  color: string; // text color for label
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  image?: string; // optional certificate image
}

const certificates: Certificate[] = [
  {
    title: "Fullstack Web Development",
    issuer: "Sololearn",
    date: "15 Nov 2025",
    link: "https://www.sololearn.com/certificates/CC-KBYWMSQ8",
    image: webcer,
  },
  {
    title: "C - Introdunction",
    issuer: "sololearn",
    date: "2025",
    link: "https://www.sololearn.com/certificates/CC-XBNVMPEM",
    image: ccer,
  },
  {
    title: "Python Programmer",
    issuer: "Kaggle",
    date: "Feb 2025",
    link: "https://www.kaggle.com/learn/certification/princesanchela/python",
    image: pycer,
  },
];

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 90, color: "text-blue-400" },
      { name: "JavaScript", level: 95, color: "text-yellow-400" },
      { name: "TypeScript", level: 85, color: "text-blue-500" },
      { name: "HTML/CSS", level: 95, color: "text-orange-400" },
      { name: "Tailwind CSS", level: 90, color: "text-cyan-400" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Python", level: 95, color: "text-green-400" },
      { name: "Node.js", level: 85, color: "text-green-500" },
      { name: "Express.js", level: 80, color: "text-gray-400" },
      { name: "FastAPI", level: 88, color: "text-teal-400" },
      { name: "REST APIs", level: 92, color: "text-purple-400" },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB", level: 90, color: "text-green-500" },
      { name: "PostgreSQL", level: 75, color: "text-blue-600" },
      { name: "Redis", level: 70, color: "text-red-400" },
      { name: "AWS", level: 75, color: "text-orange-500" },
      { name: "Docker", level: 80, color: "text-blue-400" },
    ],
  },
];

const tools = [
  "Git", "GitHub", "VS Code", "Postman", "Figma", "Jira",
  "Linux", "Nginx", "Jest", "Cypress", "Webpack", "Vite"
];

const Skills = () => {
  const [ref, isVisible] = useInViewAnimation();
  const [progress, setProgress] = useState<number[][]>(
    skillCategories.map(category => category.skills.map(() => 0))
  );

  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    timeoutsRef.current.forEach(t => clearTimeout(t));
    timeoutsRef.current = [];

    if (isVisible) {
      skillCategories.forEach((category, catIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          const delay = (catIndex * 5 + skillIndex) * 150;
          const steps = 50;
          const increment = skill.level / steps;

          for (let i = 0; i <= steps; i++) {
            const timeout = setTimeout(() => {
              setProgress(prev => {
                const newProgress = prev.map(arr => [...arr]);
                newProgress[catIndex][skillIndex] = Math.min(Math.round(i * increment), skill.level);
                return newProgress;
              });
            }, delay + i * 15);
            timeoutsRef.current.push(timeout);
          }
        });
      });
    } else {
      setProgress(skillCategories.map(category => category.skills.map(() => 0)));
    }

    return () => {
      timeoutsRef.current.forEach(t => clearTimeout(t));
      timeoutsRef.current = [];
    };
  }, [isVisible]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollContainerRef.current?.scrollLeft || 0;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = x - startX.current;
    if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const handleMouseUp = () => { isDragging.current = false; };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollContainerRef.current?.scrollLeft || 0;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = x - startX.current;
    if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const handleTouchEnd = () => { isDragging.current = false; };

  interface TiltCardProps {
    certificate: Certificate;
  }

  const TiltCard = ({ certificate }: TiltCardProps) => {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const [style, setStyle] = useState({ transform: "rotateX(0deg) rotateY(0deg)" });

    const handleMouseMoveCard = (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;
      setStyle({ transform: `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)` });
    };
    const handleMouseLeaveCard = () => { setStyle({ transform: "rotateX(0deg) rotateY(0deg)" }); };

    return (
      <a
        ref={cardRef}
        href={certificate.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMoveCard}
        onMouseLeave={handleMouseLeaveCard}
        className="relative w-[300px] sm:w-[350px] md:w-[400px] flex-shrink-0 bg-card/40 border border-transparent backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center text-center transition-all duration-500 ease-out
                   hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 hover:brightness-110"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
          ...style,
        }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>

        {certificate.image && (
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl shadow-md z-10 relative"
          />
        )}
        <h3 className="text-lg font-bold mt-4 z-10 relative">{certificate.title}</h3>
        <p className="text-sm text-muted-foreground mb-1 z-10 relative">{certificate.issuer}</p>
        <p className="text-xs text-muted-foreground z-10 relative">{certificate.date}</p>
      </a>
    );
  };

  return (
    <RevealOnScroll>
      {/* Skills Section */}
      <section
        id="skills"
        ref={ref}
        className={`py-20 transition-all duration-700 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              Technical Skills
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My <span className="text-primary">Technology</span> Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Here are the technologies and tools I use to bring ideas to life.
              I&apos;m always learning and expanding my skillset.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, catIndex) => (
              <Card
                key={catIndex}
                className="bg-card/50 border-border/50 backdrop-blur-sm animate-fade-up"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className={`text-sm font-mono ${skill.color}`}>
                            {progress[catIndex][skillIndex]}%
                          </span>
                        </div>
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-3 rounded-full transition-all duration-300 ease-out bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400`}
                            style={{ width: `${progress[catIndex][skillIndex]}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/50 border-border/50 backdrop-blur-sm animate-fade-up">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-center">Tools & Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              Certificates
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Here are some of the certificates I earned through professional courses and training.
            </p>
          </div>

          <div
            className="relative w-full overflow-hidden no-scrollbar"
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex gap-6 animate-scroll whitespace-nowrap">
              {certificates.map((cert, index) => (
                <TiltCard key={index} certificate={cert} />
              ))}
              {certificates.map((cert, index) => (
                <TiltCard key={`duplicate-${index}`} certificate={cert} />
              ))}
            </div>
          </div>

          <style>{`
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            .animate-scroll { display: flex; animation: scroll 20s linear infinite; }
            @media (max-width: 768px) { .animate-scroll { animation: scroll 20s linear infinite; } }
          `}</style>
        </div>
      </section>
    </RevealOnScroll>
  );
};

export default Skills;
