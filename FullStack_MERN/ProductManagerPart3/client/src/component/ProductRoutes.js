import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";
import ProductDetail from "./ProductDetail";

const ProductRoutes = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        {/* <Route path="/productList" element={<ProductList />} /> */}
        <Route path="/productDetail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default ProductRoutes;
