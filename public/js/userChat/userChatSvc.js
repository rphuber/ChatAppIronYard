angular.module('userChatApp')

	.factory('userChatSvc', function($log, $rootScope, $http, $cookies, $cookieStore, $route) {

		var chatsUrl = '/api/collections/chatappironyard';
		var userUrl = '/api/collections/chatappironyardusers';

		var username = $cookieStore.get('username');

		var getOnlineUsers = function() {

			return $http.get(userUrl);

		};

		var submitUser = function(name) {

			$cookieStore.put('username', name);

			var username = {username: name};

			$http.post(userUrl, username).success(function(data) {

				$log.info('user added');

			});

		};

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
			submitUser:submitUser,
			getChats:getChats,
			addChat:addChat

		};


	});
