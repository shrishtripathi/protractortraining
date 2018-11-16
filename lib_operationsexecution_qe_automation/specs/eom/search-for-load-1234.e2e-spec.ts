import { browser } from "protractor";
import { DataProvider } from "../../data/dataprovider";
import { MyJbHuntHomePage } from "../../pages/eom/my-jbhunt-home.po";
import { FreightManager2Page } from "../../pages/eom/freight-manager-2.po";
import { PickupviewPage } from "../../pages/eom/pick-up-view.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let pickupviewPage = new PickupviewPage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let using = require('jasmine-data-provider');

//Example failure TC 
using(DataProvider.TC_1234, async function (data) {

    describe("Searching for a specific load", () => {

        it("Launch EOM", async () => {
            await pickupviewPage.navigateToAppHome(pickupviewPage.eomUrl);
        });

        it("Should select LOAD # from Search Option drop down and  load value in search input field", async () => {
            await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.loadText, data.orderNumber);
        });

        it("Should click on Search Loads button", async () => {
            await myJbHuntHomePage.clickOnEOMButton(data.searchLoadButton);
        });

        it("Waiting till processing", async () => {
            await myJbHuntHomePage.waitTillProcessing(data.searchingSkeletonsText);
        });

        it("Verifying that loads will be displayed", async () => {
            expect<any>(await skeletonListingPage.verifyLoadValue()).toBe(data.orderNumber);
        });

    });

});