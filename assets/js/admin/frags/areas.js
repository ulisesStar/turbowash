var app = angular.module('myapp');

app.controller('areasCtrl', function($scope, $rootScope, $http, alertas, mdDialog, $mdDialog, $state, Areas) {

    Areas.obtener().then(function(data) {
        $scope.areas = data.data;
        $scope.$digest();
    })

    $scope.AreasDialog = function(ev) {
        $mdDialog.show({
            templateUrl: '/partials/nuevaArea',
            parent: angular.element(document.body),
            bindToController: true,
            preserveScope: true,
            fullscreen: $scope.customFullscreen,
            controller: function($scope, $mdDialog, Areas, alertas, $state){

                $scope.submit = function(areas){

                    Areas.crear(areas).then(res => {

                        $state.go('infoAreas', { id : res.data});
                        $mdDialog.hide();
					})
                    alertas.mostrarToastEstandar("Area editada correctamente");
                }

                $scope.close = function() {
                    $mdDialog.hide();
                }
            }
        })
    };

    $scope.eliminarArea = function(area, $index) {
		ventana = $mdDialog.confirm().title('¿Seguro que quieres eliminarlo?').textContent('Para eliminar de forma permanente dale en aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true);

		$mdDialog.show(ventana).then(function() {

			Areas.eliminar(area.id).then(function(res) {
				$scope.areas.splice($index, 1)
				alertas.mostrarToastEstandar("Area eliminiada correctamente");
			})

		}, function() {});
	}


});
