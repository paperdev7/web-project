'use strict';

angular.module('mean.mcomments').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('mcomments example page', {
      url: '/mcomments/example',
      templateUrl: 'mcomments/views/index.html'
    });
  }
]);
