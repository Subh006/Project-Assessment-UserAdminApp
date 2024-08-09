var app = angular.module('registerDetail', []);

app.controller('registerController', ["$scope", "$http", ($scope, $http) => {

    $scope.user = {};


    $scope.addUser = () => {
        $http.post("http://localhost:6199/authenticate/registration", $scope.user).then((response) => {

            if (response.data > 0) {
                $scope.msg = "Email Id Already Exist, Please Use Different Email Id"
            }
            else {
                alert(response.data);
                $scope.user = {};
                $scope.navigateView('views/auth/intro/intro.html');
            }
        })

    };


}]);