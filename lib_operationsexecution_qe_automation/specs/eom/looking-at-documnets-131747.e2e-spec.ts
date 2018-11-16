import { MyJbHuntHomePage } from "../../pages/eom/my-jbhunt-home.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { DataProvider } from '../../data/dataprovider';
import { ServicePointPage } from "../../pages/eom/service-point-po";
import { browser } from "protractor";
import { protractor } from "protractor/built/ptor";

let myJbHuntHomePage = new MyJbHuntHomePage();
let enterpriseOrderManagement = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let servicePointPage = new ServicePointPage();

let using = require('jasmine-data-provider');


//TC #131747: EOM_Regressions_24 Looking at documnets 
using(DataProvider.Tc_131747, async function (data) {

    describe("Looking at documnets", function () {

        it("Should open My JBHunt url", async () => {
            await myJbHuntHomePage.openEomUrl();
        });

        it("Should select LOAD # from Search Option drop down and  load value in search input field", async () => {
            await enterpriseOrderManagement.setValuesInDataSpecificSearch(data.tabName, data.searchValue);
        });

        it("Should click on Search Loads button", async () => {
            browser.actions().sendKeys(protractor.Key.ENTER).perform();
        });

        it("Waiting till processing", async () => {
            await myJbHuntHomePage.waitTillProcessing(data.pageLoadText);
        });

        it("Verifying that loads will be displayed", async () => {
            expect<any>(await skeletonListingPage.verifyLoadValue()).toBe(data.searchValue);
        });

        it("Click on the hyperlink under Load #", async () => {
            await skeletonListingPage.selectLoadUnderLoadListing(data.searchValue);
        });

        it("Click on DOCUMENTS tab", async () => {
            await orderDetailsViewPage.documentsTabClick();
        });

        it("Click on a load in the servicepoint tab.", async () => {
            await servicePointPage.clickOnLoadValue(data.searchValue);
        });

        it("Verify the document opens and displays, could be any number of documents.", async () => {
            expect(await servicePointPage.verifyDocumentOpened()).toBe(true);
        });

        it("close Service Point Tab", async () => {
            await servicePointPage.closeServicePointTab()
        });

    });
});