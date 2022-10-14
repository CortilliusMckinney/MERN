import React from "react";

const DisplayBox = (props) => {
  const { arrayList } = props;
  
  const mainDivStyling = {
    textAlign: "center",
    marginTop: "50px",
    borderColor: "red",
    borderStyle: "solid",
  };

  return (
    <div>
      <div className="mainDiv">
        {/*Create key value of elements and index for the list array */}
        {arrayList.map((elements, index) => (
          <div
            className="boxes"
            key={index}
            style={{
              backgroundColor: elements.color,
              height: "200px",
              width: "200px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DisplayBox;
