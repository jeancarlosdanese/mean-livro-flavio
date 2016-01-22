// app/routes/main.js

var path = require('path');

module.exports = function(app) {

	app.get('/', function(req, res) {
		var login = '';
		if(req.user) {
			login = req.user.login;
		}
		res.render('index', { "usuarioLogado" : login});
	});

	// habilitando HTML5MODE
    /*app.all('/*', function(req, res) {
        res.sendFile(path.resolve('/public/index.html'));
    });*/

}