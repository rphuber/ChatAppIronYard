angular.module('userChatApp')

  .controller('userChatCtrl', function ($scope, $location, $routeParams, $rootScope, userChatSvc) {

    $scope.submitUserName = function(name) {

      userChatSvc.userName = name;
      $location.path("/chatRoom");

    };

    $scope.getUserName = function() {

      return userChatSvc.userName;

    };

    userChatSvc.getChats().success(function(chats) {

      $scope.chats = chats;

    });

    $scope.addChat = function(chat) {

      var chatData = {

        userName:userChatSvc.userName,
        date:new Date(),
        chatText:chat.text

      };

      userChatSvc.addChat(chatData);

    };

    $rootScope.$on('chat:added', function() {

      userChatSvc.getChats().then(function(chats) {

        $scope.chats = chats;

      });

    });

  });
