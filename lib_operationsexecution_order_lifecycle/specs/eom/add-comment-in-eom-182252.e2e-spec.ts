import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { DetailsPage } from "../../pages/eom/details.po";
import { DataProvider } from "../../data/dataProvider";
import { CommentsPage } from "../../pages/eom/comments.po";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let loadDetailsPage = new DetailsPage();
let commentsPage = new CommentsPage();
let using = require('jasmine-data-provider');

// TC #182252 - Add Comment in EOM
using(DataProvider.Tc_182252, async function (data) {

    describe("Add Comment in EOM", function () {

        it("Should open EOM url", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("Should select LOAD # from Search Option drop down and enter  load value in search input field", async () => {
            await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.tabName, data.orderNumber);
        });

        it("Should click on Search Loads button", async () => {
            await enterpriseOrderManagementPage.clickSearchLoadsButton();
        });

        it("Verifying that loads will be displayed", async () => {
            expect<any>(await skeletonListingPage.verifyLoadValue()).toBe(data.orderNumber);
        });

        it("Should click on the hyperlink under Load #", async () => {
            await skeletonListingPage.selectLoadUnderLoadListing(data.orderNumber);
        });

        it("Should click on the COMMENTS tab on the EOM load details screen ", async () => {
            await loadDetailsPage.commentsTabClick();
            await commentsPage.waitForPageLoad();
        });

        it("Should select 'GENERAL' option underneath Type dropdown", async () => {
            await commentsPage.selectOptionFromType(data.zero, data.commentType);
        });

        it("Verifying that GENERAL selected in Type dropdown", async () => {
            expect(await commentsPage.getTypeDropdownValue(data.zero)).toBe(data.commentType);
        });

        it("Should enter 'THIS IS A TEST DO NOT BOOK IN PRODUCTION!' in the COMMENT box ", async () => {
            await commentsPage.setTextInCommentField(data.zero, data.commentOne);
            await commentsPage.waitForPageLoad();
            await commentsPage.setTextInCommentField(data.zero, data.commentOne);
        });

        it("Should click on '+' sign ", async () => {
            await commentsPage.clickOnPlusSign(data.zero);
        });

        it("Should select 'GENERAL' option underneath Type dropdown", async () => {
            await commentsPage.selectOptionFromType(data.one, data.commentType);
            await commentsPage.waitForPageLoad();
            await commentsPage.selectOptionFromType(data.one, data.commentType);
        });

        it("Should enter 'THIS IS A TEST DO NOT BOOK IN PRODUCTION!' in the COMMENT box ", async () => {
            await commentsPage.setTextInCommentField(data.one, data.commentTwo);
            await commentsPage.waitForPageLoad();
            await commentsPage.setTextInCommentField(data.one, data.commentTwo);
        });

        it("Should click on 'SAVE COMMENTS' ", async () => {
            await commentsPage.clickSaveComments();
        });

        it("Verifying that 'COMMENTS UPDATED SUCCESSFULLY' message is displayed", async () => {
            let message: string = await commentsPage.verifyCommentsSucessMessage();
            expect(message).toBe(data.updateMessage)
        });

    });

});