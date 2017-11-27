var app = angular.module('myapp');

app.controller('llantaCtrl', function($scope, alertas, $state, $stateParams, Llantas) {

    $scope.subsection = 'llantas';

    $scope.video = {
        id: 'cEKeShOkufI'
    };

    if($stateParams.nombre === null){
        $scope.nombre =_.replace($stateParams.titulo, '_', ' ');
    }else{
        $scope.nombre = $stateParams.nombre;
    }
    
    $scope.portada = $stateParams.titulo;

    Llantas.one($stateParams.id).then(res =>{
        $scope.llantas = res.data;
        console.log(res.data)
        $scope.$digest();
        alertas.mostrarToastEstandar('Se obtuvieron Las Llantas');
    })

});
