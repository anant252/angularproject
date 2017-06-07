'use strict';

/**
 * @ngdoc function
 * @name routingQuizApp.controller:TheorderCtrl
 * @description
 * # TheorderCtrl
 * Controller of the routingQuizApp
 */
angular.module('routingQuizApp')
  .controller('TheorderCtrl', ['ordermanager',function (finalOrder) {
  	this.m=finalOrder.amount;
  	
  	this.theOrder=finalOrder.order; 
  	/*this.increase=function(content,name){
  		var c=content['category'];
  		finalOrder.itemtally(c,name);
  	}
  	*/
  	this.increase = function(name){
    	if(name in finalOrder.menulist['southindian']){
    		finalOrder.itemtally('southindian',name);
    	}
    	else{
    		finalOrder.itemtally('northindian',name);
    	}
    	
    }


    this.decrease = function(name){
    	if(name in finalOrder.menulist['southindian']){
    		finalOrder.decrementing('southindian',name);
    	}
    	else{
    		finalOrder.decrementing('northindian',name);
    	}
    	
    }
  	
    //this.total= finalOrder.totaling();
  }]);