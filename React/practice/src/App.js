import "./App.css";
import { useState } from "react";
import DisplayBox from "./components/DisplayBox";

function App(props) {
  const [array, setArray] = useState([]);
  const [boxColor, setBoxColor] = useState({});

  const format = {
    color: "",
  };

  const handleInput = (e) => {
    setBoxColor({ color: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setArray([...array, boxColor]);
    setBoxColor({ color: "" });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>COLOR</label>
        <input onChange={handleInput} type="text" value={boxColor.color} />
        <button>ADD</button>
      </form>

      <DisplayBox array={array} format={format} />
    </div>
  );
}

export default App;
