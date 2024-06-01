const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, unique: true },
  password: { type: String, require: true },
  age: Number,
});

module.exports = new mongoose.model("user", userSchema);
