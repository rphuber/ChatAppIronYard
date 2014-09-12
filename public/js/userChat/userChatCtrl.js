angular.module('userChatApp')

  .controller('userChatCtrl', function ($scope, $location, $routeParams, $rootScope, $route, $cookies, userChatSvc) {


    $scope.submitUsername = function(name) {

      userChatSvc.submitUsername(name);

      $location.path("/chatRoom");

    };

    $scope.username = $cookies.username;

    userChatSvc.getChats().success(function(chats) {

      $scope.chats = chats;

    });

      $scope.addChat = function(chat) {

      var chatData = {

        username:$scope.username,
        date:new Date(),
        content:chat.text

      };

      userChatSvc.addChat(chatData);

      $scope.chatSubmit = {};

    };

    $rootScope.$on('chat:added', function() {

      userChatSvc.getChats().then(function(chats) {

        $scope.chats = chats;

      });

    });

  });
