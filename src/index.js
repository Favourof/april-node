const express = require("express");
const connectDB = require("./config/db");
const envObj = require("./config/env");
const productRoute = require("./routes/product");

const server = express();
server.use(express.json());

server.use("/api/v1/product", productRoute);

server.get("/", (req, res) => {
  res.send("hello welcome to our server");
});

const port = envObj.port;

connectDB();

server.listen(port, () => {
  console.log("April node server is ruining on port 4000");
});
