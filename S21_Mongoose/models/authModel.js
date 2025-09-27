const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  username: String,
  email: String,
  gender: String,
  city: String,
  password: String,
});

const AuthModel = mongoose.model("user", AuthSchema);

module.exports = AuthModel;
