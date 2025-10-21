const express = require("express");

const AuthModel = require("../models/authModel");
const jwt = require("jsonwebtoken");

const route = express.Router();

route.post("/sign-up", function (req, res) {
  //access the data from request body
  var new_user = req.body;

  //Creating the instance of model with userdata
  var auth = new AuthModel(new_user);

  //saving the user data in the database
  auth
    .save()
    .then((response) => {
      res.send({ ok: true, results: response });
    })
    .catch((error) => {
      res.send({ ok: false, error: error });
    });
});
//http://localhost:5000/api/auth/sign-up

route.post("/sign-in", function (req, res) {
  const userCredentails = req.body;

  AuthModel.findOne({ email: userCredentails.email })
    .then(function (data) {
      if (data) {
        if (data.password === userCredentails.password) {
          //we got confirmation user is valid user

          //create json web token
          var token;
          token = jwt.sign(userCredentails, process.env.SECRET_KEY);

          res.send({ ok: true, results: data, token: token });
        } else {
          res.send({ ok: false, error: "password is incorrect" });
        }
      } else {
        res.send({ ok: false, error: "User Does not Exist" });
      }
    })
    .catch(function (error) {
      res.send({ ok: false, error: error });
    });
});
//http://localhost:5000/api/Auth/sign-in

module.exports = route;
