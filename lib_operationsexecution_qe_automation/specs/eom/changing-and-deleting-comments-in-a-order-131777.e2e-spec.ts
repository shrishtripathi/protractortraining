import { MyJbHuntHomePage } from "../../pages/eom/my-jbhunt-home.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { CommentsPage } from "../../pages/eom/comments.po";
import { DataProvider } from '../../data/dataprovider';
import { ServicePointPage } from "../../pages/eom/service-point-po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let enterpriseOrderManagement = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let servicePointPage = new ServicePointPage();
let commentsPage = new CommentsPage();
let using = require('jasmine-data-provider');

//TC 131777: EOM_Regressions_30 Changing and deleting comments in a order
using(DataProvider.Tc_131777, async function (data) {
    describe("Changing and deleting comments in a order", () => {
        
        it("Should open My JBHunt url", async () => {
            await myJbHuntHomePage.openEomUrl();
        });

        it("Should select LOAD # from Search Option drop down and  load value in search input field", async () => {
            await enterpriseOrderManagement.setValuesInDataSpecificSearch(data.tabName, data.searchValue);
        });
        
        it("Should click on Search Loads button", async () => {
            await myJbHuntHomePage.clickOnEOMButton(data.searchLoadsID);
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
            expect(await servicePointPage.verifyDocumentOpened()).toBeTruthy();
        });

        it("close Service Point Tab", async () => {
            await servicePointPage.closeServicePointTab()
        });

        //131748 EOM_Regression_25 Adding comments to a order
        it("Click on the COMMENTS tab on the EOM load details screen ", async () => {
            await orderDetailsViewPage.commentsTabClick();
        });

        it("Click the dropdown tab underneath Type, click GENERAL.", async () => {
            await commentsPage.commentsTypeValueSelection(data.commentType);
        });

        it("Under LOCATION type LOWAR", async () => {
            await commentsPage.setLocation(data.location);
        });

        it("In the COMMENT box type, Testing Made Easy123.", async () => {
            await commentsPage.setComments(data.comment1);
        });

        it("Click SAVE COMMENTS ", async () => {
            await commentsPage.clickSaveComments();
        });

        it("Should Green message displays, COMMENTS UPDATED SUCCESSFULLY.", async () => {
            let message: string = await commentsPage.verifyCommentsSucessMessage();
            expect(message).toBe(data.updateMessage)
        });

        //131777 EOM_Regressions_30 Changing and deleting comments in a order
        it("Click the pencil and paper icon next to any order. ", async () => {
            await commentsPage.clickEditPenPaperIcon();
        });

        it("Click the dropdown tab underneath the Type column, click to select any option besides the one currently selected. ", async () => {
            await commentsPage.selectDropdownOption();
        });

        it(" Change the comment, use letters and numbers.", async () => {
            await commentsPage.enterCommentsInEditLine(data.comment2);
        });

        it(" Click SAVE COMMENTS ", async () => {
            await commentsPage.clickSaveComments();
        });

        it("Should Green message displays, COMMENTS UPDATED SUCCESSFULLY.", async () => {
            let message: string = await commentsPage.verifyCommentsSucessMessage();
            expect(message).toBe(data.updateMessage)
        });

        it("Delete comment by clicking green X icon  ", async () => {
            await commentsPage.deleteComments();
        });

        it("Click SAVE COMMENTS  ", async () => {
            await commentsPage.clickSaveComments();
        });
    });
})