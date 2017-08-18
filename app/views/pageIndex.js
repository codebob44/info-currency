

module.exports = {
	// General Routes and Display Assets
	landing: {route:'/', page:'userSignUp'},
	logout: {route: '/logout'},
	// User Routes and Display Assets
	userSignin: {route:'/login', page:'userLogin'},
	userSignUp: {route:'/signup', page:'userSignUp'},
	userDashboard: {route:'/userDashboard', page:'userDashboard'},
	// Business Routes and Display Assets
	bizDashboard: {route: '/businessDashboard', page: 'businessDashboard'},
	bizSignup: {route: '/signupBiz', page: 'businessSignUp'},
	bizSignin: {route: '/signinBusiness', page: 'businessLogin'}
};
