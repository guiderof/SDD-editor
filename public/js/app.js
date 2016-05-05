require([
    'angular'
], function (angular) {
    require([
        'public/js/controller/dashboard',
        'public/js/directive/editor',
        'public/js/directive/result'
    ], function (dashboardCtrl, Editor, Result) {
        angular
            .module('sddProject', [Editor, Result])
            .controller('DashBoardCtrl', dashboardCtrl);

        angular.bootstrap(document, ['sddProject']);
    });
});
