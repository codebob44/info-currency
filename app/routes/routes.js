var controllers = require('../controllers');
let pageIndex = require('../views/pageIndex');

module.exports = function (app) {
	// Landing page (route / )
	app.get(pageIndex.landing.route, controllers.landing);

	// user entry
	app.get(pageIndex.userSignin.route, controllers.userLogin);
	app.get(pageIndex.userSignUp.route, controllers.userSignup);
	// user home page
	app.get(pageIndex.userDashboard.route, controllers.isLoggedIn, controllers.userDashboard);


	// business entry
	app.get(pageIndex.bizSignin.route, controllers.buisnessLogin);
	app.get(pageIndex.bizSignup.route, controllers.buisnessSignup);
	//business home page
	app.get(pageIndex.bizDashboard.route, controllers.isLoggedIn, controllers.buisnessDashboard);


	// logout
	app.get('/logout', controllers.logout);



	app.get('/user/:id', controllers.getOneById);
	app.post('/create/user', controllers.create);
	app.post('/update/:id', controllers.update);


	app.post('/search', controllers.isLoggedIn, controllers.search);



	// Business

	app.get('/business/:id', controllers.b_GetOneByIds);
	app.post('/business/business', controllers.b_Create);
	app.post('/business/update/:id', controllers.b_Update);
}


