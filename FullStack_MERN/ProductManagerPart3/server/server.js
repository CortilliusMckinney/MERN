const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors')

require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

require("./routes/project.routes")(app); //we're importing the routes export

app.listen(port, () => console.log(`Listen on port: ${port}`)); //Runs the application
