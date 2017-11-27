app.run([
    '$rootScope',
    '$state',
    '$stateParams',
    function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);

app.config([
    '$urlRouterProvider',
    '$stateProvider',
    function($urlRouterProvider, $stateProvider) {

        function template(url, template, controller, oz, params) {
            let obj = {
                url: url,
                params: params,
                views: {
                    'main': {
                        templateUrl: template,
                        controller: controller + ' as ctrl'
                    }
                },
                resolve: {
                    loadMyCtrl: [
                        '$ocLazyLoad',
                        function($ocLazyLoad) {
                            return $ocLazyLoad.load([oz]);
                        }
                    ]
                }
            }
            return obj
        }


        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('home', template('/', '/main/home', 'homeCtrl', 'ozMainHome'))

        .state('taller', template('/areas/1/Taller_de_Mecanica', '/main/areas/taller', 'areasCtrl', 'ozMainAreas', { 'id' : 1, 'titulo' : 'Taller_de_Mecanica' }))
        .state('pintura', template('/areas/2/Pintura_Horneada', '/main/areas/pintura', 'areasCtrl', 'ozMainAreas', { 'id' : 2, 'titulo' : 'Pintura_Horneada' }))
        .state('estetica', template('/areas/3/Estetica', '/main/areas/estetica', 'areasCtrl', 'ozMainAreas', { 'id' : 3, 'titulo' : 'Estetica' }))
        .state('lavado', template('/areas/4/Lavado_Automatizado', '/main/areas/lavado', 'areasCtrl', 'ozMainAreas', { 'id' : 4, 'titulo' : 'Lavado_Automatizado' }))
        .state('residencial', template('/areas/5/Servicio_Residencial', '/main/areas/residencial', 'areasCtrl', 'ozMainAreas', { 'id' : 5, 'titulo' : 'Servicio_Residencial' }))

        .state('llantas', template('/llantas', '/main/llantas', 'llantasCtrl', 'ozMainLlantas'))

        .state('cotizador', template('/cotizador/:cotizador', '/main/llantas', 'llantasCtrl', 'ozMainLlantas', { 'cotizador' : 'cotizador' }))

        .state('llanta', template('/llanta/:id/:titulo', '/main/llanta', 'llantaCtrl', 'ozLlanta', { 'id' : null, 'titulo' : null, 'nombre' : null }))

        .state('promociones', template('/promociones', '/main/promociones', 'promocionesCtrl', 'ozMainPromociones'))
        .state('videos', template('/videos', '/main/videos', 'videosCtrl', 'ozMainVideos'))
        .state('contacto', template('/contacto', '/main/contacto', 'contactoCtrl', 'ozMainContacto'))
        .state('aviso', template('/aviso', '/main/aviso', 'avisoCtrl', 'ozMainAviso'))
        .state('sucursal', template('/sucursal', '/main/sucursal', 'sucursalCtrl', 'ozMainSucursal'))
        .state('ofertaTrabajo', template('/ofertaTrabajo', '/main/ofertaTrabajo', 'ofertaTrabajoCtrl', 'ozMainOfertaTrabajo'))
        .state('acceso', template('/acceso', '/main/acceso', 'accesoCtrl', 'ozAcceso'))

    }
]);
