// import React from "react";
import { useState } from "react";
// import CreateBox from "./CreateBox";

const BoxColors = (props) => {
  const boxStyling = {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "center",
    // justifyContent: "space - evenly",
    // backgroundColor: "red",
    height: "20vh",
    width: "200px",
    marginTop: "50px",
    borderColor: "purple",
    borderStyle: "solid",
  };

  const boxStyling2 = {
    width: "20%",
    height: "80%",
    borderColor: "purple",
    borderStyle: "solid",
    backgroundColor: "red",
  };

  //Creating this array to be used to deconstructed the array coming from useState
  const [box, setBox] = useState({
    emptyBox: null,
    array: [{ id: 1 }],
  });

  const addBox = (index) => {
    setBox({ ...box, emptyBox: box.array[index] });
  };

  const handleTextInput = (e) => {
    setBox(e.target.value);
  };

  const handleClick = (e) => {
    setBox([...box, {}]);
  };

  return (
    <form>
      <div className="button1">
        <label>Color</label>
        <input type="text" onChange={handleTextInput} />
        <button onClick={handleClick}>Add</button>

        {box.array.map((elements, index) => (
          <div key={index} style={boxStyling}></div>
        ))}
      </div>
    </form>
  );
};

export default BoxColors;
