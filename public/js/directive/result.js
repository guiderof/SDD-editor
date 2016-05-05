define([
	'angular'
], function (angular) {
    var moduleName = 'Result';
    angular
        .module(moduleName, [])
        .directive('resultPannel', function () {
            return {
                restrict: 'E',
                templateUrl: 'html/result.html',
                scope: {

                },
                controller: function ($rootScope, $scope, $http) {
                    $scope.point = 0;
					//$rootScope.params.question_id
                    $scope.submit = function () {

                    };
                }
            };
        });
    return moduleName;
});
