import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

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

  return (
    <div>
      <h1>products</h1>
      <p>{item.title}</p>
      <p>{item.price}</p>
      <p>{item.description}</p>
      {/* <p>{item.description}</p> */}
    </div>
  );
};

export default ProductDetail;
