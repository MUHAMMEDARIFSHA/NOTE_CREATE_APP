const express = require("express");
const router = express.Router();
const userControllers = require('../controllers/userControllers')
const jwtAuthentication = require('../middlewares/jwtAuthentication')

router.post("/create", userControllers.createUser);
router.get('/details',jwtAuthentication.verifyJwt  )

module.exports = router;
