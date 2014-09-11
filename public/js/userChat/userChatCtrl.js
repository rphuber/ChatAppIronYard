angular.module('userChatApp')

  .controller('userChatCtrl', function ($scope, $location, $routeParams, $rootScope, userChatSvc) {

    $scope.submitUserName = function(name) {

      userChatSvc.userName = name;
      $location.path("/chatRoom");

    };

    $scope.getUserName = function() {

      return userChatSvc.userName;

    };

  })
