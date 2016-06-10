(function () {
	'use strict';

	// angular.js main app initialization
	angular
					.module('myApp', [])
					.config(config)
					.controller('MenuController', MenuController)
					.controller('Book1Ctrl', Book1Ctrl);

	function config($routeProvider) {
		$routeProvider
						.when('/', {
							templateUrl: 'pages/home.html'
						})
						.when('/pages/introduction', {
							templateUrl: 'pages/introduction.html'
						})
						.when('/pages/meg_base', {
							templateUrl: 'pages/meg_base.html'
						})
						.when('/pages/beherenow', {
							templateUrl: 'pages/beherenow.html'
						})
						.when('/pages/product4', {
							templateUrl: 'pages/product4.html'
						})
						.when('/meg_history', {
							templateUrl: 'pages/meg_history.html'
						})
						.when('/dongsa_history', {
							templateUrl: 'pages/dongsa_history.html'
						})
						.when('/books', {
							templateUrl: 'pages/books.html'
						})
						.when('/pagesEn/introduction_e', {
							templateUrl: 'pagesEn/introduction_e.html'
						})
						.otherwise({
							redirectTo: '/'
						});
	}

	function MenuController($scope, $location) {
		$scope.isActive = function (path) {
			return $location.path() === path;
		};
	}

	function Book1Ctrl($scope) {
		$scope.book1templates =
						[
							{name: 'cover', url: 'pages/book3steps/cover.html'},
							{name: 'p13-20', url: 'pages/book3steps/p13-20.html'},
							{name: 'p21-29', url: 'pages/book3steps/p21-29.html'},
							{name: 'p30-35', url: 'pages/book3steps/p30-35.html'},
							{name: 'p36-42', url: 'pages/book3steps/p36-42.html'},
							{name: 'p43-49', url: 'pages/book3steps/p43-49.html'},
							{name: 'p50-55', url: 'pages/book3steps/p50-55.html'},
							{name: 'p56-61', url: 'pages/book3steps/p56-61.html'},
							{name: 'p62-68', url: 'pages/book3steps/p62-68.html'},
							{name: 'p69-75', url: 'pages/book3steps/p69-75.html'},
							{name: 'p76-80', url: 'pages/book3steps/p76-80.html'},
							{name: 'p83-90', url: 'pages/book3steps/p83-90.html'},
							{name: 'p210-214', url: 'pages/book3steps/p210-214.html'}
						];

		$scope.changePage = function (page, isback) {
			if (typeof isback !== "undefined" && isback !== null) {
				$scope.isBack = isback;
			}
			switch (page) {
				case "cover":
					$scope.book1template = $scope.book1templates[0];
					break;
				case "p13-20":
					$scope.book1template = $scope.book1templates[1];
					break;
				case "p21-29":
					$scope.book1template = $scope.book1templates[2];
					break;
				case "p30-35":
					$scope.book1template = $scope.book1templates[3];
					break;
				case "p36-42":
					$scope.book1template = $scope.book1templates[4];
					break;
				case "p43-49":
					$scope.book1template = $scope.book1templates[5];
					break;
				case "p50-55":
					$scope.book1template = $scope.book1templates[6];
					break;
				case "p56-61":
					$scope.book1template = $scope.book1templates[7];
					break;
				case "p62-68":
					$scope.book1template = $scope.book1templates[8];
					break;
				case "p69-75":
					$scope.book1template = $scope.book1templates[9];
					break;
				case "p76-80":
					$scope.book1template = $scope.book1templates[10];
					break;
				case "p83-90":
					$scope.book1template = $scope.book1templates[11];
					break;
				case "p210-214":
					$scope.book1template = $scope.book1templates[12];
					break;
			}
		}
		$scope.book1template = $scope.book1templates[0];
	}

})();