const db = require("../db/dbCongif.js");

const getAllProducts = async () => {
  try {
    const allProducts = await db.any("SELECT * FROM products");
    return allProducts;
  } catch (error){
    return error;
  }
}

const getOneProduct = async (id) => {
  try {
    const product = await db.one("SELECT * FROM products WHERE id=$1", id);
    return product;
  } catch (error){
    return error;
  }
}

const createProduct = async (productToAdd) => {
  try {
    const newProduct = await db.one("INSERT INTO products (name, brand, image_url, price, details, size_in_oz, type, vegan, is_cruelty_free, non_toxic, ingredients) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)", [productToAdd.name, productToAdd.brand, productToAdd.image_url, productToAdd.price, productToAdd.details, productToAdd.size_in_oz, productToAdd.type, productToAdd.vegan, productToAdd.is_cruelty_free, productToAdd.non_toxic, productToAdd.ingredients]);
  } catch (error){
    return error;
  }
}

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct
}