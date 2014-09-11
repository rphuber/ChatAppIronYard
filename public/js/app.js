'use strict';

angular
  .module('chatApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/chatRoom', {
        templateUrl: 'views/chatRoom.html',
        controller: 'chatCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'adminCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
