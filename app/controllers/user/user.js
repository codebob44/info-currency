let models = require('../../models/index');
let _ = require('lodash');

let coreQueries = require('./coreQueries');
let detailedQuery = require('./detailedQuery');

let event = require('events').EventEmitter;
let emitter = new event();


module.exports = {
	getOneById: function (req, res) {
		coreQueries.getOneById(req.params.id)
			.then((results) => {
				res.json(results)
			})
	},
	getOneByEmail: function (email) {
		return new Promise((resolve, reject) => {
			coreQueries.getOneByEmail(email)
				.then((results) => {
					resolve();
				})
				.catch((err) => {
					console.log(err);
					reject(err);
				})
		})

	},
	findAll: function (req, res) {
		coreQueries.findAll(req.body)
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
		console.log('UPDATE');
		coreQueries.update(req.params.id, req.body)
			.then((results) => {
				res.json(results)
			})
	},
	query: function (req, res) {
		detailedQuery(req.body)
			.then((results) => {
			console.log("DETAILED QUERY RESULTS");
				res.json({resultArray: results})
			})
	},
	dashboard: function (req, res) {
		console.log(req);
		res.render('user', {userData: req.user});
	},
	search: function(req, res){
		res.render('search');
	},
	logout: function(req,res){

		req.session.destroy(function(err) {
			res.redirect('/');
		});

	}
};


