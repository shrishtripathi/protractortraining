import { DataProvider } from "../../data/dataProvider";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { browser, protractor, ActionSequence } from "protractor";
import { DetailsPage } from "../../pages/eom/details.po";
import { CommentsPage } from "../../pages/eom/comments.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let detailsPage = new DetailsPage();
let commentsPage = new CommentsPage();
let using = require('jasmine-data-provider');

//TC #131775: EOM_Regression_33 Using Hot Keys to Comment 
using(DataProvider.Tc_131787, async function (data) {

    describe("Using Hot Keys to Comment ", () => {
       

        //TC #85215:EOM_Regression_17 Searching for skeletons

        it("Should open My JBHunt url", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("Should enter 'LGFO18' in 'ORIGIN'' field", async () => {
            await enterpriseOrderManagementPage.setOrigin(data.origin);
        });

        it("Should click ''SEARCH SKELETON'' BUTTON", async () => {
            await enterpriseOrderManagementPage.clickOnEOMButton(data.searchSkeltonButton);
        });

        //TC #80537: EOM_Regression_15 Using Hot Keys to navigate and select skeletons
        it("Should click on 'HJBT JBVAN' division", async () => {
            await enterpriseOrderManagementPage.skeletonListingTable();
        });

        it("Verifying that skeltons pick screen will be displayed", async () => {
            await expect<any>(skeletonListingPage.getSkeltonPickScreenTitle()).toBe(data.skeltonPickUpDateScreen);
        });

        it("Should type 2 to number of copies", async () => {
            await skeletonListingPage.setNumberOfCopies(data.numberOfCopies);
        });

        it("Should press tab key", async () => {
            await browser.actions().sendKeys(protractor.Key.TAB).perform();
        });

        it("Should Select exact", async () => {
            await skeletonListingPage.setDropDownBesideNumberOfCopies(data.dropdownOption);
        });

        it("Should press ALT 5 key", async () => {
           await  new ActionSequence(browser.driver).keyDown(protractor.Key.ALT).sendKeys("5").keyUp(protractor.Key.ALT).perform();
        });

        it("Verifying fleet decision page", async () => {
            await expect<any>(detailsPage.setReasonCode(data.reasonCodeValue)).toBe(data.fleetdecisionTitle);
        });

        it("Should click on TRUCK", async () => {
            await detailsPage.clickOnModeTypeUnderCurrentDate();
        });

        //TC #131775: EOM_Regression_29 Using Hot Keys to Comment 
        it("Should press ALT 9 key", async () => {
            await new ActionSequence(browser.driver).keyDown(protractor.Key.ALT).sendKeys("9").keyUp(protractor.Key.ALT).perform();
       });

        it("Verifying comments tab", async () => {
            await expect<any>(commentsPage.verifyCommentsTab()).toContain(data.commentsText);
        });

        it("Click the dropdown tab underneath Type, click GENERAL.", async () => {
            await commentsPage.commentsTypeValueSelection(data.commentType);
        });

        it("Under LOCATION type LOWAR", async () => {
            await commentsPage.setLocation(data.location);
        });

        it("Should hit tab", async () => {
            await browser.actions().sendKeys(protractor.Key.TAB).perform();
        });

        it("In the COMMENT box type, 'Hello From Other Side' ", async () => {
            await commentsPage.setComments(data.comment1);
        });

    });

});