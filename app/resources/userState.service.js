var app = angular.module("lostrequiem.resources");

/******************************************
 * Making this a service, because we only
 * ever want one of these to exist in
 * memory at any given time.
 ******************************************/
app.service('userState.service', [function() {
	this.login = function () {
		// TODO: This will need to make a call to the backend
		that.loggedIn = true;
	}

	this.isLoggedIn = function() {
		// TODO: This should eventually make calls to the server to determine whether
		// the user is currently logged in. Storing login state in JS is not secure enough.
		return that.loggedIn;
	}
}]);