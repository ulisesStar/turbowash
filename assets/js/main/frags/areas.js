var app = angular.module('myapp');

app.controller('areasCtrl', function($scope, alertas, $state, $stateParams, Areas, Portada, Multimedia) {


    $scope.loading = true;
    var id = $stateParams.id;

    $scope.imageneslista = false;
    $scope.portadalista = false;

    Areas.one(id).then(function(res) {
        console.log(res.data);
        $scope.area = res.data;

        $scope.loading = false;
        $scope.$digest();
    })

    $scope.video4 = 'https://gaming.youtube.com/watch?v=P_XwcUdSS1M';

    Portada.Xarea(id).then(res => {
        $scope.portadas = res.data;
        $scope.portadalista = true;
        console.log(res.data);
        $scope.$digest();
    })


    Multimedia.Xarea(id).then(res => {
        $scope.imagenes = res.data;
        $scope.imageneslista = true;
        console.log(res.data);
        $scope.$digest();
    })



    $scope.imagenesResidencial = [

        { imagen: 'img/sliderresidencial/residencial1.jpg'},
        { imagen: 'img/sliderresidencial/residencial2.jpg'},
        { imagen: 'img/sliderresidencial/residencial3.jpg'}

    ];

    $scope.imagenesComercial = [

        { imagen: 'img/sliderresidencial/comercial1.jpg'},
        { imagen: 'img/sliderresidencial/comercial2.jpg'},
        { imagen: 'img/sliderresidencial/comercial3.jpg'}

    ];

    $scope.imagenesIndustrial = [

        { imagen: 'img/sliderresidencial/industrial1.jpg'},
        { imagen: 'img/sliderresidencial/industrial2.jpg'},
        { imagen: 'img/sliderresidencial/industrial3.jpg'}

    ];



});
