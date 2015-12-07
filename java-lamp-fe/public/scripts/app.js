angular.module('javaLamp', ['ngMaterial', 'ngMessages'])
  .controller('NavbarController', function($rootScope, $scope, $mdDialog, $mdMedia) {
    // $scope.status = "";
    $rootScope.selectedIndex = 0;
    $scope.showRegister = function(ev) {
      $rootScope.selectedIndex = 0;
      $mdDialog.show({
        controller: DialogController,
        templateUrl:'partials/register-login-dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
    }

    $scope.showLogin = function(ev) {
      $rootScope.selectedIndex = 1;
      $mdDialog.show({
        controller: DialogController,
        templateUrl:'partials/register-login-dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
    }
  // .then(function(answer) {
  //   $scope.status = ''
  // })

});

function DialogController($rootScope, $scope, $mdDialog, $mdDialog) {
  $scope.selectedIndex = $rootScope.selectedIndex;
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}