var app = angular.module('ajaxApp');

app.directive('ikhlaqIsCool', function () {
    return {
        //vad som händer här, visas i custom directive.
        template: '<div><img src="https://u.cubeupload.com/WisXw2.jpg"></div>',
        restrict: 'E',
        link: function (scope, element, attrs) {
            // Här körs logiken bakom din directive
            console.log('directive is active');
        }

    };

});

app.directive('programmerHacker', function () {
    return {
        template: '<div><img src="http://the9gag.com/images/categories/thumb/funny_programmer.jpg"></div>',
        restrict: 'E',
        link: function (scope, element, attrs) {

        }
    }
});