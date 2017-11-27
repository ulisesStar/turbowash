var app = angular.module('myapp');

app.controller('infoAreasCtrl', function($scope, alertas, $state, $rootScope, $stateParams, $http, mdDialog, $mdDialog, Areas, Servicios, Herramientas, Paquetes) {

    $scope.section = 'Areas';

    console.log($stateParams)

    if ($stateParams.id === null) {

        $state.go('areas');

    } else {

        var id = $stateParams.id;

        Areas.one($stateParams.id).then(res => {
            $scope.area = res.data;
            console.log($scope.area);
            alertas.mostrarToastEstandar("Se Obtuvo El Area");
            $scope.$digest();
        })
    }

    $scope.submit = function(areas) {

        Areas.editar(areas).then(function(res) {
            alertas.mostrarToastEstandar("Area editada correctamente");
            console.log(res.data);
        })
    }

    $scope.focusServicio = function(servicio){
        servicio ? ($scope.servicio = servicio) : ($scope.servicio = {});
    }

    $scope.submitServicio = function(servicio){
        servicio.id_area = id;
        servicio.id === undefined ? (
            Servicios.crear(servicio).then(res => {

                $scope.area.servicios.push(res.data);
                $scope.$digest();
                alertas.mostrarToastEstandar("Servicio creado");
                delete $scope.servicio;
            })
        ) : (
            Servicios.editar(servicio).then(res => {
                alertas.mostrarToastEstandar("Servicio editado");
                delete $scope.servicio;
            })
        );
    }

    $scope.focusHerramienta = function(herramienta){
        herramienta ? ($scope.herramienta = herramienta) : ($scope.herramienta = {});
    }

    $scope.submitHerramienta = function(herramienta){
        herramienta.id_areas = id;
        herramienta.id === undefined ? (
            Herramientas.crear(herramienta).then(res => {
                $scope.$digest();
                $scope.area.herramientas.push(res.data);
                alertas.mostrarToastEstandar("Herramienta creado");
                delete $scope.herramienta;
            })
        ) : (
            Herramientas.editar(herramienta).then(res => {
                alertas.mostrarToastEstandar("Herramienta editado");
                delete $scope.herramienta;
            })
        );
    }

    $scope.focusPaquete = function(paquete){
        paquete ? ( $scope.paquete = paquete ) : ( $scope.paquete = {} );
    }

    $scope.submitPaquete = function(paquete){
        paquete.id_area = id;
        paquete.id === undefined ? (
            Paquetes.crear(paquete).then(res => {
                $scope.$digest();
                $scope.paquete = res.data;
                $scope.paquete.items = [];
                alertas.mostrarToastEstandar("Paquete creado");
            })
        ) : (
            Paquetes.editar(paquete).then(res => {
                alertas.mostrarToastEstandar("Paquete editado");
            })
        );
    }

    $scope.focusItems = function(item){
        item ? ($scope.item = item) : ($scope.item = {});
    }

    $scope.submitItems = function(item){
        item.id_paquetes = $scope.paquete.id;
        item.id === undefined ? (
            Paquetes.crearItem(item).then(res => {
                $scope.$digest();
                $scope.paquete.items.push(res.data);
                alertas.mostrarToastEstandar("Item creado");
                delete $scope.item;
            })
        ) : (
            Paquetes.editarItem(item).then(res => {
                alertas.mostrarToastEstandar("Item editado");
                delete $scope.item;
            })
        );
    }

    $scope.salirEdicion = function(){
        delete $scope.paquete;
        llamarpaquetes()
    }

    function llamarpaquetes(){

        Paquetes.paqueteXarea(id).then(res => {

            $scope.areas.paquetes = res.data;
            $scope.$digest();

        })

    }

});
