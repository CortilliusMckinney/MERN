import "./App.css";
import { useState } from "react";
import ToggleDelete from "./componenets/ToggleDelete";

function App(props) {
  const [todoList, setTodoList] = useState(""); //Creates two const variables to store item places in index[0,1]

  const [newTask, setNewTask] = useState([]); //Keeps tack of the listTodo

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoList.length == 0) {
      alert("NO TASK HAS BEEN ADDED!!!!!");
    } else {
      //Converts todolist array of strings into A "OBJECT" <h4>{elements.text}</h4>
      const todoItem = {
        text: todoList,
        complete: false,
      };
      //SetNewTask and pass in a brand new array containing all current todos plus the new text box entry
      setNewTask([...newTask, todoItem]);
      setTodoList("");
    }
  };

  const handleDelete = (index) => {
    const filterNewList = newTask.filter((element, i) => {
      return i != index;
    });
    setNewTask(filterNewList);
  };

  const handleCheckBox = (index) => {
    const updatedTodoList = newTask.map((newTask, i) => {
      //Creates an new array to copy off the unchanged elements

      if (index == i) {
        newTask.complete = !newTask.complete; //Toggle the strike mark on and off
      }
      return newTask;
    });
    setNewTask(updatedTodoList);
  };

  return (
    <div className="App">
      <div className="header">
        Todo-List
        <form onSubmit={handleSubmit}>
          <input
            //Connects the value object to the state
            //Allows the input box text to be update back to empty string  the "add" button is triggered via "setTodoList("")
            value={todoList}
            onChange={(e) => {
              setTodoList(e.target.value);
            }}
            type="text"
          />
          {/* Updates the todoList onChange of new text type into text box */}
          <div className="buttons">
            <button>ADD</button>
          </div>
        </form>
        {/* ============================================================================================== */}
        {newTask.map((newTask, index) => {
          return (
            <ToggleDelete
              index={index}
              newTask={newTask}
              handleDelete={handleDelete}
              handleCheckBox={handleCheckBox}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
