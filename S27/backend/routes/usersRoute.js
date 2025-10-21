var express = require("express");
var AuthModel = require("../models/authModel");
var { getAllUsers } = require("../controllers/userController");
var verifyJWTToken = require("../middleware/tokenVerificationMiddlware");
var route = express.Router();

route.get("/get-all-users", verifyJWTToken, getAllUsers);
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
