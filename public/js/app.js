require([
    'angular'
], function (angular) {
    require([
        'js/controller/dashboard',
        'js/directive/editor',
        'js/directive/result'
    ], function (dashboardCtrl, Editor, Result) {
        angular
            .module('sddProject', [Editor, Result])
            .controller('DashBoardCtrl', dashboardCtrl);

        angular.bootstrap(document, ['sddProject']);
    });
});
