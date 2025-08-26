const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.end("It is get request");
  } else if (req.method === "POST") {
    res.end("It is post request");
  } else if (req.method === "PUT") {
    res.end("It is put request");
  } else if (req.method === "DELETE") {
    res.end("It is delete request");
  }
});

server.listen(5000, () => {
  console.log("Server Started");
});
