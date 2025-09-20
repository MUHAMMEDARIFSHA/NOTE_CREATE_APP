const jwtFunctions = require("../middlewares/jwtAuthentication");

const createUser = async (req, res) => {
  const { userName, userEmail } = req.body;
  if (!userEmail || !userName) {
    return res
      .status(400)
      .json({ message: "userName and userEmail are mandatory" });
  }
  const jwtToken = jwtFunctions.generateToken(userName, userEmail);
  return res.status(201).json({ token: jwtToken });
};

const getUserDetails = async (req , res) =>{
    console.log('get user')
}

module.exports = { createUser };
