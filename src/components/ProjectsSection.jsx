import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "crekAI - AI Career Coach",
    description: "AI-powered career coaching platform with resume builder, interview prep, and industry insights using Google Gemini AI.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Tailwind CSS"],
    demoUrl: "https://capstone3-ai-coach-3to1.vercel.app/",
    githubUrl: "https://github.com/Shreyashgol/capstone3-ai-coach",
  },
  {
    id: 2,
    title: "Agrovers",
    description:
      "Agriculture platform connecting farmers with resources and modern farming solutions.",
    image: "/projects/project2.png",
    tags: ["React","TypeScript", "Firebase","FastAPI", "FAISS", "Sentence Transformers", "Gemini API", "Tailwind CSS"],
    demoUrl: "https://agrovers-wow-tau.vercel.app/",
    githubUrl: "https://github.com/Shreyashgol/agrovers_wow",
  },
  {
    id: 3,
    title: "Real-Estate Property Search",
    description:
      "Interactive real estate website with property search, Firebase authentication, and email contact forms with Framer Motion animations.",
    image: "/projects/project3.png",
    tags: ["React", "Firebase", "Framer Motion", "Vite"],
    demoUrl: "https://real-estate-app-teal.vercel.app/",
    githubUrl: "https://github.com/Shreyashgol/real_estate_app",
  },
  {
    id: 4,
    title: "Anapan AI Sales Agent",
    description: "Build an AI meeting preparation assistant such that before every meeting, you should automatically get a prep with all the required insights about the person you are meeting with.",
    image: "/projects/project4.png",
    tags: ["Next.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Outh","DuckDuckGo Scraper"],
    demoUrl: "https://ai-meeting-assistant-topaz.vercel.app/",
    githubUrl: "https://github.com/Shreyashgol/ai-meeting-assistant",
  },
  {
    id: 5,
    title: "genMap - Interactive Family Health Tree",
    description: "A privacy-focused web application for building family trees, tracking genetic health conditions, and calculating hereditary disease risks using AI-powered analysis.",
    image: "/projects/project5.png",
    tags: ["Next.js", "Node.js", "Express", "PostgreSQL", "JWT", "Tailwind CSS"],
    demoUrl: "https://heredity-matcher-ihfp.vercel.app/",
    githubUrl: "https://github.com/Shreyashgol/heredity_matcher",
  }
];
export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Shreyashgol"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
