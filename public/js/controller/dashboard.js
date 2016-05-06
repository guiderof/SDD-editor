define([
    'angular'
], function (angular) {
    return ['$rootScope', '$scope', '$location', '$http',
        function ($rootScope, $scope, $location, $http) {
            $rootScope.question = {};
            $rootScope.assignment = {};

            $scope.expand = true;
            $scope.student_id = '';

            var absUrl = $location.absUrl();
            if (absUrl.indexOf('?') > 0) {
                var queryString = absUrl.split('?')[1].split('&');

                $rootScope.params = {};
                queryString.forEach(function (item) {
                    var name = item.split('=')[0];
                    var value = item.split('=')[1];
                    $rootScope.params[name] = value;
                });

                if ($rootScope.params != {}) {
                    var path = ['http://api2.mycodeville.com/attempt-assignment',
                                $rootScope.params.attempt_id,
                                'question',
                                $rootScope.params.question_id
                            ].join('/');

                    $http({
                        method: 'GET',
                        url: path,
                        headers: {
                            "Content-type": "application/json;charset=UTF-8"
                        }
                    }).success(function (data, status, headers, config) {
                        console.log('assignment:', data);
                        $scope.student_id = data.student_id;
                        $rootScope.question = data.question;
                        $rootScope.assignment = data.assignment;
                        $rootScope.$broadcast('question_value', true);
                    }).error(function (data, status, headers, config) {
                        console.log('get question error');
                    });
                }
            }
        }
    ];
});
