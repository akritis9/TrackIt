/* code to create a Node.js Express server*/ 

const express = require('express');
const cors = require('cors');
/*const mongoose = require('mongoose');*/

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/* const uri = process.env.ATLAS_URI;

mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
}) */

/*load the routers from other files */
/*const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users');*/

/* add routers as middleware */
/*app.use('/exercises', exercisesRouter);
app.use('/users', userRouter);*/

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});