// Lunch Check Application

angular.module('LunchCheck',[ ])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
    console.log('LunchCheckController');
    // initialize variables
    $scope.message = "";
    $scope.lunchList = "";
    $scope.checkIfTooMuch = checkIfTooMuch;

    function checkIfTooMuch() {
        
        var list = $scope.lunchList;
        console.log(list);
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
        // Check for empyt string

        if (text == "") {
            $scope.message = "Please enter data first";
            return false;
        } else {
            $scope.message = "";
            return true;
        }
    }




    

} // Controller



