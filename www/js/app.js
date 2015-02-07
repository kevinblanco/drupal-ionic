var app = angular.module('drupalionic', ['ionic', 'drupalionic.services', 'drupalionic.controllers']);


/* 
 * Ionic app and cordova run configuration
 * If you install any cordiva plugin configure it here
 * 
 */ 
app.run(function($ionicPlatform, $rootScope) {

  //Set initial loggedIn state
  $rootScope.isLoggedIn = false;

  $ionicPlatform.ready(function() {
    
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});



/* 
 * Ionic app configuration
 * Configure routes here
 * 
 */ 
app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  //Enable cross domain calls
  $httpProvider.defaults.useXDomain = true;

  //Remove the header used to identify ajax call  that would prevent CORS from working
  delete $httpProvider.defaults.headers.common['X-Requested-With'];


  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.create-account', {
    url: "/create-account",
    views: {
      'menuContent': {
        templateUrl: "templates/create-account.html",
        controller: 'AccountCtrl'
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/create-account');
});
