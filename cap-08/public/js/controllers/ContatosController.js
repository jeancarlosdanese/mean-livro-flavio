// public/js/controllers/ContatosController.js

angular.module('contatooh').controller('ContatosController', ['recursosContato' , function(recursosContato) {
	
	var self = this;

	self.contatos = [];
	self.filtro = '';
	self.mensagem = {texto: ''};

	self.incrementa = function() {
		console.log('function incrementa');
	}

	recursosContato.query(function(contatos) {
		self.contatos = contatos;
	}, function(erro) {
		console.log(erro);
	});

	/*self.remove = function(contato) {
		console.log(contato);
	};*/

	self.remove = function(contato) {
		recursosContato.delete({contatoId : contato._id}, function() {
			var indiceContato = self.contatos.indexOf(contato);
			self.contatos.splice(indiceContato, 1);
			self.mensagem = { 
				texto: 'Contato ' + contato.nome + ' foi removida com sucesso!'
			};
		}, function(erro) {
			console.log(erro);
			self.mensagem = {
				texto: 'Não foi possível remover a contato ' + contato.nome
			}
		});

	};

}]);

/*angular.module('contatooh').controller('ContatosController', function(self) {
	self.total = 0;

	self.incrementa = function() {
		self.total++;
	};
});*/