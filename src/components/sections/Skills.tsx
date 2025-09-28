import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90, color: "text-blue-400" },
        { name: "JavaScript", level: 95, color: "text-yellow-400" },
        { name: "TypeScript", level: 85, color: "text-blue-500" },
        { name: "HTML/CSS", level: 95, color: "text-orange-400" },
        { name: "Tailwind CSS", level: 90, color: "text-cyan-400" }
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Python", level: 95, color: "text-green-400" },
        { name: "Node.js", level: 85, color: "text-green-500" },
        { name: "Express.js", level: 80, color: "text-gray-400" },
        { name: "FastAPI", level: 88, color: "text-teal-400" },
        { name: "REST APIs", level: 92, color: "text-purple-400" }
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB", level: 90, color: "text-green-500" },
        { name: "PostgreSQL", level: 75, color: "text-blue-600" },
        { name: "Redis", level: 70, color: "text-red-400" },
        { name: "AWS", level: 75, color: "text-orange-500" },
        { name: "Docker", level: 80, color: "text-blue-400" }
      ]
    }
  ];

  const tools = [
    "Git", "GitHub", "VS Code", "Postman", "Figma", "Jira", 
    "Linux", "Nginx", "Jest", "Cypress", "Webpack", "Vite"
  ];

  return (
    <section id="skills" className="py-20">
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
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="bg-card/50 border-border/50 backdrop-blur-sm animate-fade-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className={`text-sm font-mono ${skill.color}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card/50 border-border/50 backdrop-blur-sm animate-fade-up">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-6 text-center">
              Tools & Technologies
            </h3>
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
  );
};

export default Skills;