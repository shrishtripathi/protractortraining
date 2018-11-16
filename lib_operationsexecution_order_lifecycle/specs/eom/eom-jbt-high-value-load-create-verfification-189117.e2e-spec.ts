import { DataProvider } from "../../data/dataProvider";
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let using = require('jasmine-data-provider');

//TC 189117:EOM JBT High Value Load Create Verfification
using(DataProvider.Tc_189117, async function (data) {

    describe("EOM JBT High Value Load Create Verfification", () => {
               
            it('Should open Eom url', async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl)
            });

            it('In the white text box next to LOAD#, enter load number', async () => {
                await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.searchOption, data.loadNumber);
            });

            it("Should click on Search Loads button", async () => {
                await enterpriseOrderManagementPage.clickSearchLoadsButton();
            });
 
            it("Click on load hyperlink", async () => {
                await enterpriseOrderManagementPage.clickOnLoadHyperlink(data.loadNumber);
            });
            
            it("Click load details drop down box ", async () => {
                await await orderDetailsViewPage.loadDetailsClick();
            });
            
            it("Ensure H shows as monitor code", async () => {
                await await enterpriseOrderManagementPage.verifyMonitorCode();
            });
            it("Ensure Mode is TRUCK", async () => {
                await await enterpriseOrderManagementPage.verifyMode();
            });
        })
    });
