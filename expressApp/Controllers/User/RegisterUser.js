const UserModel = require("../../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY || "ncxccbxcmnnmcbncxbczmxbnmc";
const registerUser = async (req, res) => {
  try {
    const { name, email, age, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      name: name,
      email: email,
      password: hashPassword,
      age: age,
    });

    const result = await newUser.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(409).send(error);
  }
};

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email });
    if (user) {
      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return res
          .status(401)
          .json({ message: "incorrect user credentials!!" + isValidPassword });
      }

      const token = jwt.sign(
        { email: email, id: user.id },
        process.env.SECRET_KEY,
        { expiresIn: "50m" }
      );

      return res.status(200).json({ token: token, email, id: user.id });
    }
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = { registerUser, LoginUser };
