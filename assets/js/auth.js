app.constant('USER_ROLES', {
    all: 'all',
    admin: 'admin',
    editor: 'editor',
    guest: 'guest'
})

app.factory('AuthService', function($q, $window, $http, $rootScope, Session, $localStorage, alertas, $state) {

    var authService = {};

    var deferred = $q.defer();

    authService.registro = function(credentials) {

        $http.post('/data/registro', credentials)
        .success(data => {
            console.log(data);
        })
        .error(err => {
            alertas.mostrarToastEstandar("No se pudo registrar");
            console.log(err);
        });

    };

    authService.login = function(credentials) {

        $http.post('/data/login', credentials)
        .then(res => {

            if(res.data.token){
                console.log(res);
                Session.create(res.data.token);
                $window.location.href = "/admin";
            }else{
                alertas.mostrarToastEstandar("Usuario o contraseña incorrecta");
            }
            deferred.resolve(res.data);

        })
        return deferred.promise;

    };

    authService.update = function(user) {
        return $http.post( '/user/update', user).then(function(resp) {
            if (resp.status === 200) {
                Session.create(resp.data);
            }
            return resp;
        });
    };

    authService.token = function(token) {
    var deferred = $q.defer();
    $http.post('/data/token', {token: token}).then(res => {
        deferred.resolve(res.data);
        if (res.data.success === false) {
            alertas.mostrarToastEstandar("No se pudo logear");
            $window.location.href = "/#!/acceso";
        } else {
            $rootScope.rol = res.data.usuario.privilegio;
            alertas.mostrarToastEstandar("Paso el proceso de seguridad");
        }
    })

    authService.autorizacion = function(roles) {
        console.log('Funcionando')
        let rol = $rootScope.rol;
        x = _.includes(roles, rol)
        return x;
    };

    authService.logout = function() {
        Session.destroy();
    };

    return deferred.promise;
}

    return authService;
});

app.service('Session', function($localStorage) {
    this.create = function(data) {
        $localStorage.$reset();
        $localStorage.token = data;
    };

    this.destroy = function() {
        $localStorage.$reset();
    };
});
