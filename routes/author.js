const express = require("express");
const authorController = require("../controllers/authorController");

const router = express.Router();

// ADD author
router.post("/", authorController.addAuthor);

// GET all author
router.get("/", authorController.getAllAuthors);

// GET one author
router.get("/:id", authorController.getAuthorById);

module.exports = router;
