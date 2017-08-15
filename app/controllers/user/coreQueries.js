

let models = require('../../models');


module.exports = {
	create,
	update,
	findAll,
	getOneById,
	getOneByEmail
};


 function create(userobject) {
	return models.users.create(userobject)
};


function update(userId, updateData) {
	console.log(models);
	return models.user.update(updateData, {
		where: {
			id: userId
		}
	})
};

function findAll() {
	return models.users.all()
};

function getOneById(userId) {
	return models.users.findOne({where: {id: userId}})
};


function getOneByEmail(email){
	return models.user.findOne({where: {email: email}});
}