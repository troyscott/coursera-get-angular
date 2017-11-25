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
    // No style intially
    $scope.messageStyle = {};
    console.log($scope.messageStyle);
    
    // Check to see if the user ate too much
    function checkIfTooMuch() {
        // Get the user innput
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
            $scope.messageStyle = {
                'color': 'red',
                'border': '1px solid red',
                'padding': '5px'
            };
            $scope.message = "Please enter data first";
            
            return false;
        } else {
            $scope.messageStyle = {
                'color': 'green',
                'border': '1px solid green',
                'padding': '5px'
            };
            $scope.message = "";
            return true;
        }
    }

} // Controller



