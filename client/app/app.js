angular.module('expTask', [
  'expTask.services',
  'expTask.auth',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/first', {
      templateUrl: 'app/auth/first.html',
      controller: 'AuthController'
    })
    .when('/sec', {
      templateUrl: 'app/auth/sec.html',
      controller: 'AuthController'
    })
    
})
