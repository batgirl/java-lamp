angular.module('javaLamp', ['ngMaterial', 'ngMessages'])
  .controller('NavbarController', function($scope, $mdDialog, $mdMedia) {
    // $scope.status = "";
    $scope.showRegister = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl:'partials/register-login-dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
    }

    $scope.showLogin = function(ev) {
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

function DialogController($scope, $mdDialog) {
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