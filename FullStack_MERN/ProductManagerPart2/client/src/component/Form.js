import axios from "axios";
import React from "react";
import { useState } from "react";
import ProductList from "./ProductList";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/new", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log("newEdition", res.data.Product);
        setList([...list, res.data.Product]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Product Manager</h2>
        <div className="mainContainer">
          <div className="input1">
            <label>Title</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="input2">
            <label>Price</label>
            <input type="number" onChange={(e) => setPrice(e.target.value)} />
          </div>

          <div className="input3">
            <label>Description</label>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit">Create</button>
        </div>
      </form>
      <ProductList list={list} setList={setList} />
    </div>
  );
};

export default Form;
