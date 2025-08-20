var product = {
  model: "Iphone 15",
  price: 60000,
  rating: 4.3,
  qty: 5,
  display: function () {
    console.log("Product Details Displayed");
  },
  changePrice: () => {
    console.log("Price Changed");
  },
};

product.display();

product["changePrice"]();
