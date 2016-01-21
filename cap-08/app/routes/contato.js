// app/routes/contato.js

module.exports = function(app) {

	var controller = app.controllers.contato;

	app.route('/v1/contatos')
		.get(controller.listaContatos)
		.post(controller.salvaContato);

	app.route('/v1/contatos/:id')
		.get(controller.obtemContato)
		.put(controller.salvaContato)
		.delete(controller.removeContato);

};