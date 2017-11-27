var app = angular.module('myapp');

app.controller('contactoCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Contacto) {

    $scope.section = 'contacto';

    Contacto.obtener().then(function(data) {
        $scope.contactos = data.data;
        $scope.$digest();
    })

    $scope.ContactoDialog = function(id) {
        $mdDialog.show({
            templateUrl: '/partials/infoContacto',
            parent: angular.element(document.body),
            bindToController: true,
            preserveScope: true,
            fullscreen: $scope.customFullscreen,
            controller: function($scope, $mdDialog, alertas, $state, Contacto){
                Contacto.one(id).then(function(res) {
                    $scope.contacto = res.data;
                    $scope.$digest();
                })
                $scope.close = function() {
                    $mdDialog.hide();
                }
            }
        })
    };

});
