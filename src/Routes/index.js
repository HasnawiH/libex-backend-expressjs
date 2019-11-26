const express = require("express");
const book = require("./book");
const user = require("./user");

const router = express.Router();

router.use("/book", book);
router.use("/user", user);

module.exports = router;
