var express = require('express');
var router = express.Router();
var controllerBiz = require('../controllers/business');
var controllerUser = require('../controllers/user/user');
var controllers = require('../controllers');

/* GET home page. */

module.exports = function(app){
	app.get('/', controllers.home);
	app.get('/login', controllers.home);
	app.get('/signup', controllers.signup);
	app.get('/dashboard', controllers.isLoggedIn, controllers.dashboard);
	app.get('/search', controllers.isLoggedIn, controllers.search);
	app.get('/logout', controllers.logout);


	app.get('/biz/home/:id', function(req, res, next) {
		controllerBiz.getOneById(req.params.id)
			.then((results) => {
				res.render('homeBiz', results);
			})
	});

	app.get('/user/:id', function(req, res, next) {
		controllerUser.getOneById(req.params.id)
			.then((results) => {
				res.render('homeBiz', results);
			})
	});

	app.get('/biz/search', function(req, res, next) {
		res.render('searchBiz', { title: 'Express' });
	});

	app.post('/biz/results', function(req, res, next) {
		controllerUser.detailQuery(req.body)
			.then((results) =>{
				res.render('resultsBiz', results);
			})
	});

	app.get('/admin', function(req, res, next) {
		res.render('admin', { title: 'Express' });
	});
};

/*

router.get('/', function(req, res, next) {
  res.render('landing', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
	res.render('landing', { title: 'Express' });
});
/!*
router.get('/registration/user', function(req, res, next) {
	res.render('regUser', { user: 'Express' });
});*!/
/!*

router.get('/registration/biz', function(req, res, next) {
	res.render('regBiz', { biz: 'Express' });
});
*!/
/!*

router.get('/sign-in', function(req, res, next) {
	res.render('signInUser', { user: 'Express' });
});
*!/
/!*

router.get('/sign-in/biz', function(req, res, next) {
	res.render('signInBiz', { biz: 'Express' });
});
*!/

router.get('/biz/home/:id', function(req, res, next) {
	controllerBiz.getOneById(req.params.id)
		.then((results) => {
			res.render('homeBiz', results);
		})
});

router.get('/user/:id', function(req, res, next) {
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

*/
