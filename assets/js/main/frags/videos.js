var app = angular.module('myapp');

app.controller('videosCtrl', function($scope, alertas, $state, $stateParams, Areas) {

    $scope.section = 'videos';

    Areas.obtener().then(res => {
        $scope.areas = res.data;
        $scope.$digest();
    })

});
