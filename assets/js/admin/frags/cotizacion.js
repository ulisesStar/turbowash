var app = angular.module('myapp');

app.controller('cotizacionCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Cotizador) {

    Cotizador.obtener().then(res => {
        $scope.cotizaciones = res.data;
        $scope.$digest();
        console.log(res.data)
    })

    $scope.CotizacionDialog = function(id) {
        $mdDialog.show({
            templateUrl: '/partials/infoCotizaciones',
            parent: angular.element(document.body),
            bindToController: true,
            preserveScope: true,
            fullscreen: $scope.customFullscreen,
            controller: function($scope, $mdDialog, alertas, $state, Cotizador){
                Cotizador.one(id).then(function(res) {
                    $scope.cotizacion = res.data;
                    $scope.$digest();
                })
                $scope.close = function() {
                    $mdDialog.hide();
                }
            }
        })
    };

});
