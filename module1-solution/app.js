// Lunch Check
app.module('LunchCheck',[])
.conroller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject['$scope', '$filter'];

function LunchCheckController($scope, $filter) {
    console.log('LunchCheckController');
    



}