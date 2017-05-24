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
      .when('/factoryExe', {
        templateUrl: 'views/factoryexe.html',
        controller: 'FactoryexeCtrl',
        controllerAs: 'factoryExe'
      })
      .when('/myroute', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl',
        controllerAs: 'myroute'
      })
      .otherwise({
        redirectTo: '/'
      });
     $locationProvider.hashPrefix('');
  });
