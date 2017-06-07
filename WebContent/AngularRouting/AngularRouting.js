var app = angular.module("myApp", ["ngRoute"]);
		app.config(['$routeProvider',function($routeProvider) {
			$routeProvider.when('/Page-1', {
				templateUrl : 'AngularRouting/Page-1.html'
			}).when('/Page-2', {
				templateUrl : 'AngularRouting/Page-2.html'
			}).when('/Page-3', {
				templateUrl : 'AngularRouting/Page-3.html'
			}).otherwise({
               redirectTo: '/Page-1'
            });
		}]);