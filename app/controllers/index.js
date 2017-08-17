let auth = require('./auth');
let user = require('./user');
let business = require('./business');
let html = require('./html');


module.exports = {
	landing: html.home,
	signup: html.signup,
	dashboard: html.dashboard,
	logout: auth.logout,
	getUserInfo: user.getOneByEmail,
	query: user.query,
	search: user.searchPage,
	login: html.login,
	isLoggedIn: auth.isLoggedIn,
	getOneById: user.getOneById,
	create: user.create,
	update: user.update,
	b_GetOneByIds: business.getOneById,
	b_Create: business.create,
	b_Update: business.update,
	auth,
	buisnessSignup: html.buisnessSignup,
	buisnessDashboard: html.buisnessDashboard
};



