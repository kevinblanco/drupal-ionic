# Ionic Drupal Base App

This repository contains a base [Ionic](http://ionicframework.com/) application to use and cosume REST API from your [Drupal Services](https://www.drupal.org/project/services). 

## Features ##
This is intented to be a base, something you can extend but features you'll probably will use. 


* Login 
* Create Account
* Logout
* Saving user's data on localstorage after login
* Helper Auth methods
* Adding token and CSRF token to post HTTP request with interceptors.

## Configuring your Drupal Service ##

In order to communicate correctly with this base-app, you should follow this steps.

* Install and enable [Drupal Services module](https://www.drupal.org/project/services) on your Drupal Instance
* Create a new Service (remember the API endpoint).
* Enable application/json and application/x-www-form-urlencoded request parsers
* Enable json and jsonp as response formatters
* Enable user resources (login, logout, retrieve, create, update, register, token).

Some images for reference 

![image](http://kevinblanco.io/drupal-ionic/resources.png)

---

![image](http://kevinblanco.io/drupal-ionic/parsing.png)

### Configuring Ionic App ###

Clone or download this repository and go to `www/js/config.js` and add your Drupal URL and your service endpoint. Without this the app won't be able to work.
	
	/**
	* REPLACE HERE YOUR DRUPAL INSTANCE URL AND API ENDPOINT DEFINED ON YOUR SERVICES
	* drupal_instance could be 'http://dev-example.pantheon.io/'
	* api_endpoint could be: api/v1/
	**/
	app_config.constant('drupal_instance',' ');
	app_config.constant('api_endpoint',' ');
	

### Running the app ###
 
There're known issues with running any app that use CORS on the browser if the configuration is not correct (`Access-Control-Allow-Origin`  and  `Access-Control-Allow-Headers`). Running the app on the emulator (`$ ionic emulate ios`  - or - `$ ionic emulate android`) works just fine but, running it on the browser might not work (`$ sudo ionic serve`). 

* Install and enable[Drupal CORS module.](https://www.drupal.org/project/cors)
* Configure the Module `/admin/config/services/cors`

		api/*|* * *
		api/*|POST|Origin,X-Requested-With,Content-Type,Accept
		

