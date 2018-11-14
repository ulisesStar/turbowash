var app = angular.module('myapp');

app.controller('llantasCtrl', function($scope, $rootScope, $http, mdDialog, $mdDialog, Llantas) {
    $scope.section = 'Llantas';
    $scope.seleccion = 0;

    $scope.formulario = true;

    Llantas.obtener().then(function(res){
        $scope.llantas = res.data;
        console.log(res.data)
        $scope.$digest();
    })

    $scope.abrirForm = function(){
        $scope.seleccion = 0;
        $scope.llanta = {};
        $scope.formulario = false;
    }

    $scope.cerrarForm = function(){
        $scope.formulario = true;
    }

    $scope.seleccionar = function(llanta){
        $scope.seleccion = llanta.id;
        $scope.llanta = llanta;
        console.log($scope.seleccion);
        $scope.formulario = false;
    }

    $scope.imprimir = () => console.log($scope.llanta)

    $scope.submitLlanta = function(llanta){
        $scope.seleccion === 0 ? crear(llanta) : update(llanta);

    }

        function crear(llanta){
            console.log(llanta);
            Llantas.crear(llanta).then(function(data) {
                console.log(data);
                $scope.$digest();
                console.log(data.data.nombre);
                $scope.llantas.push(data.data.nombre);
                $scope.formulario = true;
            })

        }

      function update(llanta){
          console.log('estoy editando')
          Llantas.editar(llanta).then(function(data) {
               console.log(data);
               $scope.formulario = true;
           })
      }
      $scope.eliminarLlanta = function(llanta, $index) {
             console.log($index);
             ventana = $mdDialog.confirm()
                 .title('¿Seguro que quieres eliminar la llanta?')
                 .textContent('Para eliminar de forma permanente dale en aceptar')
                 .ok('Aceptar')
                 .cancel('Cerrar')
                 .clickOutsideToClose(true);

             $mdDialog.show(ventana).then(function() {

                 Llantas.eliminar(llanta.id).then(function(data) {
                     $scope.llantas.splice($index, 1);
                     $scope.$digest();
                 })

             }, function() {

             });
         }

});
