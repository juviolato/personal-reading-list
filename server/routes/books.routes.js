let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

let book = require('../models/book-schema');

router.route('/').get(async (req, res) => {
	book.find({} , (error, data) => {
		if (error) {
			return error;
		}
		res.json(data);
	});
});

module.exports = router;