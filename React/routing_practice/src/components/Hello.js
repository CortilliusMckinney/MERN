import React from "react";
import { useParams } from "react-router-dom";

const Hello = () => {
  const { input, color1, color2 } = useParams();

  return (
    <div>
      <h1 style={{ backgroundColor: color1, color: color2 }}>
        The word is: {input}
      </h1>
    </div>
  );
};

export default Hello;
