var app = angular.module('adminGetDetail', []);

app.controller('getDetailController', ["$scope", "$http", ($scope, $http) => {

    $scope.token = $scope.getToken()





    $http({
        method: 'GET',
        url: "http://localhost:6199/admins",
        params: { token: $scope.token }
    }).then((response) => {
        $scope.users = response.data;
    })


    $scope.visibilityDelete = false;


    $scope.toggleDeleteShow = (usr) => {
        $scope.visibilityDelete = true;
        $scope.usrData = usr
    };

    $scope.toggleDeleteHide = () => {
        $scope.visibilityDelete = false;
    };

    $scope.editUser = (usr) => {

        //alert(JSON.stringify($scope.access))


        $http({
            method: 'PUT',
            url: "http://localhost:6199/admins/" + usr.uid,
            params: { token: $scope.token },
            data: usr
        }).then((response) => {
            alert(response.data);
        });


    };

    $scope.deleteUser = () => {

        $http({
            method: 'DELETE',
            url: "http://localhost:6199/admins/" + $scope.usrData.uid,
            params: { token: $scope.token }
        }).then((response) => {
            alert(response.data);
        });

        $scope.usrData = {};


    };

    $scope.isEdit = false;

    $scope.toggleEdit = (usr, index) => {
        console.log(usr);


        usr.isEdit = true;

        var form = document.querySelectorAll('.getForm')[index];

        var inputs = form.querySelectorAll('input');

        inputs.forEach(function (input) {
            input.removeAttribute('readonly');
            input.classList.remove('form-control-plaintext');
            input.classList.add('form-control');
            input.classList.add('form-control-sm');
            input.setAttribute('required', '');

        });

    }

    $scope.toggleSave = (usr, index, valid) => {

        usr.isEdit = false;

        var form = document.querySelectorAll('.getForm')[index];

        var inputs = form.querySelectorAll('input');
        inputs.forEach(function (input) {
            input.removeAttribute('required');
            input.classList.remove('form-control');
            input.classList.remove('form-control-sm');
            input.classList.add('form-control-plaintext');
            input.setAttribute('readonly', 'true');
        });

        $scope.editUser(usr);

    }

    $scope.toggleClose = (usr, index) => {

        usr.isEdit = false

        console.log(usr)
        var form = document.querySelectorAll('.getForm')[index];

        var inputs = form.querySelectorAll('input');
        inputs.forEach(function (input) {
            input.removeAttribute('required');
            input.classList.remove('form-control');
            input.classList.remove('form-control-sm');
            input.classList.add('form-control-plaintext');
            input.setAttribute('readonly', 'true');
        });


    }





}]);

