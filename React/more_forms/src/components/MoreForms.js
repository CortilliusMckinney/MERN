import React, { useState } from "react";

// Creatig hooks for the forms inputs
const Forms = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const personInfo = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={personInfo}>
      <div id="container1">
        <label>FirstName:</label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} />
      </div>

      {firstName.length < 2 && firstName.length > 0 && (
        <h3>First Name must be at least 2 charcters</h3>
      )}

      <br></br>
      <div id="container1">
        <label>Last Name:</label>
        <input type="text" onChange={(e) => setLastName(e.target.value)} />
      </div>

      {lastName.length < 2 && lastName.length > 0 && (
        <h3>Last Name must be at least 2 charcters</h3>
      )}

      <br></br>
      <div id="container1">
        <label>Email:</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>

      {email.length < 5 && email.length > 0 && (
        <h3>Email must be at least 5 charcters</h3>
      )}

      <br></br>
      <div id="container1">
        <label>Password:</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
      </div>

      {password.length < 8 && password.length > 0 && (
        <h3>
          Password must be at least 8 charcters<br></br>
          Passwords must match
        </h3>
      )}

      <br></br>
      <div id="container1">
        <label>Confrim Password:</label>
        <input
          type="text"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      {confirmPassword != password && confirmPassword.length != 0 && (
        <h3>Passwords does not match!!!</h3>
      )}

      <br></br>
      <div className="bottomText">
        <h5>Your From Data</h5>
      </div>

      <div className="bottomContainer">
        <h4>First Name:&nbsp;&nbsp;&nbsp;{firstName}</h4>
        <h4>Last Name:&nbsp;&nbsp;&nbsp;{lastName}</h4>
        <h4>Email:&nbsp;&nbsp;&nbsp;{email}</h4>
        <h4>Password:&nbsp;&nbsp;&nbsp;{password}</h4>
        <h4>Confirm Password:&nbsp;&nbsp;&nbsp;{confirmPassword}</h4>
      </div>
    </form>
  );
};
export default Forms;
