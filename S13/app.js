//import express package
const express = require("express");

//Initialising Express Package
const app = express();

//use inbuilt functions to handle client request like get, post,put & delete
app.get("/first-express-get-request", function (req, res) {
  res.send("First Response from express App");
});
//end-point : http://localhost:3000/first-express-get-request

app.get("/html-data", (req, res) => {
  res.send("<h1>Welcome to express JS </h1>");
}); //endpoint
//  http://localhost:3000/html-data

app.get("/json-data", function (req, res) {
  res.send({
    ok: true,
    results: [
      { name: "raj", age: 37 },
      { name: "Sachine", age: 45 },
      { name: "Ramesh", age: 27 },
    ],
  });
});
//http://localhost:3000/json-data

//Create Server and Start the Server
app.listen(3000, () => {
  console.log("Server Started");
});
