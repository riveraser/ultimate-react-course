import * as IoIcons from "react-icons/io5";

export default function Skill({ icon, bgColor, name, level }) {
  // Get the icon component dynamically
  const IconComponent = IoIcons[icon];

  const levelIcon = {
    begginer: "👶",
    intermediate: "👍",
    advanced: "💪",
  };

  return (
    <div className="skill" key={name} style={{ backgroundColor: bgColor }}>
      {name.toUpperCase()} {IconComponent && <IconComponent />}
      <span className="level">{levelIcon[level]}</span>
    </div>
  );
}
