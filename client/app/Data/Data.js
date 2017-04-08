angular.module('expTask.Data', [])

.controller('DataController', function ($scope, $window, $location, APIData, $route) {
	
	$scope.Hotels = [];
	
	$scope.getDataAllHotel = function (par) {
		APIData.getALLDeals().then(function (resp) {
		  	$scope.Hotels =  resp.offers['Hotel'];
		})
	}

	$scope.getDataByID = function (id) {
		$scope.flag = false;
		$scope.Target = [];
		$scope.msg ;
		APIData.getALLDeals().then(function (resp) {
			$scope.Hotels = resp.offers['Hotel'];
			for (var i = $scope.Hotels.length - 1; i >= 0; i--) {
				if ($scope.Hotels[i].destination.regionID === id){
					$scope.Target.push( $scope.Hotels[i] );
					$scope.flag = true;
					break;
				}
			}
			if (!$scope.flag) {
				$scope.msg = "Not Found"
			}
		})
	}

	$scope.getByMaxDate =function (date) {
		APIData.getALLDeals().then(function (resp) {
			$scope.Hotels = resp.offers['Hotel'];
		})
	}

	$scope.getByMinDate =function (date) {
		APIData.getALLDeals().then(function (resp) {
			$scope.Hotels = resp.offers['Hotel'];
		})	
	}
  
});
