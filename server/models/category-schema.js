const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	name: String,
	id: String,
	type: String
}, {
	collection: 'category'
});

module.exports = mongoose.model('Category', categorySchema);