const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  image: String,
  rating: Number,
  price: Number,
  name: String,
  category: String,
  description: String,
});

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;
