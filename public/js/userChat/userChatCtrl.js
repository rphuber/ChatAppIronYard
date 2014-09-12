angular.module('userChatApp')

  .controller('userChatCtrl', function ($scope, $location, $routeParams, $rootScope, userChatSvc) {

    $scope.submitUsername = function(name) {

      userChatSvc.username = name;
      $location.path("/chatRoom");

    };

    $scope.getUsername = function() {

      return userChatSvc.username;

    };

    userChatSvc.getChats().success(function(chats) {

      $scope.chats = chats;

    });

    $scope.addChat = function(chat) {

      var chatData = {

        username:userChatSvc.userName,
        date:new Date(),
        content:chat.text

      };

      userChatSvc.addChat(chatData);
      $scope.chat = {};

    };

    $rootScope.$on('chat:added', function() {

      userChatSvc.getChats().then(function(chats) {

        $scope.chats = chats;

      });

    });

  });
