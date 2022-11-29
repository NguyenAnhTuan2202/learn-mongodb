const { response } = require("express");
const { Book, Author } = require("../model/model");

const bookController = {
  // ADD one book
  addOneBook: async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      if (req.body.authorId) {
        const author = Author.findById(req.body.authorId);
        await author.updateOne({ $push: { books: savedBook._id } });
      }
      res.status(200).json(savedBook);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // GET all books
  getAllBooks: async (req, res) => {
    try {
      const allBooks = await Book.find();
      res.status(200).json(allBooks);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = bookController;
