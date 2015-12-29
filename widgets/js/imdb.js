'use strict';

angular.module('imdb', ['angularWidget'])
.controller('ImdbCtrl', function ($scope, $http, widgetConfig) {
    var title = widgetConfig.getOptions().title;
    $http.get('http://www.omdbapi.com/?t=' + title + '&y=&plot=short&r=json')
    .then(function(data){
        $scope.movie = data.data;
    }, function (error) {
        console.log(error);
    });
});
