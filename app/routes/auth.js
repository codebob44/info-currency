var authController = require('../controllers/auth/authcontroller.js');
 var controllers = require('../controllers');
module.exports = function(app, passport) {
 

   // app.get('/login', authController.signin);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    	}
	));

	app.post('/signupBuisness', passport.authenticate('local-signup', {
			successRedirect: '/buisnessDashboard',
			failureRedirect: '/signupBuisness'
		}
	));


    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/login'
    }
    ));

	app.post('/signinBuisness', passport.authenticate('local-signin', {
			successRedirect: '/buisnessDashboard',
			failureRedirect: '/login'
		}
	));

};