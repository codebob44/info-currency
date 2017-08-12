

module.exports = function(sequelize, Sequelize) {
	var Biz = sequelize.define("Biz", {
		id: {
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		name: {
			type: Sequelize.INTEGER
		},
		balance: {
			type: Sequelize.INTEGER
		}
	});
	return Biz;
};

/*

-ID
-Age: What
-Sex
-State
-Zip
-Income
-Marital Status
-Balance/Transactions*/
