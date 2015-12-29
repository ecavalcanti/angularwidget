'use strict';

angular.module('myip', ['angularWidget'])
.controller('MyIPCtrl', function ($scope, $http) {
    $scope.myip = "carregando...";
    $http.get('http://jsonip.com/')
    .then(function(data){
        $scope.myip = data.data.ip;
    }, function (error) {
        $scope.myip = error;
    });
});
