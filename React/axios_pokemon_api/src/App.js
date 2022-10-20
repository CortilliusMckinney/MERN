import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10000")
      .then((response) => {
        console.log(data);
        setData(response.data.results);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button>Fetch Pokemon</button>
      </header>

      {data.map((item, index) => (
        <div key={index}>
          <li>{item.name}</li>
        </div>
      ))}
    </div>
  );
}

export default App;
