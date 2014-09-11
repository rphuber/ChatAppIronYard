angular.module("chatApp")
	.directive("sitemenu", function () {
		return {
			restrict: "E", 
			templateUrl: "views/directives/sitemenu.html"
		};
	});