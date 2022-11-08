import React from "react";
import { useNavigate } from "react-router-dom";

export const Links = () => {
  const navigate = useNavigate();

  return (
    <switch>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </switch>
  );
};
