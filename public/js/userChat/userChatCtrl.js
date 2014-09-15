angular.module('userChatApp')

  .controller('userChatCtrl', function ($scope, $location, $routeParams, $rootScope, $route, $cookies, $cookieStore, $interval, userChatSvc) {

    $scope.submitUser = function(name) {

      userChatSvc.submitUser(name);

      $location.path("/chatRoom");

    };

    $scope.username = userChatSvc.username;

      $scope.getChats = $interval(function() {

        userChatSvc.getChats().success(function(chats) {

        $scope.chats = chats;

      });
    }, 500);

    $scope.getOnlineUsers = $interval(function() {

      userChatSvc.getOnlineUsers().success(function(onlineUsers) {

      $scope.onlineUsers = onlineUsers;

      });
    }, 500);

      $scope.addChat = function(chat) {

      var chatData = {

        username:$scope.username,
        date:new Date(),
        content:chat.text

      };

      userChatSvc.addChat(chatData);

      $scope.chatSubmit = {};

    };

    // $rootScope.$on('chat:added', function() {
    //
    //   userChatSvc.getChats().then(function(chats) {
    //
    //     $scope.chats = chats;
    //     $route.reload();
    //
    //   });
    //
    // });


  });
