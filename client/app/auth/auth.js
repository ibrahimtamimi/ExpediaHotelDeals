angular.module('expTask.auth', [])

.controller('DataController', function ($scope, $window, $location, Data) {
  Data.getALLDeals().then(function (resp) {
  	console.log(resp)
  })
});
