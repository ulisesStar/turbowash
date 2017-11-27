var app = angular.module('myapp');

app.controller('promocionesCtrl', function($scope, alertas, $state, $stateParams, Promociones) {

    $scope.section = 'promociones';
    Promociones.one(1).then(res => {
        $scope.promocion = res.data;
        console.log(res.data)
        $scope.$digest();
        alertas.mostrarToastEstandar('Se obtuvieron las Promociones');
    })

});
