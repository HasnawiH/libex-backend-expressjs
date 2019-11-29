const express = require("express");
const router = express.Router();
const bookController = require("../Controllers/book");
const auth = require("../Middleware/auth");

router
  .get("/", bookController.getAll)
  .get("/search/:title", bookController.getByTitle)
  .get("/genre/:genre", bookController.getByGenre)
  .get("/status/:status", bookController.getByStatus)
  .post("/add", auth.verifyAdmin, bookController.postBook)
  .put("/update/:id", auth.verifyAdmin, bookController.updateBook)
  .delete("/:id", auth.verifyAdmin, bookController.deleteBook);

module.exports = router;
