
let models = require('../../models');

module.exports = {
	create,
	update,
	findAll,
	getOneById
};


function create(bizObject){
	return models.Biz.create(bizObject)
}
function update(bizId, updateData){
	return models.Biz.update(updateData, {where: {
		id: bizId
	}})
}
function findAll(){
	return models.Biz.findAll()
}
function getOneById(bizId){
	return models.Biz.findOne({ where: {id: bizId} })
}