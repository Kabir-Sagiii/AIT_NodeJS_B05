var express = require("express");
var AuthModel = require("../models/authModel");
const jwt = require("jsonwebtoken");
const secret_key =
  "vldfkvkdlfnvdkflnvkknblkfnblkdn2123124vjdfn@vdfjkvdfjkvdfj1234";
var route = express.Router();

route.get("/get-all-users", (req, res) => {
  //first check token is present in request or not
  var token = req.headers["authorization"];
  // "Bearer <token>"
  if (token) {
    //Extract the token from string
    // token = token.slice(7);
    token = token.split(" ")[1]; //["Bearer","<token>"]
    jwt.verify(token, secret_key, (error, data) => {
      if (error) {
        res.send({ ok: false, error: "Invalid Token" });
      } else {
        AuthModel.find()
          .then((usersData) => {
            res.send({ ok: true, results: usersData });
          })
          .catch((error) => {
            res.send({ ok: false, error: error });
          });
      }
    });
  } else {
    res.send({ ok: false, error: "Token is missing" });
  }
});
//http://localhost:5000/api/users/get-all-users

route.put("/update-user/:id", (req, res) => {
  var userId = req.params.id;
  var data = req.body;

  AuthModel.updateOne({ _id: userId }, { $set: data })
    .then(function (response) {
      res.send({ ok: true, results: "User Updated" });
    })
    .catch(function (error) {
      console.log(error);
      res.send("Something went wrong");
    });
});
//http://localhost:5000/api/users/update-user/{id}

route.delete("/delete-user/:id", (req, res) => {
  var userId = req.params.id;
  AuthModel.deleteOne({ _id: userId })
    .then(function (response) {
      res.send({ ok: true, results: "User Removed Successfully" });
    })
    .catch(function (error) {
      res.send({ ok: false, error: error.message });
    });
});
//http://localhost:5000/api/users/delete-user/{id}
module.exports = route;
