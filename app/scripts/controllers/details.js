'use strict';

/**
 * @ngdoc function
 * @name routingQuizApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the routingQuizApp
 */
angular.module('routingQuizApp')
  .controller('DetailsCtrl',['profile','ordermanager',function (info,order) {
  	this.bio=info.profiler;
  	this.tally=order.amount;
  	

    
  }]);
