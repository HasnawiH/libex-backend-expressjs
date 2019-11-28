const express = require("express");
const router = express.Router();

const bookController = require("../Controllers/book");
// const bookController = require("../Controllers/borrow");

router.post("/borrow", bookController.postBorrow);

module.exports = router;
