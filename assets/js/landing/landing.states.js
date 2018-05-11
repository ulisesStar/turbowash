app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]);

app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

	$urlRouterProvider.otherwise('/');
	$stateProvider

	.state('promociones', {
		url: '/',
		views: {
			'main': {
				templateUrl: '/landing/promociones',
				controller: 'promocionesCtrl as ctrl'
			}
		},
		resolve: {
			loadMyCtrl: [
				'$ocLazyLoad',
				function($ocLazyLoad) {
					return $ocLazyLoad.load(['landingpromociones']);
				}
			]
		}
	});
}]);
