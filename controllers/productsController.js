const express = require("express");
const products = express.Router();
const {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
} = require("../queries/products");

products.get("/", async (req, res) => {
  const allProducts = await getAllProducts();

  if (allProducts[0]) {
    res.status(200).json(allProducts);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

products.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await getOneProduct(id);

  if (product.id) {
    res.status(200).json(product);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

products.post("/", async (req, res) => {
  const newProduct = req.body;

  try {
    const addedProduct = await createProduct(newProduct);
    res.status(202).json(addedProduct);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

products.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const updatedProduct = await updateProduct(id, body);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = products;
