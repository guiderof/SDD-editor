define([
    'angular'
], function (angular) {
    return ['$rootScope', '$scope', '$location', '$http',
        function ($rootScope, $scope, $location, $http) {
            $rootScope.question = {};
            $rootScope.assignment = {};

            $scope.expand = true;

            var absUrl = $location.absUrl();
            var queryString = absUrl.split('?')[1].split('&');
            $rootScope.params = {};
            for (var i = 0; i < queryString.length; i++) {
                var name = queryString[i].split('=')[0];
                var value = queryString[i].split('=')[1];
                console.log(name, value);
                $rootScope.params[name] = value;
            }

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
                $rootScope.question = data.question;
                $rootScope.assignment = data.assignment;
            }).error(function (data, status, headers, config) {
                console.log('get question error');
            });
        }
    ];
});
