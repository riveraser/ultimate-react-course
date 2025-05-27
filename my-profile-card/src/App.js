import Avatar from "./components/Avatar";
import Information from "./components/Information";
import SkillList from "./components/SkillList";

function App() {
  return (
    <div className="app">
      <div className="card">
        <Avatar />
        <Information name="Sergio Rivera" />
        <SkillList />
      </div>
    </div>
  );
}
export default App;
