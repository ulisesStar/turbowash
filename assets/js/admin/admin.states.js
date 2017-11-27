app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]);

app.config(['$urlRouterProvider', '$stateProvider', 'USER_ROLES', function ($urlRouterProvider, $stateProvider, USER_ROLES) {

	function complejo(url, template, controller, oz, roles, params) {
            let obj = {
                url: url,
				data: {
	                authorizedRoles: roles
            	},
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

        function simple(url, template) {
            let obj = {
                url: url,
                views: {
                    'main': {
                        templateUrl: template
                    }
                }
            }
            return obj
    	}


	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home', complejo('/', '/admin/home', 'homeCtrl', 'ozAdminHome', [USER_ROLES.admin, USER_ROLES.editor]))
	.state('llantas', complejo('/llantas', '/admin/llantas', 'llantasCtrl', 'ozAdminLlantas', [USER_ROLES.admin, USER_ROLES.editor]))
	.state('sucursal', complejo('/sucursal', '/admin/sucursal', 'sucursalCtrl', 'ozAdminSucursal', [USER_ROLES.admin, USER_ROLES.editor]))
	.state('promociones', complejo('/promociones', '/admin/promociones', 'promocionesCtrl', 'ozAdminPromociones', [USER_ROLES.admin, USER_ROLES.editor]))
	.state('areas', complejo('/areas', '/admin/areas', 'areasCtrl', 'ozAdminAreas', [USER_ROLES.admin, USER_ROLES.editor]))

	.state('imagenes', simple('/imagenes', '/admin/imagenes', [USER_ROLES.admin, USER_ROLES.editor]))
	.state('imagenes.portada', complejo('/portada', '/admin/portada', 'portadaCtrl', 'ozAdminPortada', [USER_ROLES.admin, USER_ROLES.editor]))
	.state('imagenes.multimedia', complejo('/multimedia', '/admin/multimedia', 'multimediaCtrl', 'ozAdminMultimedia', [USER_ROLES.admin, USER_ROLES.editor]))
	.state('crearPortada', complejo('/crearPortada', '/admin/crearPortada', 'portadaCtrl', 'ozAdminCrearPortada', [USER_ROLES.admin, USER_ROLES.editor]))
	.state('infoAreas', complejo('/infoAreas', '/admin/infoAreas', 'infoAreasCtrl', 'ozAdminInfoAreas', [USER_ROLES.admin, USER_ROLES.editor], { 'id' : null}))

	.state('contacto', complejo('/contacto', '/admin/contacto', 'contactoCtrl', 'ozAdminContacto', [USER_ROLES.admin]))
	.state('cotizacion', complejo('/cotizacion', '/admin/cotizacion', 'cotizacionCtrl', 'ozAdminCotizacion', [USER_ROLES.admin]))
}]);
