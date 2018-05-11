var app = angular.module('myapp');

app.controller('promocionesCtrl', function($scope, Promociones, Contacto, alertas) {

    $scope.section = 'promociones';
    Promociones.one(1).then(res => {
        $scope.promocion = res.data;
        console.log(res.data)
        $scope.$digest();
    })

    $scope.crear = () => {

        Contacto.crear($scope.contacto).then(res => {
            $scope.listo = true;
            console.log(res.data)
            alertas.mostrarToastEstandar('Se envio la cotización')
            delete $scope.contacto
            $scope.$digest()
        })

        console.log($scope.contacto)

    }

})
