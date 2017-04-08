angular.module('expTask', [
  'expTask.services',
  'expTask.Data',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/first', {
      templateUrl: 'app/Data/first.html',
      controller: 'DataController'
    })
    .when('/sec', {
      templateUrl: 'app/Data/sec.html',
      controller: 'DataController'
    })
    .when('/third', {
      templateUrl: 'app/Data/third.html',
      controller: 'DataController'
    })
    
})
