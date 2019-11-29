const express = require("express");
const router = express.Router();

const bookController = require("../Controllers/book");

router.get("/get/:id_user", bookController.getBorrow);
router.post("/", bookController.postBorrow);

module.exports = router;
