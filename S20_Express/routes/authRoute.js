const express = require("express");
const mongoose = require("mongoose");
const route = express.Router();

route.post("/sign-up", function (req, res) {
  //access the data from request body
  var new_user = req.body;

  //Connect with Database server and database
  mongoose
    .connect("mongodb://localhost:27017/backendDB")
    .then(function () {
      console.log("Connected with backendDB Database");
    })
    .catch(function (error) {
      console.log(error);
      console.log("Failed to connect with Database Server & Database");
    });

  res.send("Sign-up is working");
});
//http://localhost:5000/api/Auth/sign-up

route.post("/sign-in", function (req, res) {
  res.send("Sign-in is working");
});
//http://localhost:5000/api/Auth/sign-in

module.exports = route;
