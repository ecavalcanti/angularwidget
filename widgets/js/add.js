'use strict';

angular.module('add', ['angularWidget'])
.controller('AddCtrl', function ($scope, MathService) {
    $scope.add = function () {
        $scope.answer = MathService.add($scope.number1, $scope.number2);
    }
});
