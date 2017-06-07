'use strict';

/**
 * @ngdoc function
 * @name routingQuizApp.controller:FormcontrollerCtrl
 * @description
 * # FormcontrollerCtrl
 * Controller of the routingQuizApp
 */
angular.module('routingQuizApp')
  .controller('FormcontrollerCtrl',['profile','ordermanager',function (infor,forder) {
    var self = this;
    self.user=infor.profiler;
    
    this.theOrder=forder.order; 
    this.m=forder.amount;
    /*self.submit = function() {
      if(self.user.id === null){
          self.user.id = self.id++;
          console.log('Saving New User', self.user);    
          
      }  
  	};
  	*/

  	this.increase = function(name){
    	if(name in forder.menulist['South Indian']){
    		forder.itemtally('South Indian',name);
    	}
    	else{
    		forder.itemtally('North Indian',name);
    	}
    	
    }


    this.decrease = function(name){
    	if(name in forder.menulist['South Indian']){
    		forder.decrementing('South Indian',name);
    	}
    	else{
    		forder.decrementing('North Indian',name);
    	}
    	
    }



  }]);
