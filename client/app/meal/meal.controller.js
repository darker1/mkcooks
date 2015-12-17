'use strict';

angular.module('mkcooksApp')
  .controller('MealCtrl', ['$scope', '$stateParams','$http', function ($scope, $stateParams, $http) {
    $scope.message = $stateParams.id;

        $http.get('/api/meals/' + $stateParams.id).success(function(meal) {
    	$scope.meal = meal;
      	socket.syncUpdates('meal', $scope.meal);
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('meal');
    });
  }]);
