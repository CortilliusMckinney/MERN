import React, { useState } from "react";
import DisplayBox from "./DisplayBox";
import "./style.css";

const CreateBox = (props) => {
  //Create setter and getter for array index to create the boxes to display on "ADD" clicked
  const [boxObject, setBoxObject] = useState({});

  //Creates setter and getters to take the string of colors from the text box
  const [arrayList, setArrayList] = useState([]);

  const format = {
    color: "",
  };

  //Sets the box color through the synthentic "onSubmit" event. "target" represents the text input box
  const handleTextInput = (e) => {
    setBoxObject({ color: e.target.value }); //
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setArrayList([...arrayList, boxObject]); //Stores the background color typed into the text box
    setBoxObject({ color: "" }); //Clears the text array background color to typed color taking from the text box
  };

  return (
    <div className="main">
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="color"
          value={boxObject.color}
          onChange={handleTextInput}
          type="text"
          style={{ backgroundColor: "#eff5f7" }}
        />
        <button style={{ backgroundColor: "#2abb9b" }}>ADD</button>
      </form>
      <DisplayBox arrayList={arrayList} />
    </div>
  );
};
export default CreateBox;
