const express = require("express");
const { createProduct, getAllProduct } = require("../controllers/product");

const route = express.Router();

route.post("/", createProduct);
route.get("/", getAllProduct);
module.exports = route;
