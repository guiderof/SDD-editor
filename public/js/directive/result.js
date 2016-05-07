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
						if ($scope.assignment_id && $scope.question_id) {
							var path = "path to submit result of compile";
							$http({
		                        method: 'POST',
		                        url: path,
		                        headers: {
		                            "Content-type": "application/json;charset=UTF-8"
		                        },
								data: JSON.stringify({
									script: "data that need"
								})
		                    }).success(function (data, status, headers, config) {
		                        console.log('result:', data);
								var result = JSON.parse(data);
		                    }).error(function (data, status, headers, config) {
		                        console.log('get question error');
		                    });
						} else {
							console.log('please wait');
						}
                    };

					$scope.run = function () {
						if ($scope.assignment_id && $scope.question_id) {
							var path = "base" + "api/question/test" + $scope.assignment_id +'-' + $scope.question_id;
							$http({
		                        method: 'POST',
		                        url: path,
		                        headers: {
		                            "Content-type": "application/json;charset=UTF-8"
		                        },
								data: JSON.stringify({
									script: "script"
								})
		                    }).success(function (data, status, headers, config) {
		                        console.log('result:', data);
								var result = JSON.parse(data);
		                    }).error(function (data, status, headers, config) {
		                        console.log('get question error');
		                    });
						} else {
							console.log('please wait');
						}
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
