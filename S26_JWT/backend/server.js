const app = require("./app.js");
const AuthRoute = require("./routes/authRoute.js");
const UserRoute = require("./routes/usersRoute.js");
const ProductRoute = require("./routes/productsRoute.js");
const createConnection = require("./config/connection.js");
//Routing in Node & Express
app.use("/api/auth", AuthRoute);
app.use("/api/users", UserRoute);
app.use("/api/products", ProductRoute);

app.listen(5000, () => {
  console.log("Server is Started");
  createConnection();
});
