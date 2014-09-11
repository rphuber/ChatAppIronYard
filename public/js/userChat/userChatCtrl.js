angular.module('userChatApp')

  .controller('userChatCtrl', function ($scope, $location, $routeParams, $rootScope, userChatSvc) {

    $scope.submitUserName = function(name) {

      userChatSvc.userName = name;
      $location.path("/chatRoom");

    };

    $scope.getUserName = function() {

      return userChatSvc.userName;

    };

    $scope.addChat = function(chat) {

      var chatData = {

        userName:userChatSvc.userName,
        date:new Date(),
        chatText:chat.text

      };

      userChatSvc.addChat(chatData);

    };

    userChatSvc.getChats().success(function(chats) {

      $scope.chats = chats;

    });

    $rootScope.$on('chat:added', function() {

      userChatSvc.getChats().success(function(chats) {

        $scope.chats = chats;

      });

    });

  });
