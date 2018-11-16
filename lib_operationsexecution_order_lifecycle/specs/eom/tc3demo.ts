//import { DataProvider } from "../../data/dataProvider";
import { DetailsPage } from "../../pages/eom/details.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";  
import { DataDemo } from "../../data/datademo";
import { EOMe2eTC2Demo } from "../../e2eComponents/eom/eomdemo2.pc";
import { EOMe2eTC1Demo } from "../../e2eComponents/eom/eomdemo1.pc";

let loadDetailsPage = new DetailsPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let using = require('jasmine-data-provider');
let eOMe2eTC1 = new EOMe2eTC1Demo();
let eOMe2eTC2 = new EOMe2eTC2Demo();

let loadCreateVerificationData = Object.assign({}, DataDemo.Test);

using(loadCreateVerificationData, async (data) => {
    
    describe('EOM Hazmat load Creation verification', async () => {
        
        describe("Create Hazmat load in EOM", async () => {            
            await eOMe2eTC1.EoMLoadCreate(data.loadCreateData);    // create order 
        })

        describe('Search for specific load in EOM', async () => {           
            await eOMe2eTC2.EOMLoadSearch(data.loadSearchData, data.loadCreateData);   // search for order you created 
        });

        describe("Verify Hazamat Load Creation", () => {
            it("Verify Hazmat is underneath MONITORS", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfLoadDetails();
                await expect<any>(orderDetailsViewPage.verifyMonitorMessage()).toBe(data.monitorLabelText);   // verify things on the order you created before
            });

            it("Verify Hazmat is underneath CLASSIFICATIONS", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
                await expect<any>(orderDetailsViewPage.verifyClassificationText()).toBe(data.classificationLabelText);
            });
        });

    });

});