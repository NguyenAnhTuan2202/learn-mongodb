const bookController = require("../controllers/bookController");

const express = require("express");

const router = express.Router();

// ADD one book
router.post("/", bookController.addOneBook);

// GET all books
router.get("/", bookController.getAllBooks);

// GET one book
router.get("/:id", bookController.getOneBook);

// UPDATE a book
router.put("/:id", bookController.updateOneBook);

// DELETE book
router.delete("/:id", bookController.deleteBook);

module.exports = router;
