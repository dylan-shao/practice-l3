(function() {
    angular.module('app', ['ui.bootstrap'])
        .controller('it', ['$scope', '$http', '$uibModal',
            function($scope, $http, $uibModal) {
                $http.get('/interview')
                    .then(function(data) {
                        $scope.interviews = data.data;
                    });
                $scope.showQuestions = function(interview) {
                    $scope.questions = interview.questions;
                    $uibModal.open({
                        templateUrl: '/questions.html',
                        controller: function($scope) {
                            $scope.questions = interview.questions;
                            $scope.totalItems = interview.questions.length;
                            $scope.currentPage = 1;
                            $scope.maxSize = 5;
                            $scope.itemsPerPage = 4;
                        }
                    });
                }
            }
        ])
})();
