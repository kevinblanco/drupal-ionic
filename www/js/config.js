var app_config = angular.module('drupalionic.configuration', []);


/**
* REPLACE HERE YOUR DRUPAL INSTANCE URL AND API ENDPOINT DEFINED ON YOUR SERVICES
* drupal_instance could be 'http://dev-example.pantheon.io/'
* api_endpoint could be: api/v1/
**/
app_config.constant('drupal_instance','http://dev-dia-vida.pantheon.io/');
app_config.constant('api_endpoint','api/v1/');

