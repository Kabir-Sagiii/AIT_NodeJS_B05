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

module.exports = { getAllProducts };
