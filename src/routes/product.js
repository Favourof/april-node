const express = require("express");
const {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product");
const tokenVerification = require("../middlewares/verify");
const { upload } = require("../utils/multer");

const route = express.Router();

route.post("/", tokenVerification, upload.single("image"), createProduct);
route.get("/", getAllProduct);
route.post("/:id", getSingleProduct);
route.delete("/:id", tokenVerification, deleteProduct);
route.put("/:id", updateProduct);
module.exports = route;
