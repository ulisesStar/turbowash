var app = angular.module('myapp');

app.controller('contactoCtrl', function($scope, alertas, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Contacto) {

    $scope.section = 'contacto';
    //
    // function crear(contacto){
    //     console.log(contacto);
    //     Contacto.crear(contacto).then(function(data){
    //         $scope.$digest();
    //         console.log(data.data.nombre);
    //         alertas.mostrarToastEstandar('Se Creo un contacto');
    //     })
    // }

    $scope.listo = false;

	$scope.crearContacto = function(contacto){
		console.log(contacto);
		Contacto.crear(contacto).then(res => {
			alertas.mostrarToastEstandar('Se envio el mensaje')
            $scope.listo = true;
			delete $scope.contacto
		})
	}




});
