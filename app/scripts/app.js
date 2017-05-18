'use strict';

/**
 * @ngdoc overview
 * @name exeApp
 * @description
 * # exeApp
 *
 * Main module of the application.
 */
angular
  .module('exeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/serviceExe', {
        templateUrl: 'views/serviceexe.html',
        controller: 'ServiceexeCtrl',
        controllerAs: 'serviceExe'
      })
      .otherwise({
        redirectTo: '/'
      });
     $locationProvider.hashPrefix('');
  });
