let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

let category = require('../models/category-schema');

router.route('/').get(async (req, res) => {
	category.find({}, (error, data) => {
		if (error) {
			return error;
		} else {
			res.json(data);
		}
	});
});

router.route('/byname/:name').get(async (req, res) => {
	category.find({ name: req.params.name }, (error, data) => {
		if (error) {
			return error;
		} else {
			res.json(data);
		}
	});
});

module.exports = router;