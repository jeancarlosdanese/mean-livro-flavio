// config/express.js
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

module.exports = function() {
	var app = express();

	// configuração de ambiente
	app.set('port', 3000);

	// middleware
	app.use(express.static('./public'));
	app.set('view engine', 'ejs');
	app.set('views','./app/views');

	// novos middlewares
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());

	// sestema de autenticação
	app.use(cookieParser());
	app.use(session(
		{ 
			secret: 'homem avestruz',
			resave: true,
			saveUninitialized: true
		}
	));
	app.use(passport.initialize());  // deve vir antes do "app.use(passport.session())"
	app.use(passport.session());

	load('models', {cwd: 'app'})
		.then('controllers')
    	.then('routes/auth.js')
		.then('routes')
		.into(app);

	return app;
};