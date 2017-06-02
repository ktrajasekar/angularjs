angular.module('exeApp').directive("myWidget", function() {
return {
restrict: "E",
template: "<p>Hello World</p>"
};
});

// $scope.menuClass = function(page){
// var current = $location.path().substring(1);
//   console.log(current);
// };

angular.module('exeApp').controller("MainCtrlNav", function($scope, $location) {
$scope.menuClass = function(page) {
var current = $location.path().substring(1);
  return page === current ? "activeli" : "";
};
});
