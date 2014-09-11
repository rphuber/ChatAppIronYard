angular.module("adminApp", ['ngRoute'])

  .config(function($routeProvider) {

    $routeProvider

      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'adminCtrl'
      })

  });
