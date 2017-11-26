// Lunch Check Application
// Developed by: Troy Scott

(function(){

'strict';

angular.module('LunchCheck',[ ])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
    console.log('LunchCheckController');
    // initialize variables
    $scope.message = "";
    $scope.lunchList = "";
    $scope.checkIfTooMuch = checkIfTooMuch;
    // This variable is used for the optional styling requirements
    // See index html.  This initializes/clears the style (ng-style)
    // ng-style requires and object literal
    $scope.messageStyle = {};
    
    // Check to see if the user ate too much
    function checkIfTooMuch() {
        // Get and validate user input
        var list = $scope.lunchList;
        if (isValidEntry(list)) {
            // Valid input
            // used by ng-style for optional requirement
            $scope.messageStyle = {
                'color': 'green',
                'border': '1px solid green',
                'padding': '5px'
            };
            // Determine how much the user ate and return
            // a message
            if (itemCount(list) <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too Much!";
            }
        } else {
            // Input is not valid
            // used by ng-style for optional requirement
            $scope.messageStyle = {
                'color': 'red',
                'border': '1px solid red',
                'padding': '5px'
            };
            // update message
            $scope.message = "Please enter data first";

        }
    }


    function itemCount(text) {
        
        /* Optional Requirement

            Do not count empty items for the following
            cases:

            item1,item2, ,item3
            item 1, item2,,item3

            Count should be 3 not 4 for the examples above.
        */

        // Convert the list into an array to validate each item
        var items = text.split(",");
        console.log(items.length);

        for (var i = 0;i < items.length; i++) {
            if (items[i] == "" || items[i] == " ") {
                // remove empty items from the array
                console.log('item is empty');
                var index = items.indexOf(items[i]);
                items.splice(index, 1);
            }
        }
        
        console.log(items);
        console.log(items.length);

        return items.length;
    }

    // Validate user input
    function isValidEntry(text){
        // Check for empyt string
        if (text == "") {
            return false;
        } else {
            return true;
        }
    }

} // Controller


})(); // IFEE