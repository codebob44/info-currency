let user = require('./user');
let detailedQuery = require('./detailedQuery');

module.exports = {
	create: user.create,
	update: user.update,
	findAll: user.findAll,
	getOneById: user.getOneById,
	getOneByEmail: user.getOneByEmail,
	dashboard: user.dashboard,
	query: user.query,
	searchPage: user.search,
	logout: user.logout,
	detailedQuery
};