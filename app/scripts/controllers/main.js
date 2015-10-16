'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
        localStorageService.set('todos', $scope.todos);
    }, true);
    
    // TODO: add error checking for duplicate items
    $scope.addTodo = function () {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
    };

    // TODO: add error checking
    $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
    };
});
