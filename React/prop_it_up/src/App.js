import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App(props) {
  return (
    <div className="App">
      <PersonCard lastName={"Doe,"} firstName={"Jane"} />
      <PersonCard age={"Age: 45"} />
      <PersonCard hairColor={"Hair Color: Black"} />

      <PersonCard lastName={"John,"} firstName={"Smith"} />
      <PersonCard age={"Age: 88"} />
      <PersonCard hairColor={"Hair Color: Brown"} />

      <PersonCard lastName={"Fillmore,"} firstName={"Millard"} />
      <PersonCard age={"Age: 50"} />
      <PersonCard hairColor={"Hair Color: Brown"} />

      <PersonCard lastName={"Smith,"} firstName={"Maria"} />
      <PersonCard age={"Age: 50"} />
      <PersonCard hairColor={"Hair Color: Brown"} />
    </div>
  );
}

export default App;
