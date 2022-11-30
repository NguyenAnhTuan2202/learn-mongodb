const { response } = require("express");
const { Book, Author } = require("../model/model");

const authorController = {
  // ADD author
  addAuthor: async (req, res) => {
    try {
      const newAuthor = new Author(req.body);
      const savedAuthor = await newAuthor.save();
      res.status(200).json(savedAuthor);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // GET all author
  getAllAuthors: async (req, res) => {
    try {
      const authors = await Author.find();
      res.status(200).json(authors);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // GET single author
  getAuthorById: async (req, res) => {
    try {
      const author = await Author.findById(req.params.id).populate("books");
      res.status(200).json(author);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // UPDATE author
  updateAuthor: async (req, res) => {
    try {
      const author = await Author.findByIdAndUpdate(req.params.id);
      await author.updateOne({ $set: req.body });
      res.status(200).json("Update author successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // DELETE author
  deleteAuthor: async (req, res) => {
    try {
      await Book.updateMany({ author: req.params.id }, { author: null });
      await Author.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete author successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = authorController;
