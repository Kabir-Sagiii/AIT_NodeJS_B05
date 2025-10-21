const express = require("express");
const route = express.Router();
const {
  getAllProducts,
  getSpecificProductDetails,
} = require("../controllers/productController");
const verifyJWTToken = require("../middleware/tokenVerificationMiddlware");

route.get("/get-all-products", verifyJWTToken, getAllProducts);
//http://localhost:5000/api/products/get-all-products
route.get(
  "/get-specific-product-details/:id",
  verifyJWTToken,
  getSpecificProductDetails
);

//http://localhost:5000/api/products/get-specific-product-details/{id}

module.exports = route;
