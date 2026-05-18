const dotenv = require("dotenv");
dotenv.config();

const envObj = {
  mongodbUrl: process.env.MONGODB_URL,
  port: process.env.PORT,
  salt: process.env.SALT,
};

module.exports = envObj;
