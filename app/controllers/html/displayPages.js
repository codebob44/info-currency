

var pageIndex = require('../../views/pageIndex');

module.exports = {
	signup,
	signin,
	home,
	login,
	dashboard,
	buisnessSignup,
	buisnessDashboard,
	buisnessSignin
};

function signup(req, res) {
	res.render(pageIndex.userSignUp.page, {routing: pageIndex});
}

function signin(req, res) {
	res.render(pageIndex.userSignin.page, {routing: pageIndex});
}

function home(req, res, next) {
	res.render(pageIndex.landing.page, {title: 'Express', routing: pageIndex});
}

function login(req, res){
	res.render(pageIndex.userSignin.page, {routing: pageIndex});
}

function dashboard(req, res) {
	console.log(req);
	res.render(pageIndex.userDashboard.page, {userData: req.user, routing: pageIndex});
}


function buisnessSignin(req, res){
	res.render(pageIndex.bizSignin.page, {routing: pageIndex})
}
function buisnessSignup(req, res){
	res.render(pageIndex.bizSignup.page, {routing: pageIndex})
}

function buisnessDashboard(req, res) {
	console.log(req.user);
	res.render(pageIndex.bizDashboard.page, {bizData: req.user, routing: pageIndex});
}