import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";
import EditForm from "./EditForm";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

const ProductRoutes = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/edit/productDetail/:id" element={<EditForm />} />
      </Routes>
    </div>
  );
};

export default ProductRoutes;
