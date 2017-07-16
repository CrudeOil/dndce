angular.module('DNDCE')
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'components/templates/creator.html',
        controller: 'creatorController',
        controllerAs: '$ctrl'
    })
    .otherwise({templateUrl: 'components/templates/404.html'});
}]);