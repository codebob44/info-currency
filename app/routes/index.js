

module.exports = function(app, passport){
	console.log(passport);
require('./auth')(app, passport);
require('./api-routes')(app);
require('./html-routes')(app);
};