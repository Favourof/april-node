const express = require("express");
const {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product");
const tokenVerification = require("../middlewares/verify");

const route = express.Router();

route.post("/", tokenVerification, createProduct);
route.get("/", getAllProduct);
route.post("/:id", getSingleProduct);
route.delete("/:id", deleteProduct);
route.put("/:id", updateProduct);
module.exports = route;
