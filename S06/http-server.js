//to create http server using nodejs

//import module called http (core module)

const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  fs.readFile("login.html", "utf-8", (error, data) => {
    if (error) {
      res.end("Failed to access the Page or Data");
    } else {
      res.end(data);
    }
  });
});

// const server = http.createServer(function (req, res) {
//   res.end("{ok:true,result:[{name:'s1'},{name:'s2'},{name:'s3'}]}");
// });

server.listen(5000, () => {
  console.log("Server Started on 5000 Port");
});
//http://localhost:5000/
