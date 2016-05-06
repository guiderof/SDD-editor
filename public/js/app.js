require([
    'angular'
], function (angular) {
    require([
        'js/controller/dashboard',
        'js/directive/editor',
        'js/directive/result',
        'js/directive/question'
    ], function (dashboardCtrl, Editor, Result, Question) {
        angular
            .module('sddProject', [Editor, Result, Question])
            .controller('DashBoardCtrl', dashboardCtrl);

        angular.bootstrap(document, ['sddProject']);
    });
});
