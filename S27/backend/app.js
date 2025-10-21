const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

//Assigning request data to req.body property as a value
app.use(cors());

dotenv.config({ path: "./config/.env" });

app.use(express.json());

module.exports = app;
