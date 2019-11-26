const express = require("express");
const router = express.Router();
const bookController = require("../Controllers/book");

router
  .get("/", bookController.getAll)
  .get("/search/:title", bookController.getByTitle)
  .get("/genre/:genre", bookController.getByGenre)
  .get("/status/:status", bookController.getByStatus)
  .post("/add", bookController.postBook)
  .put("/update/:id", bookController.updateBook)
  .delete("/:id", bookController.deleteBook);

module.exports = router;
