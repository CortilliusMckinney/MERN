

const express = require('express');
const app = express();
const port = 8000;
require('./config/mongoose.config')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('./routes/project.routes')(app);//we're importing the routes export

app.listen(port, () => console.log(`Listen on port: ${port}`));//Runs the application