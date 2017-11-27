app.controller('mainCtrl', function ($scope, $rootScope, $http, mdDialog, AuthService, $localStorage) {

    $localStorage.usuario = false;


    $scope.registro = function(usuario){
        AuthService.registro(usuario);
    }

    $scope.login = function(x){
        AuthService.login(x);
    }

	_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });

    $scope.iniciosesion = function (ev) {
        mdDialog.mostrardialog('login', 'mainCtrl', $scope.customFullscreen);
    };

    $scope.registrarse = function() {
        mdDialog.mostrardialog('registro', 'mainCtrl', $scope.customFullscreen);
    }

    $scope.botones = [
      {
        title: 'Home',
        // icon: 'home',
        sref: 'home'
      },
      {
        title: 'Servicios',
        // icon: 'favorite',
        sref: 'areas'
      },
      {
        title: 'Llantas',
        // icon: 'group_work',
        sref: 'llantas'
      },
      {
        title: 'Promociones',
        // icon: 'local_offer',
        sref: 'promociones'
      },
      {
        title: 'Videos',
        // icon: 'video_library',
        sref: 'videos'
      },
      {
        title: 'Contacto',
        // icon: 'contact_mail',
        sref: 'contacto'
      },
      {
          title: 'Sucursales',
          //icon: 'contact_mail',
          sref: 'sucursal'
      },
      {
        title: 'Oferta de Trabajo',
        // icon: 'contact_mail',
        sref: 'ofertaTrabajo'
      }
  ];


});
