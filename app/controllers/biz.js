
let models = require('../models');


module.exports = {
	create: function(bizObject){
		return models.Biz.create(bizObject)
	},
	update: function(bizId, updateData){
		return models.Biz.update(updateData, {where: {
			id: bizId
		}})
	},
	findAll: function(){
		return models.Biz.findAll()
	},
	getOneById: function(bizId){
		return models.Biz.findOne({ where: {id: bizId} })
	}

};