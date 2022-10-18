import React from "react";

const ToggleTask = (props) => {
  const { index, newTask, handleDelete, handleCheckBox } = props;

  const newTaskClasses = []; //Creates array to hold differnet styles
  if (newTask.complete) {
    newTaskClasses.push("strike"); //pushes the line-through style to the newTaskClasses array when "true"
  }

  return (
    <div className="displayTodo" key={index}>
      <button
        className="buttons"
        onClick={() => {
          handleDelete(index);
        }}
      >
        DELETE
      </button>
      <input
        onChange={(e) => {
          handleCheckBox(index);
        }}
        checked={newTask.complete}
        type="checkbox"
        value={newTask}
        style={{ marginLeft: "340px" }}
      ></input>
      <h4 className={newTaskClasses.join(" ")}>{newTask.text}</h4> {/* {newTask.text}  Converts the array of strings into Object via ".text"*/}
    </div>
  );
};

export default ToggleTask;
