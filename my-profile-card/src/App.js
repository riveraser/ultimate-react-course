import Avatar from "./components/Avatar";
import Information from "./components/Information";
import Stack from "./components/Stack";

const technologies = [
  { name: "HTML + CSS", icon: "IoLogoHtml5", bgColor: "#e34c26" },
  { name: "JavaScript", icon: "IoLogoJavascript", bgColor: "#f0db4f" },
  { name: "Node.js", icon: "IoLogoNodejs", bgColor: "#339933" },
  { name: "TypeScript", icon: "IoLogoMicrosoft", bgColor: "#3178c6" },
  { name: "Vue.js", icon: "IoLogoVue", bgColor: "#4fc08d" },
  { name: "NestJS", icon: "IoServerSharp", bgColor: "#e0234e" },
  { name: "AWS", icon: "IoLogoAmazon", bgColor: "#f09933" },
  { name: "Docker", icon: "IoLogoDocker", bgColor: "#2496ed" },
  { name: "And now React!", icon: "IoLogoReact", bgColor: "#61dafb" },
];

function App() {
  return (
    <div className="app">
      <div className="card">
        <Avatar />
        <Information name="Sergio Rivera" />
        <div className="stack-container">
          {technologies.map((technology) => (
            <Stack
              key={technology.name}
              name={technology.name}
              icon={technology.icon}
              bgColor={technology.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
