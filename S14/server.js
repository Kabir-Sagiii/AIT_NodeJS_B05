const express = require("express");
const UserRoute = require("./routes/usersRoute");
const app = express();

app.use("/users", UserRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// //import express module
// const express = require("express");

// //Initialize express
// const app = express();

// //create and starts the server
// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// //API endpoint
// app.get("/data", (req, res) => {
//   res.send({ message: "Express First Request Response" });
// });
// //http://localhost:3000/data

// app.get("/products", (req, res) => {
//   res.send({ message: "Products List" });
// });
// //http://localhost:3000/products

// app.get("/products/data", (req, res) => {
//   res.send({ message: "Products Data List" });
// });
// //http://localhost:3000/products/data

// //json format
