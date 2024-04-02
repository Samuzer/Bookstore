const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publicationDate: {
    type: Date,
    required: true
  },
  genre: {
    type: String,
    enum: [
      "Science fiction",
      "Satire",
      "Drama",
      "Action",
      "Romance",
      "Mystery",
      "Horror"
    ],
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Book", bookSchema);
