import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "JavaScript", level: 95, category: "languages" },
  { name: "Python", level: 85, category: "languages" },
  { name: "TypeScript", level: 80, category: "languages" },

  // Frontend
  { name: "HTML", level: 95, category: "frontend" },
  { name: "CSS", level: 90, category: "frontend" },
  { name: "React", level: 95, category: "frontend" },
  { name: "Redux", level: 75, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Figma", level: 75, category: "frontend" },

  // Backend
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "FastApi", level: 70, category: "backend" },

  // Databases
  { name: "MySQL", level: 80, category: "databases" },
  { name: "PostgreSQL", level: 80, category: "databases" },
  { name: "MongoDB", level: 75, category: "databases" },

  // Cloud & DevOps
  { name: "AWS", level: 70, category: "cloud" },
  { name: "Linux", level: 80, category: "cloud" },
  { name: "Virtualization", level: 65, category: "cloud" },
  { name: "Vercel", level: 85, category: "cloud" },

  // Machine Learning / AI
  { name: "Generative AI", level: 75, category: "ai" },
  { name: "Hugging Face", level: 65, category: "ai" },

  // Data & Analytics
  { name: "Pandas", level: 75, category: "data" },
  { name: "NumPy", level: 75, category: "data" },
  { name: "Matplotlib", level: 70, category: "data" },
  { name: "Scikit-learn", level: 85, category: "data" },

  // Visualization Libraries
  { name: "Chart.js", level: 75, category: "visualization" },
  { name: "Matplotlib", level: 70, category: "visualization" },

  // Other Tools
  { name: "Postman", level: 85, category: "other" },
  { name: "VS Code", level: 95, category: "other" },
  { name: "Firebase", level: 80, category: "other" },
  { name: "Prisma ORM", level: 75, category: "other" },
  { name: "Git/GitHub", level: 95, category: "cloud" }
];

const categories = [
  "languages",
  "frontend",
  "backend",
  "databases",
  "cloud",
  "ai",
  "data",
  "visualization",
  "other"
];

const categoryLabels = {
  languages: "Programming Languages",
  frontend: "Frontend",
  backend: "Backend",
  databases: "Databases",
  cloud: "Cloud & DevOps",
  ai: "ML / AI",
  data: "Data & Analytics",
  visualization: "Visualization",
  other: "Other Tools"
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
