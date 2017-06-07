'use strict';

/**
 * @ngdoc function
 * @name routingQuizApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the routingQuizApp
 */
angular.module('routingQuizApp')
  .controller('MenuCtrl', ['ordermanager',function (finalorder) {
  	var vm=this
  	this.menulist=finalorder.menulist;
	this.m=finalorder.amount;
  	
  	this.theOrder=finalorder.order; 
  	/*this.increase=function(content,name){
  		var c=content['category'];
  		finalOrder.itemtally(c,name);
  	}
  	*/
  	this.increase = function(name){
    	if(name in finalorder.menulist['South Indian']){
    		finalorder.itemtally('South Indian',name);
    	}
    	else{
    		finalorder.itemtally('North Indian',name);
    	}
    	
    }


    this.decrease = function(name){
    	if(name in finalorder.menulist['South Indian']){
    		finalorder.decrementing('South Indian',name);
    	}
    	else{
    		finalorder.decrementing('North Indian',name);
    	}
    	
    }

    this.chooseitem = function(category,name){
    	
    	finalorder.itemtally(category,name);
    }
    this.decrement = function(category,name){
    	
    	finalorder.decrementing(category,name);
    }
  }]);
