angular.module('thumbApp', ['youthumbService', 'mainController', 'watchController', 'ngMaterial', 'app.routes', 'ngAnimate'])

// create the default theme for ngMaterial
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('red');
});
