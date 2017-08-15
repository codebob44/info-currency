var authController = require('../controllers/authcontroller.js');
 var controllers = require('../controllers');
module.exports = function(app, passport) {
 

   // app.get('/login', authController.signin);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    	}
	));


    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/login'
    }
    ));

};