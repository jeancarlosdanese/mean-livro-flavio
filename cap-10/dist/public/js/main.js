// public/js/main.js

angular.module('contatooh', ['ngRoute', 'contatoService'])
.config(["$routeProvider", "$httpProvider", "$locationProvider", function($routeProvider, $httpProvider, $locationProvider) {

	// $locationProvider.html5Mode(true);

	$httpProvider.interceptors.push('meuInterceptor');
	
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

	.when('/auth', {
		templateUrl: 'partials/auth.html'
	})

	.otherwise({ redirectTo: '/contatos' })

}]);
