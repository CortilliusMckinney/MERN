// import React, { useState } from "react";

// const CreateBox = () => {
//   const boxStyling = {
//     display: "flex",
//     flexFlow: "row wrap",
//     alignItems: "center",
//     justifyContent: "center",
//     // justifyContent: "space - evenly",
//     // backgroundColor: "red",
//     height: "25vh",
//   };

//   const boxStyling2 = {
//     width: "20%",
//     height: "80%",
//     borderColor: "purple",
//     borderStyle: "solid",
//     backgroundColor: "red",
//   };

//   //Creating this array to be used to deconstructed the array coming from useState
//   const [box, setBox] = useState({
//     emptyObject: null,
//     boxObject: [{ id: 1 }],
//   });

//   const addBox = (index) => {
//     setBox({ ...box, emptyObject: box.boxObject[index++] });
//   };

return (
//   <div style={boxStyling}>
//     {/* //This creates a "map" to iterates though the boxObject array */}
//     // This div is the placeHolder for the boxes that are created
//     {
//       (box.boxObject.map = (elements, index) => (
//         <div
//           style={boxStyling2}
//           key={index}
//           onClick={() => {
//             addBox(index);
//           }}
//         ></div>
//       ))
//     }
//   </div>
// );

// export default CreateBox;
