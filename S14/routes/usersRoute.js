const express = require("express");

const route = express.Router();

route.get("/all-users", (req, res) => {
  res.send({ message: "Users List" });
});
//http://localhost:3000/users/all-users

route.get("/single-user", (req, res) => {
  res.send({ message: "Single User Data" });
});
//http://localhost:3000/users/single-user

module.exports = route;
