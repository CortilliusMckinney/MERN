import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    //Makes a request to the server to grab data
    axios
      .get("http://localhost:8000/api/getProducts") //Make request
      .then((res) => {
        console.log(res.data.products);
        setList(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div
        style={{
          borderTopStyle: "solid",
          borderTopWidth: "3PX",
          marginTop: "50px",
          marginLeft: "px",
          fontSize: "30px",
          paddingTop: "50px",
          width: "500px",
          display: "inline-flex",
          // textAlign: "center",
        }}
      >
        <span style={{ marginLeft: "180px" }}>All Products:</span>
      </div>
      {list.map((element, index) => (
        <div key={index}>
          <Link to={`/productDetail/${element._id}`}>
            <h2>{element.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
