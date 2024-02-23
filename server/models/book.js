//Create model for book
const { Schema, model } = require("mongoose");

const BookSchema = new Schema({
  title: String,
  author: String,
  isbn: String,
  price: Number,
});

const Book = model("Book", BookSchema);

module.exports = Book;
