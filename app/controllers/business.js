let models = require('../models');
let _ = require('lodash');
let businessModule = require('./user/user');

module.exports = {
	getOneById: function (req, res) {
		businessModule.getOneById(req.params.id)
			.then((results) => {
				res.json(results)
			})
	},
	create:  function (req, res) {
		businessModule.create(req.body)
			.then((results) => {
				res.json(results)
			})
	},
	update: function (req, res) {
		businessModule.update(req.params.id, req.body)
			.then((results) => {
				res.json(results)
			})
	}
};

