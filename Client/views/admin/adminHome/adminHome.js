var app = angular.module("adminHome", []);

app.controller('adminController', ["$scope", "$http", ($scope, $http) => {

    $scope.navigate = (url,token) => {

        $scope.partial = url;
        $scope.accessToken=token;

    }

    


}]);
