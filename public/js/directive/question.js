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
                controller: function ($rootScope, $scope) {
					$scope.question = {};
					$rootScope.$on('question_value', function (value) {
						if (value) {
							$scope.question = $rootScope.question;
						}
					});
                }
            };
        });
    return moduleName;
});
