let auth = require('./authcontroller');


module.exports = {
	isLoggedIn: auth.isLoggedIn,
	logout: auth.logout,
};
