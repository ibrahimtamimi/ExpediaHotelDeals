angular.module('expTask.services', [])


.factory('APIData', function ($http, $location, $window) {
 	
 	var getALLDeals = function () {
 		return $http({
 			method : 'GET',
 			url : '/api/data'
 		})
 		.then(function (resp) {
 			return resp.data;
 		})
 	}

 	return {
 		getALLDeals : getALLDeals
 	}
});
