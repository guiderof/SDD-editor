define([
	'angular',
	'ngSanitize'
], function (angular) {
    var moduleName = 'Question';
    angular
        .module(moduleName, ['ngSanitize'])
        .directive('questionPannel', function () {
            return {
                restrict: 'E',
                templateUrl: 'html/question.html',
                scope: {

                },
                controller: function ($rootScope, $scope, $interval) {
					$scope.question = {};
					$scope.assignment = {};
					$scope.remain = 0;
					$scope.remain_text = '';
					$rootScope.canSubmit = true;
					$interval(function () {
						console.log($scope.remain, $scope.remain_text);
						var valid = new Date($scope.assignment.deadline) > Date.now();
						if ($scope.remain > 0 && valid) {
							$scope.remain--;
							$scope.remain_text = parseInt($scope.remain/60) + " : " + $scope.remain % 60;
						} else {
							$rootScope.canSubmit = false;
							$scope.remain_text = "TIME OUT";
						}
					}, 1000);
					$rootScope.$on('question_value', function (value) {
						if (value) {
							$scope.question = $rootScope.question;
							$scope.assignment = $rootScope.assignment;
							$scope.remain = $scope.assignment.time_limit * 60;
						}
					});
                }
            };
        });
    return moduleName;
});
