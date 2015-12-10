var app = angular.module('javaLamp', ['ui.ace', 'ngMaterial', 'ngMessages', 'ngRoute' ])

app.constant('API_URL', 'http://localhost:3000');

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

// app.run(['$anchorScroll', function($anchorScroll) {
//   // $anchorScroll.yOffset = 400;   // always scroll by 50 extra pixels
// }])

// app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
//   $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
//     $location.hash();
//     $anchorScroll();
//   });
// });



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
    scope: {},
    template: 
    '<div id="editor">function foo() {\n\n}</div><script type="text/javascript" src="/scripts/ace_editor.js">'
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

var customPrimary = {
        '50': '#5e5aae',
        '100': '#524fa0',
        '200': '#49468f',
        '300': '#403e7e',
        '400': '#38356d',
        '500': '#2F2D5C',
        '600': '#26254b',
        '700': '#1e1c3a',
        '800': '#151429',
        '900': '#0c0b17',
        'A100': '#6e6bb7',
        'A200': '#7f7cbf',
        'A400': '#908ec7',
        'A700': '#030306'
    };
    // $mdThemingProvider
    //     .definePalette('customPrimary', 
    //                     customPrimary);

    var customAccent = {
        '50': '#f7f5f8',
        '100': '#ebe7ed',
        '200': '#ded8e2',
        '300': '#d2c9d8',
        '400': '#c5bbcd',
        '500': '#B9ACC2',
        '600': '#ad9db7',
        '700': '#a08fac',
        '800': '#9480a2',
        '900': '#877197',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#7b6589'
    };
    // $mdThemingProvider
    //     .definePalette('customAccent', 
    //                     customAccent);

    var customWarn = {
        '50': '#ccae7a',
        '100': '#c5a367',
        '200': '#be9855',
        '300': '#b48c45',
        '400': '#a17d3e',
        '500': '#8F6F37',
        '600': '#7d6130',
        '700': '#6a5229',
        '800': '#584422',
        '900': '#45361b',
        'A100': '#d3b98c',
        'A200': '#dac49f',
        'A400': '#e1d0b1',
        'A700': '#332814'
    };
    // $mdThemingProvider
    //     .definePalette('customWarn', 
    //                     customWarn);

    var customBackground = {
        '50': '#aaa18b',
        '100': '#9f957d',
        '200': '#958a6e',
        '300': '#867c63',
        '400': '#786f58',
        '500': '#69614D',
        '600': '#5a5342',
        '700': '#4c4637',
        '800': '#3d382d',
        '900': '#2e2b22',
        'A100': '#b5ad9a',
        'A200': '#c0b9a9',
        'A400': '#cbc5b7',
        'A700': '#1f1d17'
    };
   //  $mdThemingProvider
   //      .definePalette('customBackground', 
   //                      customBackground);

   // $mdThemingProvider.theme('default')
   //     .primaryPalette('customPrimary')
   //     .accentPalette('customAccent')
   //     .warnPalette('customWarn')
   //     .backgroundPalette('customBackground');
  
}]);

app.controller('ChallengesController', function($q, $scope, $location, $anchorScroll, DockerFactory) {
  // $scope.isActive = true;

  $scope.questions = [
    {title: 'Is Unique',
    questionText: 'Implement an algorithm that tests if each item in a string is unique.',
    testSuite: 'test file',
    testText: 'TEST WILL GO HERE',
    answers: ['answer1', 'answer2']},
    {title: 'Greatest Product',
    questionText: 'Implement an algorithm to determine the greatest product between two elements in an array.',
    testSuite: 'test file',
    testText: 'TEST WILL GO HERE ALSO',
    answers: ['answer3', 'answer4']},
    {title: 'Cats Everywhere',
    questionText: 'Tell us, why are there so many cats everywhere?',
    testSuite: 'test file',
    testText: 'TEST WILL GO HERE ALSO ALSO',
    answers: ['answer5', 'answer6']}
    ];

    $scope.question_index = 0;

    $scope.next = function() {
      if ($scope.question_index >= $scope.questions.length-1) {
        $scope.question_index = 0;
      } else {
        $scope.question_index++;
      }
    };

    $scope.previous = function() {
      if ($scope.question_index == 0) {
        $scope.question_index = $scope.questions.length-1;
      } else {
        $scope.question_index--;
      }
    }

    $scope.aceLoaded = function(_editor) {
      console.log(_editor.getSession());
    }

    $scope.aceChanged = function(e) {
      $scope.currentEditorValue = e[1].session.doc.$lines.join('\n');
      console.log($scope.currentEditorValue);
    }

    $scope.submit = function() {
      console.log('submitted');
      DockerFactory.dockerPost($scope.currentEditorValue)
        .then(function success(response){
          $scope.resultData = response.data;
        })
    }

  // $scope.$on('$locationChangeStart', function(ev) {
  //   ev.preventDefault();
  // });

  $scope.showTest = false;
  $scope.scrollTo = function(id, event) {
    $scope.showTest = !$scope.showTest;
    // event.preventDefault();
    // event.stopPropagation();
    // $anchorScroll.yOffset = 400;
    $location.hash(id);
    $anchorScroll();
    $location.hash(null);
    // if ($scope.showTest) {
      // $scope.anchorId = id;
      // var old = $location.hash();
      // $location.hash(id);
      // console.log($location.hash())
      // $location.hash(old); 
    // }
    // $scope.apply();
  };
});

app.factory('DockerFactory', function Docker($q, $http, API_URL) {
  return {
    dockerPost: dockerPost
  }
  function dockerPost(editorValue) {
    return $http.post(API_URL + '/docker', {"data": editorValue})
  }
});
