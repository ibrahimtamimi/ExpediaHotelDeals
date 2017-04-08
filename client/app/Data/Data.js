angular.module('expTask.Data', [])

.controller('DataController', function ($scope, $window, $location, APIData, $route) {
	
	$scope.Hotels = [];
	
	$scope.getDataAllHotel = function (par) {
		APIData.getALLDeals().then(function (resp) {
		  	$scope.Hotels =  resp.offers['Hotel'];
			console.log($scope.Hotels)
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
		var month = date.getMonth();
		var day = date.getDay();
		var year = date.getFullYear()
		$scope.Target = [];

		APIData.getALLDeals().then(function (resp) {
			$scope.Hotels = resp.offers['Hotel'];
			for (var i = $scope.Hotels.length - 1; i >= 0; i--) {
				var _date = $scope.Hotels[i].offerDateRange.travelEndDate
				if(_date[0] < year){
					$scope.Target.push($scope.Hotels[i]);		
				} else if(_date[0] === year && _date[1] < month){
					$scope.Target.push($scope.Hotels[i]);		
				} else if(_date[1] === month && _date[2] <= day ){
					$scope.Target.push($scope.Hotels[i]);		
				}
			}
		})
	}

	$scope.getByMinDate =function (date) {
		var month = date.getMonth();
		var day = date.getDay();
		var year = date.getFullYear()
		$scope.Target = [];

		APIData.getALLDeals().then(function (resp) {
			$scope.Hotels = resp.offers['Hotel'];
			for (var i = $scope.Hotels.length - 1; i >= 0; i--) {
				var _date = $scope.Hotels[i].offerDateRange.travelEndDate
				if(_date[0] > year){
					$scope.Target.push($scope.Hotels[i]);		
				} else if(_date[0] === year && _date[1] > month){
					$scope.Target.push($scope.Hotels[i]);		
				} else if(_date[1] === month && _date[2] >= day ){
					$scope.Target.push($scope.Hotels[i]);		
				}
			}
		})
	}

  
});
