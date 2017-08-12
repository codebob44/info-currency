var express = require('express');
var router = express.Router();
var controllerBiz = require('../controllers/biz');
var controllerUser = require('../controllers/user');

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('landing', { title: 'Express' });
});

router.get('/landing', function(req, res, next) {
	res.render('landing', { title: 'Express' });
});

router.get('/registration/user', function(req, res, next) {
	res.render('regUser', { user: 'Express' });
});

router.get('/registration/biz', function(req, res, next) {
	res.render('regBiz', { biz: 'Express' });
});

router.get('/sign-in/user', function(req, res, next) {
	res.render('signInUser', { user: 'Express' });
});

router.get('/sign-in/biz', function(req, res, next) {
	res.render('signInBiz', { biz: 'Express' });
});

router.get('/biz/home/:id', function(req, res, next) {
	controllerBiz.getOneById(req.params.id)
		.then((results) => {
			res.render('homeBiz', results);
		})
});

router.get('/user/home/:id', function(req, res, next) {
	controllerUser.getOneById(req.params.id)
		.then((results) => {
			res.render('homeBiz', results);
		})
});

router.get('/biz/search', function(req, res, next) {
	res.render('searchBiz', { title: 'Express' });
});

router.post('/biz/results', function(req, res, next) {
	controllerUser.detailQuery(req.body)
		.then((results) =>{
			res.render('resultsBiz', results);
		})
});

router.get('/admin', function(req, res, next) {
	res.render('admin', { title: 'Express' });
});

module.exports = router;
