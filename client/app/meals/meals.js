'use strict';

angular.module('mkcooksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('meals', {
        url: '/meals',
        templateUrl: 'app/meals/meals.html',
        controller: 'MealsCtrl'
      });
  });