import { MyJbHuntHomePage } from '../../pages/eom/my-jbhunt-home.po';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { DataProvider } from '../../data/dataprovider';
import { NewSkeletonDetailPage } from '../../pages/eom/new-skeleton-detail.po';

let myJbHuntHomePage = new MyJbHuntHomePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let newSkeletonDetailPage = new NewSkeletonDetailPage();
let using = require('jasmine-data-provider');

//Tc#136072 - EOM_Regression_9 Creating new skeletons for each division- HJBT JBDCS 
using(DataProvider.Tc_136072, async function (data) {

    describe("Creating new skeletons for each division- HJBT JBDCS", function () {

        it("Open EOM url", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("Enter values in customer geographical search", async () => {
            await enterpriseOrderManagementPage.setValuesCustomerGeographicalSearch(data.origin, data.destination);
        });

        it("Select search restriction", async () => {
            await enterpriseOrderManagementPage.setSearchRestrictions(data.true, data.false, data.false);
        });

        it("Click on search skeleton button", async () => {
            await myJbHuntHomePage.clickOnEOMButton(data.searchSkeltonButton);
        });

        it("Waiting till processing", async () => {
            await myJbHuntHomePage.waitTillProcessing(data.waitTillProcessingValue);
        });

        it("Select existing skeleton to create new skeleton", async () => {
            await newSkeletonDetailPage.verifySkeletonExistance(data.skeltonHJBTJBDCS, data.newSkeletonDetails);
        });

        it("Click on skeleton comments tab", async () => {
            await newSkeletonDetailPage.clickOnEOMTabs(data.commentsTab);
        });

        it("Enter new comment details in Skeleton comment page", async () => {
            await newSkeletonDetailPage.setDetailsInSkeletonCommentScreen(data.type, data.location, data.comment);
        });

        it("Click on save comment button", async () => {
            await myJbHuntHomePage.clickOnEOMButton(data.saveCommentButton);
        });

        it("Verify saved comment sucess message", async () => {
            let success: boolean = await newSkeletonDetailPage.verifySuccessMessageOnSave(data.sucessCommentMesaage);
           await expect(success).toBeTruthy();
        });

        it("Click on skeleton detail tab", async () => {
            await newSkeletonDetailPage.clickOnEOMTabs(data.detailsTab);;
        });

        it("Click on save changes button on skeleton detail page", async () => {
            await newSkeletonDetailPage.clickOnEOMButton(data.saveChangesButton);
        });

        it("Waiting till processing", async () => {
            await myJbHuntHomePage.waitTillProcessing(data.waitTillProcessing);
        });

        it("Verify success mesage", async () => {
            let success: boolean = await newSkeletonDetailPage.verifySuccessMessageOnSave(data.successfullyText);
            await expect(success).toBeTruthy();
        });

    });

});
