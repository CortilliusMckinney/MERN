import React, { useState } from "react";

const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;
  const [currentAge, setCurrentAge] = useState(props.initialAge);

  return (
    <div>
      <h1>
        {lastName}, {firstName}
      </h1>
      <h4>
        {age}
        {currentAge}
      </h4>
      <h4>{hairColor}</h4>
      <button onClick={(event) => setCurrentAge(currentAge + 1)}>
        Birthday Button for {props.firstName} {props.lastName}
      </button>
    </div>
  );
};
export default PersonCard;
