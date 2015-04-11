angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    
    $routeProvider
    
    // home page route
    .when('/', {
        templateUrl: 'app/views/pages/home.html'
    })
    
    // watch page route for youthumbs
    .when('/watch', {
        templateUrl: 'app/views/pages/watch.html',
        controller: 'watchController',
        controllerAs: 'watch'
    });
    
    // enable html5 mode to get better and more natural urls
    $locationProvider.html5Mode(true);
})