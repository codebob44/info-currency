var controllers = require('../controllers');

module.exports = function (app) {

	app.get('/', controllers.home);

	app.get('/user/:id', controllers.getOneById);
	app.post('/create/user', controllers.create);
	app.post('/update/:id', controllers.update);
	app.get('/dashboard', controllers.isLoggedIn, controllers.dashboard);

	app.get('/search', controllers.isLoggedIn, controllers.search);

	// Auth
	app.get('/login', controllers.home);
	app.get('/signup', controllers.signup);
	app.get('/logout', controllers.logout);

	// Business
	app.get('/business/:id', controllers.b_GetOneByIds);
	app.post('/business/business', controllers.b_Create);
	app.post('/business/update/:id', controllers.b_Update);
}


