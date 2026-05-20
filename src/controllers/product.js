const Product = require("../models/product");

const createProduct = async (req, res) => {
  console.log(req.user, "from create product function");

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

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res
        .status(404)
        .json({ status: false, message: "Product not Found" });
    }

    // const productDTO = {
    //   title: product.title,
    //   price: product.price,
    // };

    return res.status(200).json({
      status: true,
      message: "Product fetch Successfully",
      // product: productDTO,
      product,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ status: false, message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res
        .status(404)
        .json({ status: false, message: "Product not Found" });
    }

    return res.status(200).json({
      status: true,
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ status: false, message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });

    if (!product) {
      return res
        .status(404)
        .json({ status: false, message: "Product not Found" });
    }

    return res.status(200).json({
      status: true,
      message: "Product Updated Successfully",
      // product: productDTO,
      product,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ status: false, message: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
