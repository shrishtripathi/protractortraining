import { DataProvider } from "../../data/dataProvider";
import { OrderManagementE2EComponents } from "../../e2eComponents/order_management/order_management.pc";

let using = require('jasmine-data-provider');
let orderManagementE2EComponents = new OrderManagementE2EComponents();

//TC #185209: OM Create Order
using(DataProvider.Tc_185209, async function (data) {

    describe("OM Create Order ", () => {
        
        describe("OM Create Order ", () => {
        
            orderManagementE2EComponents.orderCreate(data);
        
        });

    });

});