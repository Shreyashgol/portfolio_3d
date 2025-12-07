import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Hacktoberfest'25 Contributor",
    issuer: "DigitalOcean & GitHub",
    date: "2025",
    description:
      "Successfully contributed to open-source projects during Hacktoberfest 2025",
    link: "https://www.holopin.io/hacktoberfest2025/userbadge/cmhm9zptn001mjm04mzhzc7jj",
    icon: "🎃",
  },
  {
    id: 2,
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "2024",
    description:
      "Certified in API testing, development, and documentation using Postman",
    link: "https://api.badgr.io/public/assertions/15UnwDBNRhCOZUrLyGqUyw",
    icon: "📮",
  },
  {
    id: 3,
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "2024",
    description:
      "Completed comprehensive course on Generative AI fundamentals and applications",
    link: "https://www.linkedin.com/learning/certificates/761a94f74c31cb7ee7f260434bba9de96d97eec308b33bb0693133b111d5b300",
    icon: "🤖",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          <span className="text-primary">Certifications</span> & Achievements
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional certifications and recognitions that validate my skills
          and commitment to continuous learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-card rounded-lg p-6 shadow-xs card-hover border border-border"
            >
              <div className="flex items-start justify-between mb-4">
                <a
                  href={cert.link}
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <ExternalLink size={20} />
                </a>
                <Award className="h-5 w-5 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <span>{cert.issuer}</span>
                <span>•</span>
                <span>{cert.date}</span>
              </div>

              <p className="text-sm text-muted-foreground">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">
              LeetCode Problems
            </div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">LeetCode Rating</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">2-Star</div>
            <div className="text-sm text-muted-foreground">CodeChef Rating</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Live Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};
