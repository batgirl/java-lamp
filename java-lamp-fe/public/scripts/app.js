var app = angular.module('javaLamp', ['ui.ace', 'ngMaterial', 'ngMessages', 'ngRoute' ], function config($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
});

app.constant('API_URL', 'http://localhost:3000');
app.constant('API_URL2', 'http://159.203.102.106');

app.controller('LoginRegisterModalController', function($scope, UserFactory) {
  $scope.login = function(user) {
    UserFactory.login(user).then(function success(response) {
      console.log(response);
      console.log('successful log in');
    }, handleError);
  }
  $scope.register = function(user) {
    UserFactory.register(user).then(function success(response) {
      console.log(response);
      console.log('successful registration');
    }, handleError);
  }
  function handleError(response) {
    alert('Error: ' + response.data);
  }
});

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

app.controller('ChallengesController', function($q, $scope, $location, $anchorScroll, DockerFactory, QuestionFactory) {

    QuestionFactory.questions()
      .then(function success(response) {
        console.log("response: ", response.data.rows)
        $scope.questions = response.data.rows;
      });
      
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
      _editor.getSession().setUseWorker(false);
      var sampleCodeArray = $scope.questions[$scope.question_index].samplecode.split('\n');
      for (var i = 0; i < sampleCodeArray.length; i++) {
        _editor.renderer.session.doc.$lines[i] = sampleCodeArray[i];
      }
      _editor.setOptions({
        fontSize: 16
      });
      $scope.currentEditorValue = _editor.getSession().doc.$lines.join('\n');
    }

    $scope.aceChanged = function(e) {
      $scope.currentEditorValue = e[1].session.doc.$lines.join('\n');
      console.log($scope.currentEditorValue);
    }

    $scope.resultLoadValue = 0;

    $scope.submit = function() {
      console.log('submitted');
      setInterval(function() {
        $scope.resultLoadValue += 15;
      }, 0);
      $scope.resultLoadValue = 0;
      DockerFactory.dockerPost($scope.currentEditorValue)
        .then(function success(response){
          setTimeout(function() {
              document.getElementById('output-box').scrollIntoView();  
            }, 0);
          $scope.resultData = response.data;
        })
    }

  $scope.showTest = false;
  $scope.scrollToTest = function() {
    $scope.showTest = !$scope.showTest;
    if ($scope.showTest) {
      setTimeout(function() {
        document.getElementById('test-box').scrollIntoView();  
      }, 0);
    }
  };  

  $scope.showAnswers = false;
  $scope.scrollToAnswers = function() {
    $scope.showAnswers = !$scope.showAnswers;
    if ($scope.showAnswers) {
      setTimeout(function() {
        document.getElementById('answer-box').scrollIntoView();  
      }, 0);
    }
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

//JWT AUTH FACTORIES
app.factory('UserFactory', function UserFactory($http, $q, API_URL2, AuthTokenFactory) {
  'use strict';
  return {
    register: register,
    login: login,
    logout: logout
    // getUser: getUser
  };

  function register(user){
    return $http.post(API_URL2 + '/register',
    {
      "user": user
    })
    .then(function success(response) {
      AuthTokenFactory.setToken(response.data.token);
      return response;
    });
  }

  function login(user){
    return $http.post(API_URL2 + '/login',
    {
      "user": user
    })
    .then(function success(response) {
      AuthTokenFactory.setToken(response.data.token);
      return response;
    });
  }
  

  function logout() {
    AuthTokenFactory.setToken();
    return null;
  }

  // function getUser() {
  //   if(AuthTokenFactory.getToken()) {
  //     return $http.get(API_URL2 + '/me')
  //   } else {
  //     return $q.reject({ data: 'client has no authorization '})
  //   }
  // }
})
app.factory('AuthTokenFactory', function AuthTokenFactory($window) {
  'use strict';
  var store = $window.localStorage;
  var key = 'auth_token';
  return {
    getToken: getToken,
    setToken: setToken
  };

  function getToken() {
    return store.getItem(key);
  }

  function setToken(token){
    if (token) {
      store.setItem(key, token);
    } else {
      store.removeItem(key);
    }
  }
})
app.factory('AuthInterceptor', function AuthInterceptor(AuthTokenFactory) {
  return {
    request: addToken
  };

  function addToken(config) {
    var token = AuthTokenFactory.getToken();
    if(token) {
      config.headers = config.headers || {};
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  }
})
//END JWT AUTH FACTORIES

app.factory('QuestionFactory', function QuestionFactory($q, $http, API_URL2) {
  return {
    questions: getQuestions
  };
  function getQuestions() {
    return $http.get(API_URL2 + '/questions')
  }
});
