angular
  .module('chatApp', [
    'ngRoute', 'userChatApp', 'adminApp', 'ngCookies'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller:'userChatCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
