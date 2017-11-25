// Lunch Check

(function() {

angular.module('LunchCheck',[])
.conroller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject['$scope', '$filter'];

function LunchCheckController($scope, $filter) {
    console.log('LunchCheckController');
    $scope.message = "";
    $scope.lunchItemsList = "";
    $scope.validateEntry = validateEntry;
    $scope.parseList = parseList;

    function validateEntry() {
        console.log('validate Entry');
    }

    function parseList() {
        console.log('parseList');


    }

} // Controller

})(); // IFEE