const AuthModel = require("../models/authModel");

function getAllUsers(req, res) {
  AuthModel.find()
    .then((usersData) => {
      res.send({ ok: true, results: usersData });
    })
    .catch((error) => {
      res.send({ ok: false, error: error });
    });
}

function updateUser() {}

function removeUser() {}

module.exports = { getAllUsers, updateUser, removeUser };
