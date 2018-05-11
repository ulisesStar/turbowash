app.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
        debug: true,
        modules: [
            {
                name: 'ozMainHome',
                files: ['js/main/frags/home.js']
            },
            {
                name: 'ozMainAreas',
                files: ['js/main/frags/areas.js']
            },
            {
                name: 'ozMainLlantas',
                files: ['js/main/frags/llantas.js']
            },
            {
                name: 'ozLlanta',
                files: ['js/main/frags/llanta.js']
            },
            {
                name: 'ozMainSucursal',
                files: ['js/main/frags/sucursal.js']
            },
            {
                name: 'ozMainAviso',
                files: ['js/main/frags/aviso.js']
            },
            {
                name: 'ozMainPromociones',
                files: ['js/main/frags/promociones.js']
            },
            {
                name: 'ozMainVideos',
                files: ['js/main/frags/videos.js']
            },
            {
                name: 'ozMainContacto',
                files: ['js/main/frags/contacto.js']
            },
            {
                name: 'ozMainOfertaTrabajo',
                files: ['js/main/frags/ofertaTrabajo.js']
            },
            {
                name: 'ozAdminHome',
                files: ['js/admin/frags/home.js']
            },
            {
                name: 'ozAdminAreas',
                files: ['js/admin/frags/areas.js']
            },
            {
                name: 'ozAdminPortada',
                files: ['js/admin/frags/portada.js']
            },
            {
                name: 'ozAdminMultimedia',
                files: ['js/admin/frags/multimedia.js']
            },
            {
                name: 'ozAdminCrearPortada',
                files: ['js/admin/frags/portada.js']
            },
            {
                name: 'ozAdminInfoAreas',
                files: ['js/admin/frags/infoAreas.js']
            },
            {
                name: 'ozAdminLlantas',
                files: ['js/admin/frags/llantas.js']
            },
            {
                name: 'ozAdminSucursal',
                files: ['js/admin/frags/sucursal.js']
            },
            {
                name: 'ozAdminPromociones',
                files: ['js/admin/frags/promociones.js']
            },
            {
                name: 'ozAdminContacto',
                files: ['js/admin/frags/contacto.js']
            },
            {
                name: 'ozAdminCotizacion',
                files: ['js/admin/frags/cotizacion.js']
            },
			{
				name: 'ozUserHome',
				files: ['js/user/frags/home.js']
			},
            {
				name: 'ozAcceso',
				files: ['js/main/frags/acceso.js']
			},
            {
				name: 'landingpromociones',
				files: ['js/landing/frags/promociones.js']
			}
        ]
    });
}]);
