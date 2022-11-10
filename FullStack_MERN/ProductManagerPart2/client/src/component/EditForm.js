import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();
  const [item, setItem] = useState({ title: "", price: 0, description: "" });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getOneProducts/${id}`) //Make request
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/UpdateOneProduct/${item._id}`, item)
      .then((res) => {
        console.log("EditEdition", res.data);
        setItem(res.data);
        navigate("/");
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
            <input
              type="text"
              value={item.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="input2">
            <label>Price</label>
            <input
              type="number"
              value={item.price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="input3">
            <label>Description</label>
            <input
              type="text"
              value={item.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit">Edit</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
