angular.module("userChatApp", ['ngRoute'])

  .config(function($routeProvider) {

    $routeProvider

      .when('/chatRoom', {
        templateUrl: 'views/chatRoom.html',
        controller: 'userChatCtrl'
      })

  });
