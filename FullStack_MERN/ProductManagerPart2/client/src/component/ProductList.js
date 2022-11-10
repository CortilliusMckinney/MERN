import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

const ProductList = ({ list, setList }) => {
  const { id } = useParams();

  useEffect(() => {
    //Makes a request to the server to grab data
    axios
      .get(`http://localhost:8000/api/getProducts`) //Make request
      .then((res) => {
        console.log(res.data.products);
        setList(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (e, element) => {
    e.preventDefault();
    console.log("made it");

    axios
      .delete(`http://localhost:8000/api/deleteProduct/${element._id}`)
      .then((res) => {
        console.log("delete front end", res);
        setList(list.filter((x) => x._id !== element._id));
        Navigate("/http://localhost:3000");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        }}
      >
        <span style={{ marginLeft: "180px" }}>All Products:</span>
      </div>
      {list.map((element, index) => (
        <div key={index}>
          <Link to={`/productDetail/${element._id}`}>
            <h2>{element.title}</h2>
          </Link>
          <button
            onClick={(e) => handleDelete(e, element)}
            style={{ marginRight: "50px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
