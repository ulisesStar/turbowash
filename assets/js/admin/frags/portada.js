var app = angular.module('myapp');

app.controller('portadaCtrl', function($scope, $rootScope, $http, mdDialog, $mdDialog, $state, Portada, Areas, alertas) {

    $scope.section = 'Portada';

    Areas.obtener().then(res => {
        $scope.areas = res.data;
    })

    $scope.submit = function(imagen){


        Portada.crear(imagen).then(res => {

            console.log(res)
            alertas.mostrarToastEstandar("La portada se ha guardado correctamente");

        })

    }
    Portada.obtener().then(function(data){
        $scope.portadas = data.data;
        $scope.$digest();
    })

    $scope.eliminarPortada = function(portada, $index) {
           console.log($index);
           ventana = $mdDialog.confirm()
               .title('¿Seguro que quieres eliminar la portada?')
               .textContent('Para eliminar de forma permanente dale en aceptar')
               .ok('Aceptar')
               .cancel('Cerrar')
               .clickOutsideToClose(true);

           $mdDialog.show(ventana).then(function() {

               Portada.eliminar(portada.id).then(function(data) {
                   $scope.portadas.splice($index, 1);
                   $scope.$digest();
               })

           }, function() {

           });
       }

});
