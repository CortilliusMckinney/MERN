import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";

const DisplayBox = (props) => {
  const { array } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: "80px",
      }}
    >
      {array.map((elements, index) => (
        <div
          key={index}
          style={{
            backgroundColor: elements.color,
            height: "150px",
            width: "150px",
            marginTop: "20px",
          }}
        ></div>
      ))}
    </div>
  );
};

export default DisplayBox;
