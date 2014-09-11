angular.module('userChatApp')

	.factory('userChatSvc', function($log, $rootScope, $http) {

		var userName = '';
		var chatsUrl = '/api/collections/chatappironyard';

		var getChats = function() {

			return $http.get(chatsUrl);

		};

		var addChat = function(chat) {

			$http.post(chatsUrl, chat).success(function (data) {

				$rootScope.$broadcast('chat:added');
				$log.info('chat:added');

			});

		};

		return {

			userName:userName,
			getChats:getChats,
			addChat:addChat

		};


	});
