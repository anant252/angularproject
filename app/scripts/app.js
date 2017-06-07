'use strict';

/**
 * @ngdoc overview
 * @name routingQuizApp
 * @description
 * # routingQuizApp
 *
 * Main module of the application.
 */
angular
  .module('routingQuizApp',['ui.router']).config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  	$urlRouterProvider.otherwise('/');
  	$stateProvider.state('home',{
  		url:'/',
  		templateUrl:'views/trial.html',
      controller:'MenuCtrl as menu'
  	})
  	.state('page2',{
  		url:'/order',
  		templateUrl:'views/page3.html',
  		controller:'FormcontrollerCtrl as ctrl'
  	})
    .state('ordered',{
      url:'/ordered',
      templateUrl:'views/thank.html',
      controller:'DetailsCtrl as information'
    })
  	
  	;

  }]);
