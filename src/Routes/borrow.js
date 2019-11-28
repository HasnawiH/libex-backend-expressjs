const express = require("express");
const router = express.Router();

const borrowController = require("../Controllers/borrow");

router.post("/", borrowController.postBorrow);

module.exports = router;
