var app_controllers = angular.module('drupalionic.controllers', ['drupalionic.services']);


/*
* Application Controller
*/
app_controllers.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPopup, Account) {

  // This will control the 'loading' gif on the view
  $scope.logging = false;

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {

    //Shows the 'loading' gif or message 
    $scope.logging = true;

    //Do Login using Service
    Account.login($scope.username, $scope.password).then(function(data){
        
        //This is the success function of the promise
        $scope.user = data;
        $scope.logging = false;
        alert("Successfully Logged in");
        
        //This is the failure funcion of the promise
    }, function(data){
        alert("There has been an error trying to login");

    });
  };
});




/*
* Account Controller
*/
app_controllers.controller('AccountCtrl', function($scope, Account) {
  

  $scope.createAccount = function(){
    
    //Create account using Service
    Account.createAccount($scope.user, $scope.mail, $scope.pass).then(function(data){
        
        //This is the success function of the promise
        $scope.user = data;
        $scope.logging = false;
        alert("Account created successfully");

        //Clean the form fields
        $scope.user = " ";
        $scope.mail = " ";
        $scope.pass = " ";
        
        
      //This is the failure funcion of the promise
    }, function(data){
       alert("There has been an error creating your account");

    });

  }

});

