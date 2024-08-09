var app = angular.module('myApp', ['introApp', 'registerDetail', 'adminHome', 'adminGetDetail', 'adminAddDetail', 'userGetDetail']);

app.controller('indexController', ["$scope", "$http", ($scope, $http) => {
    $scope.view = 'views/auth/intro/intro.html';
     $scope.accessToken;
    $scope.navigateView = (url, user, token) => {

        $scope.view = url;
        $scope.data = user.name;
        $scope.role = user.role;
        $scope.email = user.email;
        $scope.accessToken = token;

        // $scope.profile = () => {
        //     $scope.us = {
        //         email: $scope.email,
        //         token: $scope.accessToken
        //     }
            
        //     $http.post("http://localhost:6199/authenticate/profile", $scope.us).then((response) => {
        //         alert(response.data.email);

        //     })
        // }
        // window.token= $scope.token
    }
$scope.getToken=()=>{
    return $scope.accessToken;
}


}])


