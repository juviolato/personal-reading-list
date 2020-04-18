let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

let webtoon = require('../models/webtoon-schema');

router.route('/').get(async (req, res) => {
	webtoon.find({} , (error, data) => {
		if (error) {
			return error;
		}
		res.json(data);
	});
});

module.exports = router;