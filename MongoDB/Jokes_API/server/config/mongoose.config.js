const mongoose = require("mongoose");

//This mongoose function makes a connection to our database
mongoose
  .connect("mongodb://127.0.0.1/jokes_DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Sucessfully connected to db");
  })
  .catch((err) => {
    console.log("Something went wrong when connecting to db", err);
  });
