const express = require("express");
require("dotenv").config();

const { registerUser, LoginUser } = require("../Controllers/User/RegisterUser");
const { getUserById } = require("../Controllers/User/User");
const { validateUser, validateGetUserById } = require("../Utils/UserValidator");
const { tokenValidator } = require("../Utils/TokenValidator");

const router = express.Router();
router.post("/register", validateUser, registerUser);
router.post("/login", LoginUser);
router.post("/userbyid", tokenValidator, validateGetUserById, getUserById);

module.exports = router;
