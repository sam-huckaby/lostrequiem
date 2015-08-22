var app = angular.module("lostrequiem.components");

app.directive('lrHeader', [function () {
	return {
		restrict: 'E',
		templateUrl: 'templates/components/lr-header.template.html'
	};
}]);