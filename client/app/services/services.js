angular.module('expTask.services', [])


.factory('Data', function ($http, $location, $window) {
 	var getALLDeals = function () {
 		return $http({
 			method : 'GET',
 			url : '/api/data'
 		})
 		.then(function (resp) {
 			return resp
 		})
 	},
	
	var getById = function (id) {
 		return $http({
 			method : 'POST',
 			url : '/api/data',
 			data : id
 		})
 		.then(function (resp) {
 			return resp
 		})
 	}, 	
 	
 	var maxDataByMaxDate = function (date) {
 		return $http({
 			method : 'POST',
 			url : '/api/data',
 			data : date
 		})
 		.then(function (resp) {
 			return resp
 		})
 	},

 	var minDataByMaxDate = function (date) {
 		return $http({
 			method : 'POST',
 			url : '/api/data',
 			data : date
 		})
 		.then(function (resp) {
 			return resp
 		})
 	}, 	
});
