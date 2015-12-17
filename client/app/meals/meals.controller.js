'use strict';

angular.module('mkcooksApp')
  .controller('MealsCtrl',['$scope', '$http', 'socket', '$showdown', '$sce', function ($scope, $http, socket, $showdown, $sce) {
    $scope.possibleIngredients = $http.get('/assets/json/ingredients.json').then(function(res)
        {
          return res.data.map(function(i){return i.name;});
        });

    $http.get('/api/meals').success(function(meals) {
        setMeals(meals);
    });

    $scope.searchByIngredient = function(item){
      if(!item){return;}
      $http.get('/api/meals', {params:{ingredient:item}}).success(function(meals) {
        setMeals(meals);
      });      
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('meals');
    });

    var setMeals = function(meals){
        $scope.meals = meals;
        socket.syncUpdates('meals', $scope.meals);
        sanitize();
    };

    var sanitizeDescriptions = function(){
      	_.forEach($scope.meals, function(m){m.shortDescription = m.description.substring(0,300);})
    };
    var shortenAuthors = function(){
    	 _.forEach($scope.meals, function(m){m.shortAuthor = _.map(_.words(m.author), function(s){return _.capitalize(s.charAt(0));}).join('');});
    };
    var sanitize = function(){
    	sanitizeDescriptions();
    	shortenAuthors();
    };
  }]);
