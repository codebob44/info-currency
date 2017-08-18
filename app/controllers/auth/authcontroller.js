var pageIndex = require('../../views/pageIndex');

module.exports = {
	isLoggedIn,
	logout,
};


function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/login');
}

function logout(req, res) {
	req.session.destroy(function (err) {
		res.redirect('/');
	});

}