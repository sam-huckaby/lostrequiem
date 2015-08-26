var app = angular.module("lostrequiem", [
	'ui.router',
	'ui.bootstrap',
	'lostrequiem.components',
	'lostrequiem.resources'
]);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {
  
  	// Enable HTML5 mode, to eliminate hashbang routing in modern browsers
	$locationProvider.html5Mode(true).hashPrefix('!');

	// If user attempts to navigat to a non-accessible page, redirect to the index
	$urlRouterProvider.otherwise("/");
	
	// Now set up the states
	$stateProvider
	.state('home', {
		url: "/",
		templateUrl: "templates/home/main.html"
	});
}]);