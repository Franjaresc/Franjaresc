import Icons from "@/components/icons/Icons";
import Image from "next/image";

const TechnicalSkills = [
  { id: 0, nombre: "Java", Icon: Icons.Java, label: "Java", color: "text-primary" },
  { id: 1, nombre: "Python", Icon: Icons.Python, label: "Python", color: "text-primary" },
  { id: 2, nombre: "HTML5", Icon: Icons.HTML, label: "HTML5", color: "text-primary" },
  { id: 3, nombre: "CSS", Icon: Icons.CSS, label: "CSS3", color: "text-primary" },
  { id: 4, nombre: "JavaScript", Icon: Icons.JavaScript, label: "JavaScript", color: "text-primary" },
  { id: 5, nombre: "React", Icon: Icons.React, label: "React", color: "text-primary" },
  { id: 6, nombre: "NodeJS", Icon: Icons.NodeJS, label: "NodeJS", color: "text-primary" },
  { id: 7, nombre: "Express", Icon: Icons.Express, label: "Express", color: "text-primary" },
  { id: 8, nombre: "MongoDB", Icon: Icons.MongoDB, label: "MongoDB", color: "text-primary" },
  { id: 9, nombre: "Docker", Icon: Icons.Docker, label: "Docker", color: "text-primary" },
  { id: 10, nombre: "Git", Icon: Icons.Git, label: "Git", color: "text-primary" },
  { id: 11, nombre: "GitHub", Icon: Icons.GitHub, label: "GitHub", color: "text-primary" },
  { id: 12, nombre: "Azure", Icon: Icons.Azure, label: "Azure", color: "text-primary" },
  { id: 13, nombre: "SQL", Icon: Icons.SQL, label: "SQL", color: "text-primary" },
  { id: 14, nombre: "NextJS", Icon: Icons.NextJS, label: "NextJS", color: "text-primary" },
];

const InterpersonalSkills = [
  { id: 0, nombre: "Teamwork", label: "Teamwork", color: "text-primary" },
  { id: 1, nombre: "Leadership", label: "Leadership", color: "text-primary" },
  { id: 2, nombre: "Communication", label: "Communication", color: "text-primary" },
  { id: 3, nombre: "Problem Solving", label: "Problem Solving", color: "text-primary" },
  { id: 4, nombre: "Adaptability", label: "Adaptability", color: "text-primary" },
  { id: 5, nombre: "Creativity", label: "Creativity", color: "text-primary" },
];

function Skills() {
  return (
    <section className="flex flex-col items-center gap-8 p-4" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="text-3xl text-primary font-bold">
        Skills
      </h2>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-2xl text-primary-foreground font-semibold" id="technical-skills-heading">
          Technical Skills
        </h3>
        <ul className="flex flex-wrap gap-6 justify-center" aria-labelledby="technical-skills-heading">
          {TechnicalSkills.map(({ id, Icon, label, color }) => (
            <li key={id} className="flex flex-col items-center gap-2">
              <Image src={Icon} alt={`${label} Icon`} className={`${color}`} height={40} />
              <span className={`text-sm font-medium ${color}`}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-2xl text-primary-foreground font-semibold" id="interpersonal-skills-heading">
          Interpersonal Skills
        </h3>
        <ul className="flex flex-wrap gap-6 justify-center" aria-labelledby="interpersonal-skills-heading">
          {InterpersonalSkills.map(({ id, label, color }) => (
            <li key={id} className="flex flex-col items-center gap-2">
              <span className={`text-sm font-medium ${color}`}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;