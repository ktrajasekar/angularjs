  'use strict';

  /**
   * @ngdoc function
   * @name exeApp.controller:ServiceexeCtrl
   * @description
   * # ServiceexeCtrl
   * Controller of the exeApp
   */
  angular.module('exeApp')
    .controller('FactoryexeCtrl', function ($scope, UserService) {
      $scope.firstUser = UserService.all();
    });
    //Services
    angular.module('exeApp')
    .factory("UserService", function() {
      var users = ["Peter", "Daniel", "Nina"];
      return {
        all: function() {
          return users;
        },
        first: function() {
          return users[0];
        }
      };
    });
