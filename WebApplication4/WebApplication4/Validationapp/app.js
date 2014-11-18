var validationApp = angular.module('validationApp', []);
validationApp.controller('mainController', function ($scope)
{
    $scope.userform = function (isvalid)
    {
        if (isvalid)
        {
              alert('Form Valid');
        }
    }
});