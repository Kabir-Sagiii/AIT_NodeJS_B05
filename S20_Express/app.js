const express = require("express");

const app = express();

//Assigning request data to req.body property as a value
app.use(express.json());

module.exports = app;
