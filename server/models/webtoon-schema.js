const mongoose = require('mongoose');

const webtoonSchema = new mongoose.Schema({
	title: String,
	author: String,
	synopsis: String,
	tags: Array(String),
	goodreads: String,
	rating: String
}, {
	collection: 'webtoon'
});

module.exports = mongoose.model('Webtoon', webtoonSchema);