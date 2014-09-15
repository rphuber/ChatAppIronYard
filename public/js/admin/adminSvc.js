angular.module('adminApp')

  .factory('adminSvc', function($log, $rootScope, $http) {

    var chatsUrl = '/api/collections/chatappironyard';
    var userUrl = '/api/collections/chatappironyardusers';

    var getChats = function() {

      return $http.get(chatsUrl)

    };

    var deleteChat = function(chatId) {

      $http.delete(chatsUrl + '/' + chatId).success(function(data) {

        $rootScope.$broadcast('chat:deleted');
        $log.info('chat:deleted');

      });
    };

    var getUsers = function() {

      return $http.get(userUrl);

    };

    var deleteUser = function(userId) {

      $http.delete(userUrl + '/' + userId).success(function(data) {

        $log.info('user:deleted');
        $rootScope.$broadcast('user:deleted');

      });

    };

    return {

      getChats:getChats,
      deleteChat:deleteChat,
      getUsers:getUsers,
      deleteUser:deleteUser

    };

  });
