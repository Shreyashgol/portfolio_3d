import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-stack Developer & Problem Solver
            </h3>

            <p className="text-muted-foreground">
              Currently pursuing B.Tech at Newton School of Technology, Rishihood University.
              I specialize in building scalable web applications with strong foundations in
              algorithms, data structures, and modern development practices.
            </p>

            <p className="text-muted-foreground">
              Passionate about solving real-time problems through ideation and programming.
              With 500+ LeetCode problems solved and contributions to open-source projects,
              I focus on delivering reliable, high-quality solutions through analytical
              thinking and rapid execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1rf1ig0kTHnCT7YsencHzJDNTcz8sGJ3N/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-stack Development</h4>
                  <p className="text-muted-foreground">
                    Building end-to-end web applications with React, Node.js,
                    PostgreSQL, and modern deployment platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI Integration</h4>
                  <p className="text-muted-foreground">
                    Integrating AI capabilities using Google Gemini and other
                    modern AI technologies into web applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Strong algorithmic thinking with 500+ problems solved on
                    LeetCode and 2-Star rating on CodeChef.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
