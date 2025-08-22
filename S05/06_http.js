const http = require("http");
const fs = require("fs");
const port = 5000;

const server = http.createServer((req, res) => {
  fs.readFile("Login.html", "utf-8", (error, data) => {
    if (error) {
      res.end("Something went wrong, Try after Sometime");
    } else {
      res.end(data);
    }
  });
});

// const server = http.createServer((req, res) => {

//   res.end("First Response From Node Http Server");
// });

server.listen(port, () => {
  console.log("Server Started on", port);
});
//http://localhost:5000/
