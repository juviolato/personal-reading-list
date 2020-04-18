let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

let fanfiction = require('../models/fanfiction-schema');

router.route('/listbycategory/:category').get(async (req, res) => {
	fanfiction.find({ category: req.params.category, rating: { "$nin": [ "explicit", "mature" ]} }, (error, data) => {
		if (error) {
			return error;
		}
		res.json(data);
	});
});

router.route('/listbycategory/:category/unsafe').get(async (req, res) => {
	fanfiction.find({ category: req.params.category }, (error, data) => {
		if (error) {
			return error;
		}
		res.json(data);
	});
});

module.exports = router;