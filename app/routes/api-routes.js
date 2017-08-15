var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');
var bizController = require('../controllers/business');


module.exports = function (app) {

	app.get('/user/:id', userController.getOneById);
	app.get('/search', userController.searchPage);
	app.post('/create/user', userController.create);
	app.post('/query', userController.query);
	app.post('/update/:id', userController.update);


	app.get('/business/:id', function (req, res) {
		bizController.getOneById(req.params.id)
			.then((results) => {
				res.json(results);
			})
	});


	app.post('/create/business', function (req, res) {
		bizController.create(req.body)
			.then((results) => {
				res.json(results);
			})
	});


	app.put('/update/business/:id', function (req, res) {
		bizController.update(req.params.id, req.body)
			.then((results) => {
				res.json(results)
			})
	});


}


