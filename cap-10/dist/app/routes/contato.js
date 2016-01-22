// app/routes/contato.js

function verificaAutenticacao(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} else {
		res.status('401').json('Não autorizado');
	}
}

module.exports = function(app) {

	var controller = app.controllers.contato;

	app.route('/v1/contatos')
		.get(verificaAutenticacao, controller.listaContatos)
		.post(verificaAutenticacao, controller.salvaContato);

	app.route('/v1/contatos/:id')
		.get(verificaAutenticacao, controller.obtemContato)
		.put(verificaAutenticacao, controller.salvaContato)
		.delete(verificaAutenticacao, controller.removeContato);

};