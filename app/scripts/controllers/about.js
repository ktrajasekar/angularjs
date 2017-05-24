'use strict';

/**
 * @ngdoc function
 * @name exeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the exeApp
 */
angular.module('exeApp')
  .controller('AboutCtrl', function () {


  });


  angular.module('exeApp').directive("myWidget", function() {
return {
restrict: "E",
template: "<p>Hello World</p>"
};
});
