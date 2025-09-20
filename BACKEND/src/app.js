const express = require("express");
const dotenv = require("dotenv");
const utilRouter = require('./routes/utilRoutes');
const userRouter = require('./routes/userRoutes');

// Load .env file
dotenv.config();

// set up express server
const app = express();

// handle json in the server
app.use(express.json());

// routes setup
app.use('/', utilRouter);
app.use('/user', userRouter);
// console.log(process.env)
// server running setup
const port = process.env.PORT
console.log('PORT:', port);
app.listen(port, () => {
    console.log(`The server is running at the port ==> ${port}`);
});
