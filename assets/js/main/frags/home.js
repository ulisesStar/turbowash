var app = angular.module('myapp');

app.controller('homeCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams) {



    $scope.video = {
        id: 'hM6YAE6QVro'
    };

    $scope.slider1 = [

        { imagen: 'img/sliderhome/12.jpg'},
        { imagen: 'img/sliderhome/22.jpg'}

    ];

    $scope.slider2 = [

        { imagen: 'img/sliderhome/1.jpg'},
        { imagen: 'img/sliderhome/2.jpg'},
        { imagen: 'img/sliderhome/3.jpg'},
        { imagen: 'img/sliderhome/4.jpg'}

    ];

});
