/* jshint esversion: 6 */

const apiKey = "a49b5dfb";

angular.module("MovieApp", [])
    .controller("MovieAppCtrl",
        [
            "$http", "$scope",
            ($http, $scope) => {
                $scope.Search = null;
                $scope.MovieData = [];
                $scope.GetMoviesData = () => {
                    try {
                        $http({
                            url: "http://www.omdbapi.com/?apikey=" + apiKey + "&s=" + $scope.Search,
                            method: "GET",
                        }).then(
                            (payload) => {
                                $scope.MovieData = payload.data;
                            },
                            () => {
                                alert("Something is wrong. Please try again.");
                            }
                        );
                    } catch (error) {
                        alert("Exception occured while fetching movie data.");
                    }
                };
            }
        ]
    );
