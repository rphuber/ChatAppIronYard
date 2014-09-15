angular.module("chatApp")

  .controller("adminCtrl", function($scope, $rootScope, $location, adminSvc) {

    adminSvc.getChats().success(function(chats) {

      $scope.chats = chats;

    });

    adminSvc.getUsers().success(function(users) {

      $scope.users = users;

      console.log($scope.users);

    });

    $scope.deleteChat = function(chatId) {

      adminSvc.deleteChat(chatId);

    };

    $scope.deleteUser = function(userId) {

      adminSvc.deleteUser(userId);

    };

    $rootScope.$on('chat:deleted', function() {

      adminSvc.getChats().success(function(chats) {

        $scope.chats = chats;

      });

    });

    $rootScope.$on('user:deleted', function() {

      adminSvc.getUsers().success(function(users) {

        $scope.users = users;

      });

    });

});
