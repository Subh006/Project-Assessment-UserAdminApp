var app = angular.module('adminAddDetail',[]);

app.controller('addDetailController',["$scope","$http",($scope,$http)=>{

    $scope.user={};
    
    $scope.token = $scope.getToken()

    $scope.addUser = ()=>{
      
        $http({
            method: 'POST',
            url: 'http://localhost:6199/admins',
            params: { token: $scope.token },
            data:$scope.user
        }).then((response)=>{
         
            if (response.data > 0) {
                $scope.msg = "Email Id Already Exist, Please Use Different Email Id"
            }
            else {
                alert(response.data);
                $scope.user = {};
                $scope.msg="";
            }
        })
       
    };

}]);

