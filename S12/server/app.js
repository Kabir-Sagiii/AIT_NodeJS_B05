const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

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
  } else if (req.method === "GET" && req.url === "/get-users") {
    fs.readFile("users.json", "utf-8", (error, data) => {
      if (error) {
        res.end("{ok:false,error:'Failed to Access Users Data'}");
      } else {
        res.end(data);
      }
    });
  } else if (req.method === "POST" && req.url === "/sign-in") {
    req.on("data", (userLoginData) => {
      var userLoginData = JSON.parse(userLoginData);

      //access the data from users.json file
      fs.readFile("users.json", "utf-8", (error, data) => {
        if (error) {
          res.end(
            JSON.stringify({
              ok: false,
              error: error,
              message: "Failed to Validate the data",
            })
          );
        } else {
          const users_data = JSON.parse(data);

          var validatedUser = users_data.results.find((user) => {
            return (
              user.name === userLoginData.name &&
              user.password === userLoginData.password
            );
          });
          if (validatedUser) {
            res.end(
              JSON.stringify({
                ok: true,
                results: validatedUser,
                message: "User LoggedIn",
              })
            );
          } else {
            console.log("Error");
            res.end(
              JSON.stringify({ ok: false, message: "User Does Not Exist" })
            );
          }
        }
      });

      //match client request data with users.json file data, if it matching
      //then user is loggedin else user not valid
    });
  } else {
    res.end("Invalid Request");
  }
});

server.listen(3000, () => {
  console.log("Server Started on 3000 Port Number");
});

//http://localhost:3000
