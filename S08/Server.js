const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/create-user" && req.method === "POST") {
    req.on("data", (request_data) => {
      const user_data = JSON.parse(request_data);
      console.log(user_data);
      res.end("Received Data");
    });
  } else {
    res.end("Invalid Request");
  }
});

server.listen(5000, () => {
  console.log("Server Started");
});
