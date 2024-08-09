var app = angular.module('introApp', []);

app.controller('introController', ["$scope", "$http", ($scope, $http) => {

    $scope.show = false;

    $scope.user = {};

    $scope.message;

    $scope.authenticateUser = () => {

        $http.post("http://localhost:6199/authenticate/login", $scope.user).then((response) => {

            if (response.data.message === "Not Exist") {

                $scope.message = "User does not exist, Enter correct email Id OR Register";

            }
            else if(response.data.message === "Not Match"){
                $scope.message = "Password does not match";

            }

            else {
                $scope.usr = response.data.result;
                $scope.token=response.data.accessToken;
                if ($scope.usr[0].role == "admin") {

                    alert("you are an admin");
                    $scope.navigateView('views/admin/adminHome/adminHome.html', $scope.usr[0], $scope.token);

                }
                else if ($scope.usr[0].role == "user") {

                    alert("you are an user");
                    $scope.navigateView('views/user/userHome/userHome.html', $scope.usr[0], $scope.token);

                }

            }

           
        });

    };

    $scope.showLogin = () => {
        $scope.show = true;
    }

}])
