'use strict';

/**
 * @ngdoc function
 * @name exeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exeApp
 */

angular.module('exeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.$watch("name", function (newvalue, oldvalue) { 
  if($scope.name.length>=0){
      $scope.greeting= "Hello"+ $scope.name;
  }
})
  });
