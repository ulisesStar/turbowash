var app = angular.module('myapp');

app.controller('llantasCtrl', function($scope, alertas, $location,  $anchorScroll, $state, $stateParams, Llantas, Cotizador, anchorSmoothScroll) {


    $location.hash('cotizador');
    anchorSmoothScroll.scrollTo('cotizador');


    $scope.video = {
        id: 'cEKeShOkufI'
    };


    $scope.listo = false;

    $scope.crearCotizacion = function(cotizacion){
        Cotizador.crear(cotizacion).then(res => {
            $scope.listo = true;
            console.log(res.data)
            alertas.mostrarToastEstandar('Se envio la cotización')
            delete $scope.cotizacion
        })
    }




});
