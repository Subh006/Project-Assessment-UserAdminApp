var app = angular.module('userGetDetail', []);

app.controller('userController', ["$scope", "$http", ($scope, $http) => {

    $http.get("http://localhost:6199/users").then((response) => {
        $scope.users = response.data;
    })

}]);