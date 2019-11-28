const express = require("express");
const book = require("./book");
const user = require("./user");
const borrow = require("./borrow");

const router = express.Router();

router.use("/book", book);
router.use("/user", user);
router.use("/", borrow);

module.exports = router;
