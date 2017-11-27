var app = angular.module('myapp');

app.controller('infoContactoCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams) {


    if ($stateParams.id === null) {

        $state.go('contacto');

    } else {

        var id = $stateParams.id;
        console.log(id)

        // Areas.one($stateParams.id).then(res => {
        //     $scope.area = res.data;
        //     console.log($scope.area);
        //     alertas.mostrarToastEstandar("Se Obtuvo El Area");
        //     $scope.$digest();
        // })
    }


});
