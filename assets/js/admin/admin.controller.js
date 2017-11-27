app.controller('adminCtrl', function ($scope, $rootScope, $http, mdDialog, $timeout, $mdSidenav, AuthService, $localStorage, $transitions, $state, alertas) {

    $scope.token = $localStorage.token
            console.log($localStorage);

            $transitions.onSuccess({}, trans => {
            var authorizedRoles = $state.current.data.authorizedRoles;
            var s = AuthService.autorizacion(authorizedRoles);
            if (s === false) {
                alertas.mostrarToastEstandar("No estas autorizado para entrar a estar seccion");
                $state.go('home');
                if(!$scope.usuario){
                    $window.location.href = "/#/usuario";
                }
            }
        });

        AuthService.token($scope.token).then(data => {
            $scope.usuario = data.usuario;
                $scope.secciones.forEach(seccion => {
                    let rol = data.usuario.privilegio;
                    let bandera = _.includes(seccion.estado, rol)
                    if(bandera === false){
                        seccion.visible = false;
                    }else{
                        seccion.visible = true;
                    }
                })

            console.log($scope.secciones);
        })

    $scope.secciones = [
        {
            icon : 'home',
            nombre: 'home',
            state: 'home'
        },
        {
            icon : 'drive_eta',
            nombre: 'Areas',
            state: 'areas'
        },
        {
            icon : 'album',
            nombre: 'Llantas',
            state: 'llantas'
        },
        {
            icon : 'photo_album',
            nombre: 'Imagenes',
            state: 'imagenes'
        },
		{
            icon : 'whatshot',
            nombre: 'Promociones',
            state: 'promociones'
        },
        // {
        //     nombre: 'Sucursal',
        //     state: 'sucursal'
        // },
        //  {
        //     nombre: 'Promociones',
        //     state: 'promociones'
        // },
        {
            icon : 'people',
            nombre: 'Contacto',
            state: 'contacto'
       },
       {
           icon : 'attach_money',
           nombre: 'Cotizaciones',
           state: 'cotizacion'
       }
    ];

    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        };
    }

    $scope.Dropify = function() {

        $('.dropify').dropify({
            messages: {
                default: 'Agregar',
                replace: 'Reemplazar',
                remove: 'Eliminar',
                error: 'Error'
            }
        });

        $('.dropify').on('change', function() {

            var input = this;
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    // bind new Image to Component
                    $scope.$apply(function() {
                        $scope.inputImage = e.target.result;
                    });
                }

                reader.readAsDataURL(input.files[0]);
            }
        });

    };


});
