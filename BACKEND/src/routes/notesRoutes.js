const express = require("express");
const routes = express.Router();
const jwtFunctions = require("../middlewares/jwtAuthentication");
const noteController = require("../controllers/noteControllers");

routes.post("/create", jwtFunctions.verifyJwt, noteController.addNote);

module.exports = routes;
