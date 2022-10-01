import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App(props) {
  return (
    <div className="App">
      <PersonCard
        lastName={"Doe"}
        firstName={"Jane"}
        age={"Age: "}
        hairColor={"Hair Color: Black"}
        initialAge={24}
      />
      <br></br>
      <br></br>
      <PersonCard
        lastName={"Smith"}
        firstName={"John"}
        age={"Age: "}
        hairColor={"Hair Color: Brown"}
        initialAge={35}
      />
    </div>
  );
}
export default App;
