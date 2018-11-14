var app = angular.module('myapp');

app.controller('promocionesCtrl', function($scope, $rootScope, $http, mdDialog, $mdDialog, Promociones) {


    const self = this

    $scope.imagen = {}

    $scope.submit = function(promocion){
        promocion.id = 1;
        Promociones.editar({id : 1, imagen : $scope.imagen}).then(function(data){
            console.log(data)
        })

    }

    $scope.drop = () => {

        $('.dropify').dropify({
            messages: {
                default: 'Agregar',
                replace: 'Reemplazar',
                remove: 'Eliminar',
                error: 'Error'
            }
        }).on('change', function() {

            var input = this;
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    // bind new Image to Component
                    $scope.$apply(function() {

                        $scope.imagen = e.target.result

                        // $scope.inputImage = e.target.result;
                    });
                }

                reader.readAsDataURL(input.files[0]);
            }
        });

    }

    $scope.section = 'Promociones';
    $scope.seleccion = 0;

    $scope.formulario = false;

    Promociones.obtener().then(function(data){
        $scope.promociones = data.data;
        $scope.$digest();
    })

    $scope.abrirform = function(){
        $scope.seleccion = 0;
        $scope.promo = {};
        $scope.formulario = false;
    }
    $scope.cerrarForm = function(){
        $scope.formulario = true;
    }

    $scope.seleccionar = function(promo){
        $scope.seleccion = promo.id;
        $scope.promo = promo;
        console.log($scope.seleccion);
        $scope.formulario = false;
    }

    $scope.submitPromo = function (promo){

        $scope.seleccion === 0 ? crear(promo) : update(promo);
    }

    function crear(promo){
        console.log(promo);
        Promociones.crear(promo).then(function(data){
            $scope.$digest();
            console.log(data.data.nombre);
            $scope.promociones.push(data.data.nombre);
            $scope.formulario = true;
        })
    }

    function update(promo){
        console.log('editando')
        Promociones.editar(promo).then(function(data){
            console.log(data);
            $scope.formulario = true;
        })
    }

    $scope.imprimir = () => {
        console.log( $scope.imagen )
    }
    // $scope.eliminarPromo = function(promo, $index){
    //     console.log($index);
    //     ventana = $mdDialog.confirm()
    //     .title('¿Seguro que quieres eliminar la promocion')
    //     .textContent('Para eliminar de forma permanente dale en aceptar')
    //     .ok('Aceptar')
    //     .cancel('Cerrar')
    //     .clickOutsideToClose(true);
    //
    // $mdDialog.show(ventana).then(function(){
    //
    //     Promociones.eliminar(promo.id).then(function(data){
    //         $scope.promociones.splice($index, 1)
    //         $scope.$digest();
    //     })
    // }, function(){
    //
    // });
    // }
});
