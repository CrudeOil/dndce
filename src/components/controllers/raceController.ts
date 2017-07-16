angular.module('DNDCE')
.controller('raceController', function ($rootScope, $scope, $http) {
    $http.get('config/races.json').then((response) => {
        $scope.races = response.data;
    })
})