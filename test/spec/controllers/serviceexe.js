'use strict';

describe('Controller: ServiceexeCtrl', function () {

  // load the controller's module
  beforeEach(module('exeApp'));

  var ServiceexeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiceexeCtrl = $controller('ServiceexeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServiceexeCtrl.awesomeThings.length).toBe(3);
  });
});
