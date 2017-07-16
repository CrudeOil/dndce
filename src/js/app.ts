angular.module('DNDCE')
.config(['$stateProvider', function($stateProvider) {
    $stateProvider
    .state('root', {
        url: '',
        templateUrl: 'components/templates/intro.html'
    })
    .state('intro', {
        url: '/intro',
        templateUrl: 'components/templates/intro.html'
    })
    .state('race', {
        url: '/race:selected',
        templateUrl: 'components/templates/race.html',
        controller: 'raceController'
    })
}]);