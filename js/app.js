angular.module('myApp',  ['angularWidget'])

.config(function(widgetsProvider) {
    widgetsProvider.setManifestGenerator([function() {
        return function(name) {
            return {
                module: name,
                html:'widgets/views/' + name + '.html',
                files:[
                    'widgets/js/' + name + '.js'
                ]
            };
        };
    }]);
    widgetsProvider.addServiceToShare('MathService');
    widgetsProvider.addEventToForward('alertEvent');

})

.service('MathService', function() {
    this.add = function(a, b) { return a + b };

    this.subtract = function(a, b) { return a - b };

    this.multiply = function(a, b) { return a * b };

    this.divide = function(a, b) { return a / b };
})

.controller('MainCtrl', function($scope) {
    $scope.$on('alertEvent', function(e, data) {
        alert(data);
    });
});
