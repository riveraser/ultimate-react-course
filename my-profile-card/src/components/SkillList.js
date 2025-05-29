import Skill from "./Skill";

const technologies = [
  {
    name: "HTML + CSS",
    icon: "IoLogoHtml5",
    bgColor: "#e34c26",
    level: "advanced",
  },
  {
    name: "JavaScript",
    icon: "IoLogoJavascript",
    bgColor: "#f0db4f",
    level: "advanced",
  },
  {
    name: "Node.js",
    icon: "IoLogoNodejs",
    bgColor: "#339933",
    level: "advanced",
  },
  {
    name: "TypeScript",
    icon: "IoLogoMicrosoft",
    bgColor: "#3178c6",
    level: "advanced",
  },
  { name: "Vue.js", icon: "IoLogoVue", bgColor: "#4fc08d", level: "advanced" },
  {
    name: "NestJS",
    icon: "IoServerSharp",
    bgColor: "#e0234e",
    level: "advanced",
  },
  {
    name: "AWS",
    icon: "IoLogoAmazon",
    bgColor: "#f09933",
    level: "intermediate",
  },
  {
    name: "Docker",
    icon: "IoLogoDocker",
    bgColor: "#2496ed",
    level: "intermediate",
  },
  {
    name: "And now React!",
    icon: "IoLogoReact",
    bgColor: "#61dafb",
    level: "begginer",
  },
];

export default function SkillList() {
  return (
    <div className="skill-container">
      {technologies.map((technology) => (
        <Skill
          key={technology.name}
          name={technology.name}
          icon={technology.icon}
          bgColor={technology.bgColor}
          level={technology.level}
        />
      ))}
    </div>
  );
}
