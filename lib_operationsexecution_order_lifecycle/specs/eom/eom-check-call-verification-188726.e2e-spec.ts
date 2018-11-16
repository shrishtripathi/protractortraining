import { DataProvider } from "../../data/dataProvider";
import {EnterpriseOrderManagementPage} from "../../pages/eom/enterprise-order-management.po";

let using = require('jasmine-data-provider');
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();

//TC 188726: EOM Check Call Verification
using(DataProvider.Tc_188726, async function (data) {

    describe("EOM Check Call Verification", () => {

        it("Should open EOM url", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("Verifying that EOM page is displayed", async function () {
            await expect<any>(enterpriseOrderManagementPage.getPageTitle()).toBe(data.eomTitle);
        });

        it("Enter load number in the 'Search Value' box", async function () {
            await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.searchOption, data.searchValue);
        });

        it("Click the Search Loads button", async function () {
            await enterpriseOrderManagementPage.clickSearchLoadsButton();
        });

        it("Verify Status is Emptied", async function () {
            await expect<any>(enterpriseOrderManagementPage.verifyStatus()).toContain(data.status);
        });

    })

});