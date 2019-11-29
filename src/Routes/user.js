const express = require("express");
const router = express.Router();

const auth = require("../Middleware/auth");
const userController = require("../Controllers/user");

router
  .post("/register", userController.register)
  .post("/login", userController.login);

module.exports = router;
