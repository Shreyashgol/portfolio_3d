import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Hacktoberfest'25 Super-Contributor",
    issuer: "DigitalOcean",
    description:
      "Successfully contributed to open-source projects during Hacktoberfest 2025",
    link: "https://www.holopin.io/hacktoberfest2025/userbadge/cmhm9zptn001mjm04mzhzc7jj",
    icon: "🎃",
  },
  {
    id: 2,
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    description:
      "Certified in API testing, development, and documentation using Postman",
    link: "https://api.badgr.io/public/assertions/15UnwDBNRhCOZUrLyGqUyw",
    icon: "📮",
  },
  {
    id: 3,
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    description:
      "Completed comprehensive course on Generative AI fundamentals and applications",
    link: "https://www.linkedin.com/learning/certificates/761a94f74c31cb7ee7f260434bba9de96d97eec308b33bb0693133b111d5b300",
    icon: "🤖",
  },
  {
    id: 4,
    title: "GSSOC'25 Contributor",
    issuer: "GirlScript Summer of Code",
    description:
      "Successfully contributed to open-source projects during GirlScript Summer of Code",
    link: "https://drive.google.com/file/d/1AI6y5WaHbGb-B2jOMGD6j-LURghFS-o8/view?usp=sharing",
    icon: "🎃",
  },
  {
    id: 5,
    title: "SOF National Science Olympiad",
    issuer: "Science Olympiad Foundation",
    description:
      "Securing 3 Rank in SOF",
    link: "https://drive.google.com/file/d/1Jrb5O7oFz6WAvMgUzPGIusFhO9JroXfT/view?usp=sharing",
    icon: "🎃",
  },
  {
    id: 6,
    title: "BrainCafe Building Scientist Contest",
    issuer: "Zee Learn Ltd",
    description:
      "Securing 3 Rank in Building Scientist Contest by building scalable model",
    link: "https://drive.google.com/file/d/1Deqwv7P-ltjQ0URMp9DMIzPY-tlPWmMZ/view?usp=sharing",
    icon: "🎃",
  }

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

              <p className="text-sm text-muted-foreground">
                {cert.issuer}
              </p>

              <p className="m-4 text-sm text-muted-foreground">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
