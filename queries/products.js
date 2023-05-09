const db = require("../db/dbCongif.js");

const getAllProducts = async () => {
  try {
    const allProducts = await db.any("SELECT * FROM products");
    return allProducts;
  } catch (error) {
    return error;
  }
};

const getOneProduct = async (id) => {
  try {
    const product = await db.one("SELECT * FROM products WHERE id=$1", id);
    return product;
  } catch (error) {
    return error;
  }
};

const createProduct = async (productToAdd) => {
  try {
    const newProduct = await db.one(
      "INSERT INTO products (name, brand, image_url, price, details, size_in_oz, type, vegan, is_cruelty_free, non_toxic, ingredients) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
      [
        productToAdd.name,
        productToAdd.brand,
        productToAdd.image_url,
        productToAdd.price,
        productToAdd.details,
        productToAdd.size_in_oz,
        productToAdd.type,
        productToAdd.vegan,
        productToAdd.is_cruelty_free,
        productToAdd.non_toxic,
        productToAdd.ingredients,
      ]
    );
    return newProduct;
  } catch (error) {
    return error;
  }
};

const updateProduct = async (id, product) => {
  const {
    name,
    brand,
    image_url,
    price,
    details,
    size_in_oz,
    type,
    vegan,
    is_cruelty_free,
    non_toxic,
    ingredients,
  } = product;
  try {
    const updatedProducts = await db.one(
      "UPDATE products SET name=$1, brand=$2, image_url=$3, price=$4, details=$5, size_in_oz=$6, type=$7, vegan=$8, is_cruelty_free=$9, non_toxic=$10,ingredients=$11 where id=$12 RETURNING *",
      [
        name,
        brand,
        image_url,
        price,
        details,
        size_in_oz,
        type,
        vegan,
        is_cruelty_free,
        non_toxic,
        ingredients,
        id,
      ]
    );
    return updatedProducts;
  } catch (error) {
    return error;
  }
};

const deleteProduct = async (id) => {
  try {
    const deletedProduct = await db.one(
      "DELETE FROM products WHERE id=$1 RETURNING *",
      id
    );
    return deletedProduct;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
