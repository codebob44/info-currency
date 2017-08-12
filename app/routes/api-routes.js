var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');
var bizController = require('../controllers/biz');

router.get('/user/:id', function (req, res) {
	userController.getOneById(req.params.id)
		.then((results) => {
			res.json(results)
		})
});

router.get('/biz/:id', function (req, res) {
	bizController.getOneById(req.params.id)
		.then((results) => {
			res.json(results);
		})
});

router.post('/create/user', function (req, res) {
	userController.create(req.body)
		.then((results) => {
			res.json(results)
		})
});

router.post('/create/biz', function (req, res) {
	bizController.create(req.body)
		.then((results) => {
			res.json(results);
		})
});

router.put('/update/user/:id', function (req, res) {
	userController.update(req.params.id, req.body)
		.then((results) => {
			res.json(results)
		})
});

router.put('/update/biz/:id', function (req, res) {
	bizController.update(req.params.id, req.body)
		.then((results) => {
			res.json(results)
		})
});

router.post('/query/user', function (req, res) {
	userController.detailQuery(req.body)
		.then((results) => {
			res.json({resultArray: results})
		})
});


module.exports = router;