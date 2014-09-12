angular.module('userChatApp')

	.factory('userChatSvc', function($log, $rootScope, $http, $cookies) {

		var submitUsername = function(name) {

			$cookies.username = name;

		};

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

			submitUsername:submitUsername,
			getChats:getChats,
			addChat:addChat

		};


	});
