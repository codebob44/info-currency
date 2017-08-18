var authController = require('../controllers/auth/authcontroller.js');
 var controllers = require('../controllers');
 let pageIndex = require('../views/pageIndex');
module.exports = function(app, passport) {


	// Dev bypass login
/*	app.post('/signup', bypass);

	app.post('/signin', bypass);


	app.post('/signupBuisness', bypass);

	app.post('/signinBuisness', bypass);

	function bypass(req, res){
		console.log(req);
		res.redirect(pageIndex.bizDashboard.route);
	}*/

	// comment below and uncomment above to bypass login
    app.post(pageIndex.userSignUp.route, passport.authenticate('local-signup', {
        successRedirect: pageIndex.userDashboard.route,
        failureRedirect: pageIndex.userSignUp.route
    	}
	));

	app.post(pageIndex.userSignin.route, passport.authenticate('local-signin', {
			successRedirect: pageIndex.userDashboard.route,
			failureRedirect: pageIndex.userSignin.route
		}
	));


	app.post(pageIndex.bizSignupPost.route, passport.authenticate('local-signup', {
			successRedirect: pageIndex.bizDashboard.route,
			failureRedirect: pageIndex.bizSignup.route
		}
	));


	app.post(pageIndex.bizSigninPost.route, passport.authenticate('local-signin', {
			successRedirect: pageIndex.bizDashboard.route,
			failureRedirect: pageIndex.bizSignin.route
		}
	));

};