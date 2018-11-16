import { browser } from 'protractor';
import { DataProvider } from '../../data/dataprovider';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let using = require('jasmine-data-provider');

//TC #130595: Checking For Existing Skeletons EOM For HawkOne
using(DataProvider.Tc_130595, async function (data) {

    describe("Checking For Existing Skeletons EOM For HawkOne", () => {

        it("Should open EOM url", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("On the EOM home page enter 'STSE99' in ''BILL TO CODE'' field", async () => {
            await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
        });

        it("Click on 'SEARCH SKELETON' BUTTON", async () => {
            await enterpriseOrderManagementPage.clickOnEOMButton(data.searchSkeltonButton);
        });

        it("Verifying that skeletons list will be displayed", async ()=> {
            expect(await skeletonListingPage.verifySkeltonList(0)).toBeTruthy();   
        });

        it("Verifying that there is at least one TRUCK row to make it easier to book loads", async ()=> {
            expect(await skeletonListingPage.verifySkeletonListHavingTruck()).toBeTruthy();   
        });

    });

});
    