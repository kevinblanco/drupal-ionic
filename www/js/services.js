/**
 * Application services module
 */
var app_services = angular.module('drupalionic.services', ['drupalionic.configuration']);




/**
 * Account factory that holds logic for login, logout and account create
 * It uses $q to handle promises and $http for requess
 * It inyects the URLs from the config.js file
 */
app_services.factory('Account', function($http, $q, drupal_instance, api_endpoint) {


 return {

     /*
      * Login against the Drupal Service API
      * @param  {String} username
      * @param  {String} password
      * @return {Promise}
      */
      login : function( username, password ){

          
          var defer = $q.defer();

          $http({
            method        :'POST', 
            url           : drupal_instance + api_endpoint + 'user/login',
            dataType      : 'json',
            crossDomain   : true,
            data          : 'username=' + username + '&password=' + password,
            headers       : {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          })

          .success(function(data, status, headers, config){
              defer.resolve(data);
          })

          .error(function(data, status, headers, config){
              defer.reject(data);
          });

          return defer.promise;
      },




      /*
      * Create an account against the Drupal Service API
      * @param  {String} username
      * @param  {String} email
      * @param  {String} password
      * @return {Promise}
      */
      createAccount : function(username, email, password){

          var defer = $q.defer();

          $http({
            method        :'POST', 
            url           : drupal_instance + api_endpoint + 'user/register',
            dataType      : 'json',
            crossDomain   : true,
            data          : {
              name : username,
              pass : password,
              mail : email
            },
            headers       : {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          })

          .success(function(data, status, headers, config){
              defer.resolve(data);
          })

          .error(function(data, status, headers, config){
              defer.reject(data);
          });

          return defer.promise;
      }

 }

});



/**
 * Auth factory that holds logic and data regarding the user across the app
 */
app_services.factory( 'Auth', function($window) {

  var currentUser;

  return {

    //Set the user data to use accross the app, this is saved when loggedIn
    setUserData: function(key,value) { 
      $window.localStorage[key] = value;
    },

    //Get the currentUser data
    getUserData: function(key) { 
      return $window.localStorage[key] || '{}';
    },

    //Helper function to know if the user is loggedIn or not
    isLoggedIn: function() {

      currentUser = $window.localStorage['user'];

      if( (typeof currentUser === "object") && (currentUser !== null) ){
          return true;
      }else{
        return false;
      }

    }
  };
});
