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
          marginLeft: "220px",
          fontSize: "30px",
          paddingTop: "50px",
          width: "500px",
        }}
      >
        All Products:
      </div>

      {/* <a href="http://localhost:3000/:productList">link text</a> */}
      {list.map((element, index) => (
        <div key={index}>
          <Link to={`/productDetail/${element._id}`}>
            <h2>{element.title}</h2>
          </Link>

          {/* <h3>${element.price}</h3>
          <h3>{element.description}</h3> */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
