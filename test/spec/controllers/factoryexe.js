'use strict';

describe('Controller: FactoryexeCtrl', function () {

  // load the controller's module
  beforeEach(module('exeApp'));

  var FactoryexeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FactoryexeCtrl = $controller('FactoryexeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FactoryexeCtrl.awesomeThings.length).toBe(3);
  });
});
