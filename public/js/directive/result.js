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
					$scope.question_id = "";
					$scope.assignment_id = "";
					//$rootScope.params.question_id
                    $scope.submit = function () {
						if ($scope.attempt_id && $scope.question_id) {
							if ($scope.point) {

							}
						} else {
							console.log('please wait');
						}
                    };

					$scope.run = function () {

					};

					$rootScope.$on('question_value', function (value) {
						if (value) {
							$scope.question_id = $rootScope.question.aq_id;
							$scope.assignment_id = $rootScope.assignment.assignment_id;
						}
					});
                }
            };
        });
    return moduleName;
});
