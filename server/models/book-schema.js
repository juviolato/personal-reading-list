const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	title: String,
	author: String,
	synopsis: String,
	tags: Array(String),
	goodreads: String,
	rating: String
}, {
	collection: 'book'
});

module.exports = mongoose.model('Book', bookSchema);