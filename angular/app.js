let app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
    $scope.data2 = 'demo data 2 here';

    $http.jsonp('https://c-search-api.herokuapp.com/search/c/C++').then((res) => {
        $scope.data = res.data;
    }, (err) => {
        console.log(err);
    });
});
