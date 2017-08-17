var controllers = require('../controllers');
let pageIndex = require('../views/pageIndex');

module.exports = function (app) {

	app.get(pageIndex.landing.route, controllers.landing);

	app.get('/user/:id', controllers.getOneById);
	app.post('/create/user', controllers.create);
	app.post('/update/:id', controllers.update);
	app.get(pageIndex.userDashboard.route, controllers.isLoggedIn, controllers.dashboard);

	app.get('/search', controllers.isLoggedIn, controllers.search);

	// Auth
	app.get(pageIndex.login.route, controllers.login);
	app.get(pageIndex.signup.route, controllers.signup);
	app.get('/logout', controllers.logout);

	// Business
	app.get(pageIndex.bizSignup.route, controllers.buisnessSignup);
	app.get(pageIndex.bizDashboard.route, controllers.buisnessDashboard);
	app.get('/business/:id', controllers.b_GetOneByIds);
	app.post('/business/business', controllers.b_Create);
	app.post('/business/update/:id', controllers.b_Update);
}


