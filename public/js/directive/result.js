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
					$scope.total = 0;
					$scope.result = false;
					$scope.question_id = "";
					$scope.assignment_id = "";
					//$rootScope.params.question_id
                    $scope.run = function () {
						if ($scope.assignment_id && $scope.question_id) {
							/*
							var data = {
								results: true
							};
							$scope.result = data.results?1:2;
							*/
							var path = "http://172.20.10.11:8090/api/test/compile";
							$http({
		                        method: 'POST',
		                        url: path,
		                        headers: {
		                            "Content-type": "application/json;charset=UTF-8"
		                        },
								data: JSON.stringify({
									script: $rootScope.script,
									api: $scope.assignment_id,
									qid: $scope.question_id
								})
		                    }).success(function (data, status, headers, config) {
		                        console.log('result:', data);
								$scope.result = data.results?1:2;
		                    }).error(function (data, status, headers, config) {
		                        console.log('get question error');
		                    });
						} else {
							console.log('please wait');
						}
                    };

					$scope.submit = function () {
						if ($scope.assignment_id && $scope.question_id) {
							/*
							var data = {
								tested : [true, false, false]
							};
							var point = 0;
							var testcast = data.tested.length;
							data.tested.forEach(function (item) {
								if (item)
									point++;
							});
							console.log(point, testcast);
							$scope.point = parseInt(point*10/testcast);
							*/
							var path = "http://172.20.10.11:8090/api/question/test";
							$http({
		                        method: 'POST',
		                        url: path,
		                        headers: {
		                            "Content-type": "application/json;charset=UTF-8"
		                        },
								data: JSON.stringify({
									script: $rootScope.script,
									aid: $scope.assignment_id,
									qid: $scope.question_id
								})
		                    }).success(function (data, status, headers, config) {
		                        console.log('result:', data);
								var point = 0;
								var testcast = data.tested.length;
								data.tested.forEach(function (item) {
									if (item)
										point++;
								});
								console.log(point, testcast);
								$scope.point = parseInt(point*10/testcast);
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
							$scope.total = $rootScope.question.question_point;
							$scope.assignment_id = $rootScope.assignment.assignment_id;
						}
					});
                }
            };
        });
    return moduleName;
});
