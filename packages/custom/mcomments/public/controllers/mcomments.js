'use strict';

angular.module('mean.mcomments').controller('McommentsController', ['$scope', 'Global', 'Mcomments',
  function($scope, Global, Mcomments) {
    $scope.global = Global;
    $scope.package = {
      name: 'mcomments'
    };
  }
]);
