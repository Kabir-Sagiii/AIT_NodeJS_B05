const express = require("express");
const cors = require("cors");
const app = express();

//Assigning request data to req.body property as a value
app.use(cors());
app.use(express.json());

module.exports = app;
