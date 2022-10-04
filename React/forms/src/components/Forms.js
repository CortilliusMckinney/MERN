import React, { useState } from "react";

// Creatig hooks for the forms inputs
const Forms = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfiirmPassword] = useState("");

  //Defining personInfo & giving it a sythetic event "e"
  const personInfo = (e) => {};

  return (
    <form onSubmit={personInfo}>
      <div id="container1">
        <label>FirstName:</label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <br></br>
      <div id="container1">
        <label>Last Name:</label>
        <input type="text" onChange={(e) => setLastName(e.target.value)} />
      </div>
      <br></br>
      <div id="container1">
        <label>Email:</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <br></br>
      <div id="container1">
        <label>Password:</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <br></br>
      <div id="container1">
        <label>Confrim Password:</label>
        <input
          type="text"
          onChange={(e) => setConfiirmPassword(e.target.value)}
        />
      </div>
      <br></br>
      <div className="bottomText">
        <h5>Your From Data</h5>
      </div>
      <div className="bottomContainer">
        <h4>First Name:&nbsp;&nbsp;&nbsp;{firstName}</h4>
        <h4>Last Name:&nbsp;&nbsp;&nbsp;{lastName}</h4>
        <h4>Email:&nbsp;&nbsp;&nbsp;{email}</h4>
        <h4>Password:&nbsp;&nbsp;&nbsp;{password}</h4>
        <h4>Confirm Password:&nbsp;&nbsp;&nbsp;{ConfirmPassword}</h4>
      </div>
    </form>
  );
};
export default Forms;
