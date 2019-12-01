const express = require("express");
const router = express.Router();

const bookController = require("../Controllers/book");
// const bookController = require("../Controllers/borrow");

router.post("/", bookController.postWhislist);
router.post("/get/:id_user", bookController.getWhislist);

module.exports = router;
