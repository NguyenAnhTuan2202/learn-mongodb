const { response } = require("express");
const { Book, Author } = require("../model/model");

const bookController = {
  // ADD one book
  addOneBook: async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      if (req.body.author) {
        const author = Author.findById(req.body.author);
        // using push for Array
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

  // GET one book
  getOneBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id).populate("author");
      console.log(book);
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // UPDATE one book
  updateOneBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      await book.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // DELETE book
  deleteBook: async (req, res) => {
    try {
      await Author.updateMany(
        { books: req.params.id },
        // using pull for Array
        { $pull: { books: req.params.id } }
      );
      await Book.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = bookController;
