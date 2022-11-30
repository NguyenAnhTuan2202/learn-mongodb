const express = require("express");
const authorController = require("../controllers/authorController");

const router = express.Router();

// ADD author
router.post("/", authorController.addAuthor);

// GET all author
router.get("/", authorController.getAllAuthors);

// GET one author
router.get("/:id", authorController.getAuthorById);

// UPDATE author
router.put("/:id", authorController.updateAuthor);

// DELETE author
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;
