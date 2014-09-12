angular.module('userChatApp')

  .controller('userChatCtrl', function ($scope, $location, $routeParams, $rootScope, $route, $cookies, $cookieStore, userChatSvc) {

    $scope.submitUsername = function(name) {

      userChatSvc.submitUsername(name);

      $location.path("/chatRoom");

    };

    $scope.username = userChatSvc.username;

    $scope.onlineUsers = userChatSvc.getOnlineUsers();

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
        $route.reload();

      });

    });

  });
