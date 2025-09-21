const jwtFunctions = require("../middlewares/jwtAuthentication");
const User = require("../models/userSchema");

const createUser = async (req, res) => {
  const { userName, userEmail, userPassword } = req.body;
  if (!userEmail || !userName || !userPassword) {
    return res
      .status(400)
      .json({ message: "userName and userEmail are mandatory" });
  }
  const jwtToken = jwtFunctions.generateToken(userName, userEmail);
  const newUser = new User({
    username: userName,
    useremail: userEmail,
    password: userPassword
  });
  await newUser.save()
  console.log("user got created")
  return res.status(201).json({ token: jwtToken });
};

const getUserDetails = async (req, res) => {
  console.log("get user");
};

module.exports = { createUser };
