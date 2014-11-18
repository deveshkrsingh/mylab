var routingApp = angular.module('routingApp', ['ngRoute']);
routingApp.config(function ($routeProvider)
{
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'mainController'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutController'

    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactController'
    })
    .otherwise('/contact', {
        templateUrl: 'views/contact1.html',
        controller: 'contactController'
    });
});