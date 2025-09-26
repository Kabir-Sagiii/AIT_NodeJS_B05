const app = require("./app.js");
const authRoute = require("./routes/authRoute.js");

//Routing in Node & Express
app.use("/api/Auth", authRoute);

app.listen(5000, () => {
  console.log("Server is Started");
});
