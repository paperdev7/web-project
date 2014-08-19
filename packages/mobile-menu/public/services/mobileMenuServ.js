'use strict';

angular.module('mean.mobile-menu').factory('MobileMenu', ['$resource',
  function($resource) {
    return $resource('/mobileMenu/:_id',{_id:'@_id'}, 
     {
      get   : { method: 'GET' },
      save  : { method: 'POST' },
      update: { method: 'PUT' }
    });
  }
]);
