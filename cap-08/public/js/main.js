// public/js/main.js

angular.module('contatooh', ['ngRoute', 'contatoService'])
.config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);
	
	$routeProvider.when('/contatos', {
		templateUrl: 'partials/contatos.html',
		controller: 'ContatosController',
		controllerAs: 'contatosController'
	})

	.when('/contato/:contatoId', {
		templateUrl: 'partials/contato.html',
		controller: 'ContatoController',
		controllerAs: 'contatoController'
	})

	.when('/contato', {
		templateUrl: 'partials/contato.html',
		controller: 'ContatoController',
		controllerAs: 'contatoController'
	})

	.otherwise({ redirectTo: '/contatos' })

});
