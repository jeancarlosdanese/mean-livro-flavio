angular.module('contatoService', ['ngResource'])
.factory('recursosContato', ["$resource", function($resource) {	

	return $resource('/v1/contatos/:contatoId', null, {
		update: {
			method : 'PUT'
		}
	});

}])
.factory('cadastroDeContato', ["recursosContato", "$q", "$rootScope", function(recursosContato, $q, $rootScope) {
	
	var  servico = {};

	var evento = 'contatoCadastrado';
	
	servico.cadastrar = function(contato) {
		return $q(function(resolve, reject) {
			if(contato._id) {
				recursosContato.update({contatoId: contato._id}, contato, function() {
					$rootScope.$broadcast(evento);
					resolve({
						mensagem: { 
							texto: 'Contato ' + contato.nome + ' atualizada com sucesso!'
						},
						inclusao: false
					});
				}, function(erro) {
					console.log(erro);
					reject({
						mensagem: {
							texto: 'Não foi possível alterar o contato' + contato.nome
						}
					});
				});
			} else {
				recursosContato.save(contato, function() {
					$rootScope.$broadcast(evento);
					resolve({
						mensagem: {
							texto: 'Contato ' + contato.nome + ' incluído com sucesso!'
						},
						inclusao: true
					}, function(erro){
						console.log(erro);
						reject({
							mensagem: {
								texto: 'Não foi possível incluir o contato ' + contato.nome
							}
						});
					});
				});
			}
		});
	};

	return servico; 
}]);