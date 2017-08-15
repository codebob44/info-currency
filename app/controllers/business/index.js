let coreQueries = require('./coreQueries');

module.exports = {
	create: coreQueries.create,
	update: coreQueries.update,
	findAll: coreQueries.findAll,
	getOneById: coreQueries.getOneById,
};