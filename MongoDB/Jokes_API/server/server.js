const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

//These middleware functions allows us to add post dtat into our requests
app.use(express.json());
app.use(express.urlencoded({ extend: true }));

require("./config/mongoose.config"); //require the config file that connects to db
const JokesRoutes = require("./routes/jokes.routes");
JokesRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
