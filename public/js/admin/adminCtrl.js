angular.module("chatApp")

  .controller("adminCtrl", function($scope, $rootScope, $location, adminSvc) {

    adminSvc.getChats().success(function(chats) {

      $scope.chats = chats;

    });

    $scope.deleteChat = function(chatId) {

      adminSvc.deleteChat(chatId);

    };

    $rootScope.$on('chat:deleted', function() {

      adminSvc.getChats().success(function(chats) {

        $scope.chats = chats;

      });

    });

  });
