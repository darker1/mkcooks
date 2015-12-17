'use strict';

angular.module('mkcooksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('meal', {
        url: '/meal/{id}',
        templateUrl: 'app/meal/meal.html',
        controller: 'MealCtrl'
      });
  });