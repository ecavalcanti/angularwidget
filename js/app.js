angular.module('myApp',  ['angularWidget']);

angular.module('myApp').config(function(widgetsProvider) {
    widgetsProvider.setManifestGenerator([function() {
        return function(name) {
            return {
                module: name,
                html:'widgets/' + name + '.html',
                files:[
                    'js/controllers' + name + '.html'
                ]
            };
        };
    }]);
});
