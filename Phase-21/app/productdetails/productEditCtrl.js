(function(){
    "use strict";

    angular
        .module("myApp")
        .controller("productEditController",["product", "$state", productEditController]);

    function productEditController(product,$state){
        var vm = this;

        vm.product=product;

        if(vm.product && vm.product.proId)
        {
            vm.title= "Edit:" + vm.product.Name;

        }
        else
        {
            vm.title="New Product";
        }

        vm.open = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            vm.opened = !vm.opened;
        };

        vm.submit=function(){
            vm.product.$save(function(date){
                toastr.success("Record saved successfully");
            });
        }

        vm.cancel=function(){
            $state.go('prodList');
        }

    }
}());

