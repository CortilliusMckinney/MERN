import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Numbers from "./components/Numbers";

import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/home" //This is the URL path we're going too
            element={<Home />} //This is the element that will be render in said path
          />

          <Route
            path="/:input" //This is the URL path we're going too
            element={<Numbers />} //This is the element that will be render in said path
          />

          <Route
            path="/:input/:color1/:color2" //This is the URL path we're going too
            element={<Hello />} //This is the element that will be render in said path
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
