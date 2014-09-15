angular.module('userChatApp')

	.factory('userChatSvc', function($log, $rootScope, $http, $cookies, $cookieStore, $route) {

		var username = $cookieStore.get('username');

		var onlineUsers = [];

		var getOnlineUsers = function() {

			return onlineUsers;

		};

		var submitUsername = function(name) {

			$cookieStore.put('username', name);
			onlineUsers.push(name);

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

			username:username,
			getOnlineUsers:getOnlineUsers,
			submitUsername:submitUsername,
			getChats:getChats,
			addChat:addChat

		};


	});
