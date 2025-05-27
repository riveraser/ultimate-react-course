import * as IoIcons from "react-icons/io5";

export default function Skill(props) {
  // Get the icon component dynamically
  const IconComponent = IoIcons[props.icon];

  return (
    <div
      className="skill"
      key={props.name}
      style={{ backgroundColor: props.bgColor }}
    >
      {props.name.toUpperCase()} {IconComponent && <IconComponent />}
    </div>
  );
}
