

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
/*	let data = { id: 1,
		firstname: 'person',
		lastname: 'yep',
		username: null,
		about: null,
		email: 'example@example.com',
		password: '$2a$08$l7ZbUy/22K6rorn1qA5vGOE8L/xBsXJTs2I4xze23ISeWRuNrBvqe',
		last_login: null,
		status: 'active',
		age: 99,
		sex: 'mail',
		state: 'ny',
		zip: null,
		income: 1000000,
		marital_status: null,
		balance: null,
		movies: null,
		music: null,
		sports: null,
		fashion: null,
		social: null,
		createdAt: '2017-08-15T08:26:01.000Z',
		updatedAt: '2017-08-15T10:37:26.000Z' };
	res.render(pageIndex.userDashboard.page, {userData: data, routing: pageIndex});*/
	res.render(pageIndex.userDashboard.page, {userData: req.user, routing: pageIndex});
}


function buisnessSignin(req, res){
	res.render(pageIndex.bizSignin.page, {routing: pageIndex})
}
function buisnessSignup(req, res){
	res.render(pageIndex.bizSignup.page, {routing: pageIndex})
}

function buisnessDashboard(req, res) {
/*	let data = { id: 1,
		firstname: 'person',
		lastname: 'yep',
		username: null,
		about: null,
		email: 'example@example.com',
		password: '$2a$08$l7ZbUy/22K6rorn1qA5vGOE8L/xBsXJTs2I4xze23ISeWRuNrBvqe',
		last_login: null,
		status: 'active',
		age: 99,
		sex: 'mail',
		state: 'ny',
		zip: null,
		income: 1000000,
		marital_status: null,
		balance: null,
		movies: null,
		music: null,
		sports: null,
		fashion: null,
		social: null,
		createdAt: '2017-08-15T08:26:01.000Z',
		updatedAt: '2017-08-15T10:37:26.000Z' };
	res.render(pageIndex.bizDashboard.page, {bizData: data, routing: pageIndex});*/
	res.render(pageIndex.bizDashboard.page, {bizData: req.user, routing: pageIndex});
}