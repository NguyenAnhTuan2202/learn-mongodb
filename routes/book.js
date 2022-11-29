const bookController = require("../controllers/bookController");

const express = require("express");

const router = express.Router();

// ADD one book
router.post("/", bookController.addOneBook);

// GET all books
router.get("/", bookController.getAllBooks);

module.exports = router;
