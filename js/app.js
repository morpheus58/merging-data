/* 
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/

"use strict";

angular.module('AddressBook', [])
    .controller('AddressController', function ($scope) {
        $scope.employees = pawneeEmployees;
        $scope.sortCol = 'lastName';
        $scope.sortReverse = false;
        $scope.exists = function (employeeAttribute) {
            return (null == employeeAttribute);
        };

        $scope.sortBy = function (employeeAttribute) {
            $scope.sortReverse = false;
                if($scope.sortCol == employeeAttribute) {
                    $scope.sortReverse = !$scope.sortReverse;
                } else {
                    $scope.sortReverse = false;
                }
                $scope.sortCol = employeeAttribute;
        };

    });