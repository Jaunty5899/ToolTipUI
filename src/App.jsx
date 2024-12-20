import "./App.css";
import ListItem from "./ListItem";

function App() {
  return (
    <div className="container">
      <ul className="list">
        <ListItem name="Home" tip="This is home" />
        <ListItem name="Projects" tip="Here is everything i have built" />
        <ListItem name="Blog" tip="Home of my Stories" />
      </ul>
    </div>
  );
}

export default App;
