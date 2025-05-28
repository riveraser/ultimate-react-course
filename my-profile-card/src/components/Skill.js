import * as IoIcons from "react-icons/io5";

export default function Skill({ icon, bgColor, name, level }) {
  // Get the icon component dynamically
  const IconComponent = IoIcons[icon];

  return (
    <div className="skill" key={name} style={{ backgroundColor: bgColor }}>
      {name.toUpperCase()} {IconComponent && <IconComponent />}
      <span className="level">{level === "begginer" && "👶"}</span>
      <span className="level">{level === "intermediate" && "👍"}</span>
      <span className="level">{level === "advanced" && "💪"}</span>
    </div>
  );
}
