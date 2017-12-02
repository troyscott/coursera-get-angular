angular.module('ShoppingListCheckOff', [])
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)


/* Shopping List CheckOff Service */


function ShoppingListCheckOffService(){
    console.log('ShoppingListCheckOffService ...');
    var service = this;
    var toBuyItems = [
        {name: 'cookies', quantity: 10},
        {name: 'steak', quantity: 3},
        {name: 'muffin', quantity: 6}
    ];

    var boughtItems = [];

    service.getToBuyItems = function(){
        return toBuyItems;
    };

    service.getBoughtItems =  function() {
        return boughtItems;
    };
    
    service.addBoughtItems = function(name, quantity) {
        var item = {
            name: name,
            quantity: quantity
        };

        boughtItems.push(item);

        
    };



}  // Service


/* To Buy Controller */

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
    console.log('ToBuyController ....');
    var service = ShoppingListCheckOffService;
    var buy = this;
    buy.items = service.getToBuyItems();
    console.log(buy.items);

    function boughtItem(name, quantity) {


    }
}



/* Already Bought Controller */
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService){
    console.log('AlreadyBoughtController');
    var service = ShoppingListCheckOffService;
    var bought = this;
    bought.items = service.getBoughtItems();


}