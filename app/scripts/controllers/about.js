'use strict';

/**
 * @ngdoc function
 * @name exeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the exeApp
 */
angular.module('exeApp')
  .controller('AboutCtrl', function ($scope) {

    $scope.$watch(function() {
    return $scope.name;
    }, function(newValue, oldValue) {
    console.log("change detected: " + newValue)
    });

  });
