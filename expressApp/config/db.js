const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env.DB_CONNECTION);

mongoose
  .connect(process.env.DB_CONNECTION)
  .then((res) => console.log("database connected--"))
  .catch((error) => console.log(error.message));
