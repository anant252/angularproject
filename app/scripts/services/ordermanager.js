'use strict';

/**
 * @ngdoc service
 * @name routingQuizApp.ordermanager
 * @description
 * # ordermanager
 * Service in the routingQuizApp.
 */
angular.module('routingQuizApp')
  .service('ordermanager', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
     var vm=this;
    this.order={};

    this.amount={5:0,6:0};

   	
    this.menulist={
    	'South Indian':{
    		'Idly':{
    			
    			'price':40,
    			'quantity':0
    		},
    		'Vada':{
    			
    			'price':50,
    			'quantity':0
    		},
    		'Masala Dosa':{
    			
    			'price':35,
    			'quantity':0
    		}

    	},

    	'North Indian':{
    		'Samosa':{
    			
    			'price':30,
    			'quantity':0
    		},
    		'roti':{
    			
    			'price':60,
    			'quantity':0
    		},
            'Masala Paratha':{
                
                'price':10,
                'quantity':0
            }

    	}
    	
    }


     
    this.itemtally=function(category,name){
    	vm.menulist[category][name]['quantity']+=1;
    	var q=vm.menulist[category][name]['quantity']
    	var c=category;
    	var p1=vm.menulist[category][name]['price']
    	var p=vm.menulist[category][name]['price']*q;
    	vm.order[name]={'quantity':q,'amount':p,'category':category};
    	vm.amount[5]+=p1;
    	vm.amount[6]+=1;
    	
    	//vm.menulist[category][name]['price']+=1;
    	//vm.order={finalprice: menulist[category][name]['price'], quantity: menulist[category][name]['quantity']}
    }
    this.decrementing=function(category,name){
    	var p1=vm.menulist[category][name]['price']
    	if(vm.menulist[category][name]['quantity']==1){
    		var n =name;
    		vm.menulist[category][name]['quantity']-=1;
    		delete vm.order[n];
    		vm.amount[5]-=p1;
    		vm.amount[6]-=1;
    	}
    	if(vm.menulist[category][name]['quantity']>1){
    		vm.menulist[category][name]['quantity']-=1;
    		var q=vm.menulist[category][name]['quantity']
    		var c=category;
    		var p=vm.menulist[category][name]['price']*q;
    		vm.order[name]={'quantity':q,'amount':p,'category':category};
    		vm.amount[5]-=p1;
    		vm.amount[6]-=1;
    	}
    	

    

    	//vm.menulist[category][name]['price']+=1;
    	//vm.order={finalprice: menulist[category][name]['price'], quantity: menulist[category][name]['quantity']}

    }




  });
