const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  if (req.method === "POST" && req.url === "/create-new-user") {
    req.on("data", (request_data) => {
      //Write the logic to perfrom action that you want to do with request data
      const newuser = JSON.parse(request_data);
      fs.readFile("users.json", "utf-8", (error, data) => {
        if (error) {
          res.end("Something went wrong");
          console.log(error.message);
        } else {
          const objectData = JSON.parse(data);
          //   console.log(typeof objectData);
          objectData.results.push(newuser);
          const userObject = JSON.stringify(objectData);

          fs.writeFile("users.json", userObject, (error) => {
            if (error) {
              res.end("Failed to Create User");
              console.log(error.message);
            } else {
              res.end("User Created Successfully");
            }
          });
        }
      });
    });
  } else {
    res.end("Invalid Request,Only Post Request is Allowed");
  }
});

server.listen(6000, () => {
  console.log("Server Started on 6000 Port Number");
});

//http://localhost:6000
