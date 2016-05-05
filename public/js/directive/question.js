define([
	'angular'
], function (angular) {
    var moduleName = 'Question';
    angular
        .module(moduleName, [])
        .directive('questionPannel', function () {
            return {
                restrict: 'E',
                templateUrl: 'html/question.html',
                scope: {

                },
                controller: function ($rootScope, $scope) {

                }
            };
        });
    return moduleName;
});
