var app = angular.module('javaLamp', ['ngMaterial', 'ngMessages', 'ngRoute'])

app.controller('NavbarController', function($rootScope, $scope, $mdDialog, $mdMedia) {
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

app.controller('LandingController', function() {

});

app.controller('ChallengesController', function() {

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

app.directive('aceEditor', function() {
  return {
    template: 
    '<div id="editor">function foo() {\n\n}</div> <script type="text/javascript" src="/scripts/ace_editor.js"></script>'
  }
});

app.config(['$routeProvider', '$locationProvider', '$mdThemingProvider', function ($routeProvider, $locationProvider, $mdThemingProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/partials/landing.html',
      controller: 'LandingController'
    })
    .when('/challenges', {
      templateUrl: '/partials/challenges-tabs.html',
      controller: 'ChallengesController'
    }) 
    .when('/page-not-found', {
      templateUrl: '/partials/error.html'
    })
    .otherwise({
      redirectTo: '/page-not-found'
    });
  $locationProvider.html5Mode(true);

  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('indigo')
    .warnPalette('deep-orange');

  $mdThemingProvider.theme('buttonTheme');
  
}]);
