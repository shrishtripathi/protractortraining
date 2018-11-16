import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let using = require('jasmine-data-provider');
let loadCreateData = Object.assign({}, DataProvider.Tc_188105);
let eomE2EComponents = new EOME2EComponents

//TC 188105: Food Safety Create Load ICS Brokerage 
using(loadCreateData, async (data) => {
    
    describe('Food Safety Create Load ICS Brokerage ', async () => {
        
        describe("Food Safety Create Load ICS Brokerage e", async () => {            
            await eomE2EComponents.foodSafetyCreateLoadICSBrokerage(data.foodSafetyCreateLoadICSBrokerageData);    // create order 
        });

    });

});

