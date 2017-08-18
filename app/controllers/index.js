let auth = require('./auth');
let user = require('./user');
let business = require('./business');
let html = require('./html');


module.exports = {
	landing: html.home,
	userSignup: html.signup,
	userLogin: html.login,
	userDashboard: html.userDashboard,
	logout: auth.logout,
	getUserInfo: user.getOneByEmail,
	query: user.query,
	search: user.searchPage,

	isLoggedIn: auth.isLoggedIn,
	getOneById: user.getOneById,
	create: user.create,
	update: user.update,
	b_GetOneByIds: business.getOneById,
	b_Create: business.create,
	b_Update: business.update,
	auth,
	buisnessSignup: html.buisnessSignup,
	buisnessDashboard: html.buisnessDashboard,
	buisnessLogin: html.buisnessSignin
};



