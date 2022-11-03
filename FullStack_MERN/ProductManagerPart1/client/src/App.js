import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form action="">
        <h2>Product Manager</h2>
        <div className="mainContainer">
          <div className="input1">
            <span>Title</span>
            <input type="text" />
          </div>
          <div className="input2">
            <span>Price</span>
            <input type="text" />
          </div>
          <div className="input3">
            <span>Description</span>
            <input type="text" />
          </div>
          <button>Create</button>
        </div>
      </form>
    </div>
  );
}

export default App;
