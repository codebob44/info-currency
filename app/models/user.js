module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('user', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        username: {
            type: Sequelize.TEXT
        },
 
        about: {
            type: Sequelize.TEXT
        },
 
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
        last_login: {
            type: Sequelize.DATE
        },
 
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },
		age: {
			type: Sequelize.STRING,
			validate: {
				min: 18,
				max: 117
			}
		},
		sex: {
			type: Sequelize.STRING,
			validate: {}
		},
		state: {
			type: Sequelize.STRING,
			validate: {}
		},
		zip: {
			type: Sequelize.INTEGER,
			validate: {}
		},
		income: {
			type: Sequelize.STRING,
			validate: {}
		},
		marital_status: {
			type: Sequelize.STRING,
			validate: {}
		},
		balance: {
			type: Sequelize.INTEGER,
			validate: {}
		},
		movies: {
			type: Sequelize.BOOLEAN,
			validate: {}
		},
		music: {
			type: Sequelize.BOOLEAN,
			validate: {}
		},
		sports: {
			type: Sequelize.BOOLEAN,
			validate: {}
		},
		fashion: {
			type: Sequelize.BOOLEAN,
			validate: {}
		},
		social: {
			type: Sequelize.BOOLEAN,
			validate: {}
		}
 
 
    });
 
    return User;
 
}