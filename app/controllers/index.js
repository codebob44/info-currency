let auth = require('./authcontroller');
let user = require('./user');
let business = require('./business/business');



module.exports = {
	signup: auth.signup,
	dashboard: user.dashboard,
	logout: auth.logout,
	getUserInfo: user.getOneByEmail,
	query: user.query,
	search: user.searchPage,
	home: auth.home,
	isLoggedIn: auth.isLoggedIn,
	getOneById: user.getOneById,
	create: user.create,
	update: user.update,
	b_GetOneByIds: business.getOneById,
	b_Create: business.create,
	b_Update: business.update,
	auth
};



