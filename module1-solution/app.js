// Lunch Check
angular.module('LunchCheck',[ ])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
    console.log('LunchCheckController');
    $scope.message = null;
    $scope.lunchList = null;
    $scope.checkIfTooMuch = checkIfTooMuch;

    function checkIfTooMuch() {
        
        var list = $scope.lunchList;

        if (isValidEntry(list)) {
            if (itemCount(list) <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too Much!";
            }
        }
    }

    function itemCount(text) {
        return text.split(",").length;
    }
    // Validate user input
    function isValidEntry(text){
    
        if (items) {
            $scope.message = "";
            return true;
        } else {
            $scope.message = "Please enter data first";
            return false;
        }
    }




    

} // Controller



