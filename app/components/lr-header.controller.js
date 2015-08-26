var app = angular.module("lostrequiem.components");

app.controller('lr-header.controller', ['$scope', '$modal', 'userState.service', function ($scope, $modal, userState) {
	$scope.open = function (size) {
		var loggedIn = userState.isLoggedIn(),
			modalInstance;

		if(loggedIn)
		{
			// Open the Account Dialog
		} else {
			modalInstance = $modal.open({
			  animation: true,
			  templateUrl: 'myModalContent.html', // TODO: REPLACE
			  controller: 'ModalInstanceCtrl', // TODO: REPLACE
			  size: 'sm',
			  resolve: {
			    items: function () {
			      return $scope.items;
			    }
			  }
			});

			modalInstance.result.then(function (selectedItem) {
				$scope.selected = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		}
	};
}])