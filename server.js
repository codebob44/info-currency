var express = require('express');
var app = express();
var path = require('path');
var passport   = require('passport');
var session    = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');
let serveStatic = require('serve-static');


//For Handlebars
//app.locals.layout = path.join(__dirname, 'app/views/layouts/main');
app.set('views', './app/views');
app.engine('hbs', exphbs({
	//defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// serve static assets
app.use('/assets', serveStatic(path.join(__dirname, 'assets')));

/*app.use('/', function(req, res, next){
    console.log(req);
    next();
})*/
require('./app/routes')(app,passport);
//Models
var models = require("./app/models");
 
//Sync Database
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine');
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
});

/*
//Routes
var authRoute = require('./app/routes/auth.js')(app,passport);
app.use('/api', require('./app/routes/api-routes'));
app.use('/', require('./app/routes/html-routes'));
*/

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);
 
var PORT = process.env.PORT || 5000;
app.listen(PORT, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});