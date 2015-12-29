'use strict';

angular.module('event', ['angularWidget'])
.controller('EventCtrl', function ($scope) {
    $scope.launchEvent = function () {
        $scope.$emit('alertEvent', 'Data to send');
    }
});
