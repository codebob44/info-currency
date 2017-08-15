let _ = require('lodash');
let models = require('../../models');

module.exports = function (queryDetails) {
	let queryParams = {};
	queryParams['where'] = detailedQuery(queryDetails);
	queryParams['attributes'] = {'exclude': ['userName', 'userEmail']};
	return models.user.findAll(queryParams)
};


function detailedQuery(query) {
	let whereClause = {};
	for (var props in query) {
		if (!_.isArray(query[props])) {
			if (props === "age") {
				whereClause['age'] = age(query[props]);
			} else if (props === "income") {
				whereClause["income"] = income(query[props]);
			} else {
				whereClause[props] = query[props];
			}

		} else {
			// PROBABLY COULD COMBINE THESE TWO forEach STATEMENTS INTO ON IF THEY WILL ALL GET THROWN TOGETHER INTO THE SAME $or Array;
			if (props === "age") {
				whereClause['age'] = {"$or": []};
				_.forEach(query[props], (item) => {
					whereClause['age']["$or"].push(age(item));
				})
			} else if (props === "income") {
				whereClause['income'] = {"$or": []};
				_.forEach(query[props], (item) => {
					whereClause['income']["$or"].push(income(item));
				})
			} else {
				whereClause[props] = {"$or": []};
				_.forEach(query[props], (item) => {
					whereClause[props]["$or"].push(item);
				})
			}
		}

	}
};


function age(value) {
	switch (value) {
		case "18-24":
			return 1;
			break;
		case "25-34":
			return 2;
			break;
		case "45-54":
			return 3;
			break;
		case "55-64":
			return 4;
			break;
		case "65+":
			return 5;
			break;
	}
}

function income(value) {
	switch (value) {
		case "39,999k":
			return 1;
			break;
		case "40-50k":
			return 2;
			break;
		case "50-74,999":
			return 3;
			break;
		case "100-124,999":
			return 4;
			break;
		case "125-149,999":
			return 5;
			break;
		case "150-249,999":
			return 6;
			break;
		case "250<":
			return 7;
			break;
	}
}