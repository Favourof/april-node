const Product = require("../models/product");

const createProduct = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    console.log(req.body);

    if (!title || !description || !price) {
      return res
        .status(400)
        .json({ status: false, message: "All field is required" });
    }

    const product = await Product.create(req.body);

    return res.status(201).json({
      status: true,
      message: "PRoduct create Successfully",
      product: product,
      length: product.length,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ status: false, message: error.message });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const product = await Product.find();

    return res.status(201).json({
      status: true,
      message: "Get product Successfully",
      product: product,
      length: product.length,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ status: false, message: error.message });
  }
};

module.exports = { createProduct, getAllProduct };
