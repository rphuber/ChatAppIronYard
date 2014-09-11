angular.module('adminApp')

  .factory('adminSvc', function($log, $rootScope, $http) {

    var chatsUrl = '/api/collections/chatappironyard';

    var getChats = function() {

      return $http.get(chatsUrl)

    };

    var deleteChat = function(chatId) {

      $http.delete(chatsUrl + '/' + chatId).success(function(data) {

        $rootScope.$broadcast('chat:deleted');
        $log.info('chat:deleted');

      });
    };

    return {

      getChats:getChats,
      deleteChat:deleteChat

    };

  });
