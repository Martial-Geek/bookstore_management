//server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Book = require("./models/book");
const { connectToDB } = require("./utils/database");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// DB Config

// GET /books

// server.js

// Routes
// Get all books
app.get("/api/books", async (req, res) => {
  try {
    await connectToDB();
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to handle POST request for creating a new book
app.post("/api/books", async (req, res) => {
  try {
    const { title, author, isbn, price } = req.body;
    const newBook = new Book({ title, author, isbn, price });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
