let user = require('./user');

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
	detailedQuery: user.search
};