import { DataProvider } from "../../data/dataProvider";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let using = require('jasmine-data-provider');

//TC #135644 : HawkOne - EOM searching for skeleton Manual MCCHA5 book 8 loads
using(DataProvider.Tc_135644, async function (data) {

    describe("HawkOne - EOM searching for skeleton Manual MCCHA5 book 8 loads", () => {

        it("should open EOM home page", async function () {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("Should enter 'MCCHA5' in Bill To Code Field", async () => {
            await enterpriseOrderManagementPage.enterTextInTextBox(data.billToCodeInputField, data.billToCodeText, data.billToCodeLabel)
        });

        it("Should click on 'SEARCH SKELETONS' button", async () => {
            await enterpriseOrderManagementPage.clickOnbutton(data.searchSkeltonButton, data.searchSkeletonsText);
        });

        it("Should click on skeleton with 'Division = HJBT JBVAN' and 'Mode = TRUCK'", async () => {
            await skeletonListingPage.clickOnSkelton(data.divisionColumn, data.modeColumn, data.division, data.mode);
        });

    });
    
});
