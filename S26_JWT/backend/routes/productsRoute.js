const express = require("express");
const route = express.Router();
const { getAllProducts } = require("../controllers/productController");
const verifyJWTToken = require("../middleware/tokenVerificationMiddlware");

route.get("/get-all-products", verifyJWTToken, getAllProducts);

//http://localhost:5000/api/products/get-all-products

module.exports = route;
