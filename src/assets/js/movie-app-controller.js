/* jshint esversion: 6 */

const apiKey = "a49b5dfb";
const generalLink = "http://www.omdbapi.com/?apikey=" + apiKey;
var myApp = angular.module("MovieApp", []);

myApp.controller("MovieAppCtrl",
        [
            "$http", "$scope",
            ($http, $scope) => {
                $scope.Search = null;
                $scope.MovieData = [];
                $scope.SingleMovieData = [];
                $scope.GetMoviesData = () => {
                    getResults($http, $scope, "multiple", generalLink + "&s=" + $scope.Search + "&type=movie&r=json");
                };
                $scope.GetMovieData = (movieId) => {
                    getResults($http, $scope, "single", generalLink + "&i=" + movieId + "&r=json");
                };
                $scope.prepareValue = (value) => {
                    return prepareValue(value);
                };
                $scope.prepareValueForStyle = (value) => {
                    return { "width" : prepareValue(value) + "%" };
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

const getResults = ($http, $scope, type, link) => {
    try {
        $http({
            url: link,
            method: "GET"
        }).then(
            (payload) => {
                if (type === "multiple")
                    $scope.MovieData = payload.data;
                else if (type === "single")
                    $scope.SingleMovieData = payload.data;
            },
            () => {
                alert("Something is wrong. Please try again.");
            }
        );
    } catch (error) {
        alert("Exception occured while fetching movie data.\n\n" + error);
    }
};

const prepareValue = (value) => {
    var num = 1;
    if (value.includes("%"))
        value = value.substring(0, value.length - 1);
    else if (value.includes("/"))
        if (value.split("/")[1] === "10")
            num = 10;
        value = parseFloat(value.split("/")[0])*num;
    return value;
};
