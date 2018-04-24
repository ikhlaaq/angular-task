var app = angular.module('ajaxApp');

app.controller('FirstController', ['$scope', '$http', function ($scope, $http) {
    //här är logiken som körs när man kommer till root page av din sida.
    $scope.name = '#Hackers';
    $scope.names = ['Max', 'Dimitrij', 'Calle', 'Ramy', 'Elias', 'Mohammad', 'Damian', 'Aml', 'Shaza', 'Eduardo', 'Nezar', 'Basel', 'Ibe', 'Filip',];

    $scope.showData = function () {
        var url = 'https://www.googleapis.com/books/v1/volumes?q="';
        $http.get(url)
            .then(function (data) {
                $scope.data = data;
            })
    };   

}]);

app.controller('ResultsController', ['$scope', function ($scope) {
    $scope.results = [
        { name: 'Max', score: 4 },
        { name: 'calle', score: 8 },
        { name: 'Ikhlaq', score: 3 },
    ];


}]);