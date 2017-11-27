var app = angular.module('myapp');

app.controller('sucursalCtrl', function($scope, $rootScope, $http, mdDialog, $mdDialog, Sucursal) {

    $scope.section = 'Sucursal';
    $scope.seleccion = 0;
    $scope.formulario = true;

    Sucursal.obtener().then(function(data) {
        $scope.sucursales = data.data;
        $scope.$digest();
    })
    $scope.abrirform = function() {
        $scope.seleccion = 0;
        $scope.sucursal = {};
        $scope.formulario = false;
    }

    $scope.cerrarForm = function() {
        $scope.formulario = true;
    }

    $scope.seleccionar = function(sucursal) {
        $scope.seleccion = sucursal.id;
        $scope.sucursal = sucursal;
        console.log($scope.seleccion);
        $scope.formulario = false;
    }

    $scope.submitSucursal = function(sucursal) {

        $scope.seleccion == 0 ? crear(sucursal) : update(sucursal);
    }

    function crear(sucursal){
        console.log(sucursal);
        Sucursal.crear(sucursal).then(function(data) {
            $scope.$digest();
            console.log(data.data.direccion);
            $scope.sucursales.push(data.data.direccion);
            $scope.formulario = true;
        })

    }

    function update(sucursal) {
        console.log('editando')
        Sucursal.editar(sucursal).then(function(data) {
            console.log(data);
            $scope.formulario = true;
        })
    }

    $scope.eliminarSucursal = function(sucursal, $index) {
        console.log($index);
        ventana = $mdDialog.confirm()
            .title('¿Seguro que quieres eliminar la sucursal?')
            .textContent('Para eliminar de forma permanente dale en aceptar')
            .ok('Aceptar')
            .cancel('Cerrar')
            .clickOutsideToClose(true);

        $mdDialog.show(ventana).then(function() {

            Sucursal.eliminar(sucursal.id).then(function(data) {
                $scope.sucursales.splice($index, 1)
                $scope.$digest();
            })
        }, function() {

        });
    }
});
