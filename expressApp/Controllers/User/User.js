const UserModel = require("../../Models/User");

const getUserById = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id, req.user);
    // const user = await UserModel.findById(id);
    const user = await UserModel.findOne({ _id: id });
    if (user) {
      return res.status(200).json(user);
    }

    return res.status(401).json({ message: "no user found" });
  } catch (error) {
    return res
      .status(401)
      .json({ message: "no user found", error: error.message });
  }
};

module.exports = { getUserById };
