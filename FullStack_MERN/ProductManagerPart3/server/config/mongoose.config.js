const mongoose = require("mongoose");
const dbName = "projectDb";

mongoose
  .connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connect to ${dbName}`);
  })
  .catch((err) => {
    console.log(err);
  });
