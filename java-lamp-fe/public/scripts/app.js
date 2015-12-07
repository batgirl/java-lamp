angular.module('javaLamp', ['ngMaterial', 'ngMessages'])
  .controller('NavbarController', function($scope, $mdDialog, $mdMedia) {
    // $scope.status = "";
    $scope.showRegister = function(ev) {
      // make Register tab md-active
      $scope.selectedIndex = 0;
      $mdDialog.show({
        controller: DialogController,
        templateUrl:'partials/register-login-dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
    }

    $scope.showLogin = function(ev) {
      // make Login tab md-active
      $scope.selectedIndex = 1;
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