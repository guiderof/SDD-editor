define([
	'angular',
    'ace/ace'
], function (angular, ace, theme, mode) {
    var moduleName = 'Editor';
    angular
        .module(moduleName, [])
        .directive('editorPannel', function ($rootScope) {
            return {
                restrict: 'E',
                templateUrl: 'html/editor.html',
                link: function (scope, elem, attrs) {
                    var editor = ace.edit("editor");
					editor.setTheme("ace/theme/monokai");
					editor.getSession().setMode("ace/mode/python");

					//scope.initCode = $rootScope.question.initial_code;
                }
            };
        });
    return moduleName;
});
