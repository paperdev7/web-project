'use strict';

angular.module('mean.mobile-menu').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('mobileMenuList', {
      url: '/mobileMenu/list',
      templateUrl: 'mobile-menu/views/list.html',
      controller:'MobileMenuController'
    });
  }
]);
