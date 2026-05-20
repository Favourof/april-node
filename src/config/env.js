const dotenv = require("dotenv");
dotenv.config();

const envObj = {
  mongodbUrl: process.env.MONGODB_URL,
  port: process.env.PORT,
  salt: process.env.SALT,
  jwt_secret: process.env.JWT_SECRET,
  jwt_expireIn: process.env.JWT_EXPIRE_IN,
};

module.exports = envObj;
