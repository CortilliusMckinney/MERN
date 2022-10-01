import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App(props) {
  return (
    <div className="App">
      <PersonCard
        lastName={"Doe,"}
        firstName={"Jane"}
        age={"Age: 45"}
        hairColor={"Hair Color: Black"}
      />
      <PersonCard
        lastName={"John,"}
        firstName={"Smith"}
        age={"Age: 88"}
        hairColor={"Hair Color: Brown"}
      />

      <PersonCard
        lastName={"Fillmore,"}
        firstName={"Millard"}
        age={"Age: 50"}
        PersonCard
        hairColor={"Hair Color: Brown"}
      />

      <PersonCard
        lastName={"Smith,"}
        firstName={"Maria"}
        age={"Age: 34"}
        PersonCard
        hairColor={"Hair Color: Brown"}
      />
    </div>
  );
}

export default App;
