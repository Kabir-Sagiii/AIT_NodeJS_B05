const ProductModel = require("../models/productModel");

function getAllProducts(req, res) {
  //check the token,validate it and then process the request

  ProductModel.find()
    .then(function (data) {
      res.send({ ok: true, results: data });
    })
    .catch(function (error) {
      console.log(error);
      res.send({ ok: false, error: error });
    });
}

function getSpecificProductDetails(req, res) {
  const productId = req.params.id;

  ProductModel.findOne({ _id: productId })
    .then((data) => {
      console.log(data);
      res.send({ ok: true, result: data });
    })
    .catch((error) => {
      console.log(error);
      res.send({ ok: false, error: error.message });
    });
}

module.exports = { getAllProducts, getSpecificProductDetails };
