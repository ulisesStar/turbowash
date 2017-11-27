var app = angular.module('myapp');

app.controller('sucursalCtrl', function($scope, alertas, $state, $stateParams, Sucursal) {

    $scope.section = 'sucursal';
    Sucursal.obtener().then(function(data) {
        $scope.sucursales = data.data;
        $scope.$digest();
        alertas.mostrarToastEstandar('Se obtuvieron las Sucursales');
    })
});
