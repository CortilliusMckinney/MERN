const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/projectDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to Project DB");
  })
  .catch((err) => {
    console.log(err);
  });
