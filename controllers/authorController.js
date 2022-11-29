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
      const author = await Author.findById(req.params.id);
      res.status(200).json(author);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = authorController;
