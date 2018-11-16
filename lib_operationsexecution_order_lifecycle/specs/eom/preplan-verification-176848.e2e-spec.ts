import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { DetailsPage } from "../../pages/eom/details.po";
import { DataProvider } from '../../data/dataprovider';


let enterpriseOrderManagement = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let detailsPage = new DetailsPage();
let using = require('jasmine-data-provider');

//Tc_176848: EOM Preplan Verification  
using(DataProvider.Tc_176848, async function (data) {
    describe("Preplan Verification", () => {
        let orderNumber: string;

        it("Should open My JBHunt url", async () => {
            await enterpriseOrderManagement.navigateToAppHome(enterpriseOrderManagement.eomUrl);
        });

        it("Should select LOAD # from Search Option drop down and  load value in search input field", async () => {
            await enterpriseOrderManagement.setValuesInDataSpecificSearch(data.tabName, data.searchValue);
        });

        it("Should click on Search Loads button", async () => {
            await enterpriseOrderManagement.clickOnEOMButton(data.searchLoadsID);
        });

        it("Waiting till processing", async () => {
            await enterpriseOrderManagement.waitTillProcessing(data.pageLoadText);
        });

        it("Should click on the hyperlink under Load #", async () => {
            await skeletonListingPage.selectLoadUnderLoadListing(data.searchValue);
        });

        it("Should click on the 'Load Details' Arrow Icon", async () => {
            await detailsPage.loadDetailsClick();
        });

        it("Should verify that the Preplan was created successfully", async () => {
            let tractorNumber = await detailsPage.verifyPPNote();
            expect (tractorNumber).not.toBeUndefined();
        })
    });
});

