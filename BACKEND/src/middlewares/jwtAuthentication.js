const { json } = require("express");
const jwt = require("jsonwebtoken");

const generateToken = (userName, userEmail) => {
  console.log("inside generate token");

  // payload object
  const payload = {
    name: userName,
    email: userEmail,
  };

  // create token
  const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_TIME, // optional, token expires in 30 days
  });

  console.log("token:", jwtToken);
  return jwtToken;
};

const verifyJwt = (req, res, next) => {
  const jwtToken = req.headers["authtoken"];

  console.log(`token to verify ==>${jwtToken}`);
  if (!jwtToken) {
    return res.status(404), json({ error: "Missing token" });
  }

  jwt.verify(jwtToken, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(402).json({ error: "Unauthorized" });
    }
    if (user) {
      console.log("found user ==>", user.name);
      return res.status(200).json({user : user.name})
    //   next();
    } else {
      console.log("No user found");
      return res.status(400).json({message : "User not found"})
    }
  });
};
module.exports = { generateToken , verifyJwt};
