var app = angular.module('projectApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "HomeController",
            templateUrl: "views/home.html"
        })
        .when('/aboutme', {
            controller: "AboutMeController",
            templateUrl: "views/aboutme.html"
        })
        .when('/oneclickupload', {
            controller: "ProjectsController",
            templateUrl: "views/oneclickupload.html"
        })
        .when('/mathriceball', {
            controller: "ProjectsController",
            templateUrl: "views/mathriceball.html"
        })
        .when('/parkneat', {
            controller: "ProjectsController",
            templateUrl: "views/parkneat.html"
        })
        .when('/portfolio', {
            controller: "ProjectsController",
            templateUrl: "views/portfolio.html"
        })
        .when('/shoponline', {
            controller: "ProjectsController",
            templateUrl: "views/shoponline.html"
        })
        .otherwise({
            redirectTo: '/'
        });
});
