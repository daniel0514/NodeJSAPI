app.factory('projects', ['$http', function($http) {
    return $http.get('http://localhost:8000/projects')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);
