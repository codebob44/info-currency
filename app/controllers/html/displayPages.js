

var pageIndex = require('../../views/pageIndex');

module.exports = {
	signup,
	signin,
	home,
	login,
	dashboard,
	buisnessSignup,
	buisnessDashboard
};

function signup(req, res) {
	res.render(pageIndex.signup.page);
}

function signin(req, res) {
	res.render(pageIndex.signin.page);
}

function home(req, res, next) {
	res.render(pageIndex.landing.page, {title: 'Express'});
}

function login(req, res){
	res.render(pageIndex.login.page);
}

function dashboard(req, res) {
	console.log(req);
	res.render(pageIndex.userDashboard.page, {userData: req.user});
}


function buisnessSignin(req, res){
	res.render(pageIndex.bizSignin.page)
}
function buisnessSignup(req, res){
	res.render(pageIndex.bizSignup.page)
}

function buisnessDashboard(req, res) {
	console.log(req.user);
	res.render(pageIndex.bizDashboard.page, {bizData: req.user});
}