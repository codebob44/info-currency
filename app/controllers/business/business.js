let models = require('../../models/index');
let _ = require('lodash');
let coreQueries = require('./coreQueries');


module.exports = {
	getOneById: function (req, res) {
		coreQueries.getOneById(req.params.id)
			.then((results) => {
				res.json(results)
			})
	},
	create: function (req, res) {
		coreQueries.create(req.body)
			.then((results) => {
				res.json(results)
			})
	},
	update: function (req, res) {
		coreQueries.update(req.params.id, req.body)
			.then((results) => {
				res.json(results)
			})
	},
	findAll: function (req, res) {
		coreQueries.findAll().then((results) => {
			res.json(results)
		})
	}
};

