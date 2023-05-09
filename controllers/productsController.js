const express = require("express");
const products = express.Router();
const {getAllProducts, getOneProduct} = require("../queries/products");

products.get("/", async (req, res) => {
  const allProducts = await getAllProducts();

  if (allProducts[0]) {
    res.status(200).json(allProducts);
  } else {
    res.status(500).json({error: "Server Error"});
  }
});

products.get("/:id", async (req, res) => {
  const {id} = req.params;
  const product = await getOneProduct(id);

  if (product.id){
    res.status(200).json(product);
  } else {
    res.status(500).json({error: "Server Error"});
  }
})

module.exports = products;