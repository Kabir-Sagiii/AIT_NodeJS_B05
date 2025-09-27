var express = require("express");
var AuthModel = require("../models/authModel");
var route = express.Router();

route.get("/get-all-users", (req, res) => {
  AuthModel.find()
    .then((usersData) => {
      res.send({ ok: true, results: usersData });
    })
    .catch((error) => {
      res.send({ ok: false, error: error });
    });
});

//http://localhost:5000/api/users/get-all-users

module.exports = route;
