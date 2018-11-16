import { DataProvider } from "../../data/dataProvider";
import { DetailsPage } from "../../pages/eom/details.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let loadDetailsPage = new DetailsPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let eOME2EComponents = new EOME2EComponents();
let using = require('jasmine-data-provider');

let loadCreateVerificationData = Object.assign({}, DataProvider.Tc_177365);

using(loadCreateVerificationData, async (data) => {
    
    describe('EOM Hazmat load Creation verification', async () => {
        
        describe("Create Hazmat load in EOM", async () => {            
            await eOME2EComponents.eoMHazmatLoadCreate(data.loadCreateData); 
        })

        describe('Search for specific load in EOM', async () => {           
            await eOME2EComponents.eomLoadSearch(data.loadSearchData, data.loadCreateData); 
        });

        describe("Verify Hazmat Load Creation", () => {
            it("Verify Hazmat is underneath MONITORS", async () => {               
                await expect<any>(orderDetailsViewPage.verifyMonitorMessage()).toBe(data.monitorLabelText);
            });

            it("Verify Hazmat is underneath CLASSIFICATIONS", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
                await expect<any>(orderDetailsViewPage.verifyClassificationText()).toBe(data.classificationLabelText);
            });
        });

    });

});