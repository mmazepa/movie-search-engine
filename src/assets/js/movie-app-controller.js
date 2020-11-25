/* jshint esversion: 6 */

const apiKey = "a49b5dfb";
var myApp = angular.module("MovieApp", []);

myApp.controller("MovieAppCtrl",
        [
            "$http", "$scope",
            ($http, $scope) => {
                $scope.Search = null;
                $scope.MovieData = [];
                $scope.GetMoviesData = () => {
                    try {
                        $http({
                            url: "http://www.omdbapi.com/?apikey=" + apiKey + "&s=" + $scope.Search + "&type=movie&r=json",
                            method: "GET"
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

myApp.directive("onErrorSrc", () => {
    return {
        link: (scope, element, attrs) => {
            element.bind("error", () => {
                if (attrs.src != attrs.onErrorSrc) {
                    attrs.$set("src", attrs.onErrorSrc);
                }
            });
        }
    };
});
