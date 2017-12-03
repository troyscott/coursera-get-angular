(function(){

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
        {name: 'steaks', quantity: 3},
        {name: 'muffins', quantity: 6},
        {name: 'apples', quantity: 2},
        {name: 'candy canes', quantity: 12}
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

    service.removeToBuyItems = function(index) {        
        toBuyItems.splice(index,1);
    }

}  // Service


/* To Buy Controller */
ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
    console.log('ToBuyController ....');
    var service = ShoppingListCheckOffService;
    var buy = this;
    buy.items = service.getToBuyItems();
    buy.boughtItem = boughtItem;

    function boughtItem(name, quantity, index) {
        service.removeToBuyItems(index);
        service.addBoughtItems(name, quantity);

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

})();
