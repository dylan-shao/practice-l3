(function() {
    angular.module('app', ['ui.bootstrap'])
        .controller('it', ['$scope', '$http', '$uibModal',
            function($scope, $http, $uibModal) {
                $http.get('/interview')
                    .then(function(data) {
                        $scope.interviews = data.data;
                    })
            }
        ])
})();
