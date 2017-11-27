var app = angular.module('myapp');

app.controller('accesoCtrl', function($scope, $rootScope, $state, $stateParams, AuthService) {

    $scope.login = function(usuario){
        AuthService.login(usuario).then(res => {
            console.log(res.data);
        })
    }

});
