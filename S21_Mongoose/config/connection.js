const mongoose = require("mongoose");
function createConnection() {
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
}

module.exports = createConnection;
