'use strict';

/**
 * @ngdoc service
 * @name routingQuizApp.profile
 * @description
 * # profile
 * Service in the routingQuizApp.
 */
angular.module('routingQuizApp')
  .service('profile', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self = this;
    self.profiler={'id':null,'username1':'','username2':'','address1':'','address2':'','city':'','state':'','pin':'','phone':''};
    self.profiler.id = Math.random().toString(36).slice(2);
    this.user={
    	'Fname':'John',
    	'Sname':'Doe',
    	'Address1':'g2,c block',
    	'Address2':'Hemadurga Aptms',
    	'City':'Lko',
    	'State':'Up',
    	'Pin':'228001',
    	'Phone':'9049059012',
    }
  });
