module.exports = {
	signup,
	signin,
	home,
	isLoggedIn,
	logout
};

function signup(req, res) {
	res.render('signup');
}

function signin(req, res) {
	res.render('signin');
}

function home(req, res, next) {
	res.render('login', {title: 'Express'});
}

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