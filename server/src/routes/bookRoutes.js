const express = require("express");
const {
  getAllBooks,
  createBook,
  deleteBook
} = require("../controllers/bookController");

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", createBook);
router.delete("/:id", deleteBook);

module.exports = router;
