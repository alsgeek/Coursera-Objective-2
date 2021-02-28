(function () {
'use strict';

angular.module('application',[])
.controller('ToBuyController', ToBuyController )
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

//To buy list
	ToBuyController.$inject =['ShoppingListService'];
	function ToBuyController (ShoppingListService){
		var purchase = this;
    purchase.items = ShoppingListService.purchaseItems();
    purchase.removeItem = function( itemIndex) {
    ShoppingListService.purchased(itemIndex);
    };
  }

  //Already bought list
	AlreadyBoughtController.$inject =['ShoppingListService'];
	function AlreadyBoughtController (ShoppingListService){
		var purchased = this;

		purchased.items = ShoppingListService.purchasedItems();
	}

  //Shopping list service
	function ShoppingListService(){
		var service = this;

		var purchaseItems = [
		{name: "cookies",
		 quantity: 10
		},
		{name: "chips",
		 quantity: 20
		},
		{name: "cake",
		 quantity: 5
		},
		{name: "carrots",
		 quantity: 10
		},
		{name: "tomatoes",
		 quantity: 9
		}];

    	var purchasedItems = [];
      service.purchased = function(itemIndex) {
      purchasedItems.push(purchaseItems[itemIndex]);
      purchaseItems.splice(itemIndex,1);
      };

      service.purchasedItems = function() {
      return purchasedItems;
      };

      service.purchaseItems = function() {
      return purchaseItems;
      };
    }
    })();
