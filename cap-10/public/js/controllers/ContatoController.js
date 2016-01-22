// public/js/controllers/ContatoController.js

angular.module('contatooh').controller('ContatoController'
			, function($routeParams, recursosContato, cadastroDeContato) {
	
	var self = this;

	self.mensagem = {texto: ''};

	if($routeParams.contatoId) {

		recursosContato.get({contatoId : $routeParams.contatoId}, function(contato) {
			self.contato = contato;
		}, function(erro) {
			console.log(erro);
			self.mensagem = {
				texto: 'Não foi possível obter a contato'
			}
		});	
	} else {
		self.contato = {};
	}

	self.salva = function() {

		//if(self.formulario.$valid) {
			
			cadastroDeContato.cadastrar(self.contato)
			.then(function(dados) {
				self.mensagem = dados.mensagem;
				// se for inclusão limpa furmulário
				if(dados.inclusao) self.contato = {};
			})
			.catch(function(dados) {
				self.mensagem = dados.mensagem;
			});
		//}
	};

	recursosContato.query(function(contatos) {
		self.contatos = contatos;
	}, function(erro) {
		console.log(erro);
	});

});