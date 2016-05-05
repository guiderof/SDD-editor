define([
	'angular'
], function (angular) {
    var moduleName = 'Result';
    angular
        .module(moduleName, [])
        .directive('resultPannel', function () {
            return {
                restrict: 'E',
                templateUrl: 'public/html/result.html',
                scope: {

                },
                controller: function ($scope, $http) {
                    $scope.point = 0;

                    $scope.submit = function () {

                    };
                }
            };
        });
    return moduleName;
});
