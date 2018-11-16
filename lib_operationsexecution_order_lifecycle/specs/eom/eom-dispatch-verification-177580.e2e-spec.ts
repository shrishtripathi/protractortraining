import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let using = require('jasmine-data-provider');

//TC 177580: EOM Dispatch Verification
using(DataProvider.Tc_177580, async function (data) {

    describe("EOM Dispatch Verification", () => {

        it("Should open EOM url", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("Verifying that EOM page is displayed", async function () {
            await expect<any>(browser.getTitle()).toBe(data.eomTitle);
        });

        it("Enter load number in the 'Search Value' box", async function () {
            await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.searchOption, data.searchValue);
        });

        it("Click the Search Loads button", async function () {
            await enterpriseOrderManagementPage.clickSearchLoadsButton();
        });

        it("Verify Status is Dispatched", async function () {
            await expect<any>(enterpriseOrderManagementPage.verifyLoadStatus()).toContain(data.dispatchStatus);
        });

    })

});