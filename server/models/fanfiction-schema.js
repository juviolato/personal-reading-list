const mongoose = require('mongoose');

const fanFictionSchema = new mongoose.Schema({
	title: String,
	author: String,
	category: String,
	characters: Array(String),
	pairings: Array(String),
	tags: Array(String),
	wordcount: Number,
	rating: String,
	link: String
}, {
	collection: 'fanfiction'
});

module.exports = mongoose.model('FanFiction', fanFictionSchema);