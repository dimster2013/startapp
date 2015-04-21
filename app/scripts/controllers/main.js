'use strict';

/**
 * @ngdoc function
 * @name yomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yomanApp
 */
angular.module('yomanApp')
  .controller('MainCtrl', function ($scope,_) {

    $scope.hoer=null;
    var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    $scope.hoer = _.pluck(stooges, 'name');
  });
