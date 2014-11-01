///// <reference path="mycode.js" />
var app = angular.module('HackingCodeApp', []);


app.controller('MainController', function ($rootScope, $http, $scope) {
        
    $scope.nome = "Ale";

    $scope.registro = function () {
        alert('Ale');
        $http.post('http://localhost:9090/Empresa').success(RegistroCallback);
    }

    $scope.Clear = function () {
        
        $scope.Participante.fone = "";
        $scope.Participante.email = "";
        $scope.Participante.area = "";
    }

    function RegistroCallback(data, status) {
        $scope.objeto = data;
        alert($scope.objeto);
    }

    
});
