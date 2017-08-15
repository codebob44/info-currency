let auth = require('./authcontroller');
let user = require('./user');
let business = require('./business');



module.exports = {
	signup: auth.signup,
	dashboard: user.dashboard,
	logout: user.logout,
	getUserInfo: user.getOneByEmail,
	query: user.query,
	search: user.searchPage,
	user,
	business,
	auth,
	home: function(req, res, next) {
		res.render('login', { title: 'Express' });
	},
	isLoggedIn:  function isLoggedIn(req, res, next) {

		if (req.isAuthenticated())

			return next();

		res.redirect('/login');

	}
};



