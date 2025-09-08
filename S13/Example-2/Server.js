const express = require("express");

const app = express();

app.get("/get-request", function (req, res) {
  res.send({ ok: true, result: "It is get request" });
});
//http://localhost:3001/get-request

app.post("/post-request", function (req, res) {
  res.send({ ok: true, result: "It is post request" });
});
//http://localhost:3001/post-request

app.listen(3001, () => {
  console.log("Server Started on 3001 Port");
});
