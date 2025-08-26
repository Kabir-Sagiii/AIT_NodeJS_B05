const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/home" && req.method === "GET") {
    res.end("Home Page");
  } else if (req.url === "/profile" && req.method === "POST") {
    res.end("Profile Page");
  } else if (req.url === "/login") {
    res.end("Login Page");
  } else {
    res.end("Page Not Found");
  }
});

//http://localhost:5000/home

//http://localhost:5000/profile

//http://localhost:5000/login

//Page not found info to client

server.listen(5000, () => {
  console.log("Server Started");
});
