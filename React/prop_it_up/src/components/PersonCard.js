import React from "react";

const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;

  return (
    <div>
      <h2>
        {lastName} {firstName}
      </h2>
      <h5>{age}</h5>
      <h5>{hairColor}</h5>
    </div>
  );
};

export default PersonCard;
