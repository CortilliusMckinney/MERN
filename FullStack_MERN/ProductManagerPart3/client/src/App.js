import "./App.css";

import ProductRoutes from "./component/ProductRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProductRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
