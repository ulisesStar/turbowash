var app = angular.module('myapp');

app.controller('multimediaCtrl', function($scope, $rootScope, $http, mdDialog, $mdDialog, $state, Multimedia, Areas) {

    $scope.section = 'multimedia';


    Areas.obtener().then(res => {
        $scope.areas = res.data;
        console.log($scope.data);
    })

    Multimedia.obtener().then(function(data) {
        $scope.multimedias = data.data;
        console.log(data.data);
        $scope.$digest();
    })

    $scope.submit = function(imagen){

        Multimedia.crear(imagen).then(res => {
            alertas.mostrarToastEstandar("La imagenes se ha guardado correctamente");
        })
        
    }


    $scope.eliminarMultimedia = function(multimedia, $index) {
           console.log($index);
           ventana = $mdDialog.confirm()
               .title('¿Seguro que quieres eliminar la multimedia?')
               .textContent('Para eliminar de forma permanente dale en aceptar')
               .ok('Aceptar')
               .cancel('Cerrar')
               .clickOutsideToClose(true);

           $mdDialog.show(ventana).then(function() {

               Multimedia.eliminar(multimedia.id).then(function(data) {
                   $scope.multimedias.splice($index, 1);
                   $scope.$digest();
               })

           }, function() {

           });
       }



});
