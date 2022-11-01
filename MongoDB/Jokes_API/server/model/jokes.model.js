const mongoose = require("mongoose");

//Create a new schema or blueprint
const JokesSchema = mongoose.Schema(
  {
    setup: String,
    punchLine: String,
  },
  { timestamps: true }
);

//Creates new model/collection in database
const jokes = mongoose.model("jokes", JokesSchema);
module.exports = jokes; //exports for use elsewhere
