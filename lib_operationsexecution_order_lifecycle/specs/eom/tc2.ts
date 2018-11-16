import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { DetailsPage } from "../../pages/eom/details.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { CommentsPage } from "../../pages/eom/comments.po";
import { DataDemo } from "../../data/datademo";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let loadDetailsPage = new DetailsPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let skeletonListingPage = new SkeletonListingPage();
let commentsPage = new CommentsPage();
let using = require('jasmine-data-provider');

//export class EOME2EComponents {
using(DataDemo.Suite_demo, async function(data){
//async EOMLoadSearch(searchData, loadData) {
       
    describe('Search for specific load in EOM', async () => {
        
        it('Should Launch Enterprise Order Management Application And Login', async () => {                
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("Verifying That Enterprise Order Management Page Is Displayed", async function () {
            expect<any>(await enterpriseOrderManagementPage.getPageTitle()).toBe(data.enterpriseOrderManagementTitle);
        });

        it("Should Ensure ''LOAD#'' Is Selected And Enter Load Number In The 'Search Value' Box", async () => {
            await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.searchOption, data.orderNumber);
        });

        it("Should Click The Search Loads Button", async function () {
            await enterpriseOrderManagementPage.clickSearchLoadsButton();
        });

        it('Should Click On Load Number Hyperlink', async () => {
            await enterpriseOrderManagementPage.clickLoadNumber(data.orderNumber);
        });

        it("Verifying Order Details Page Is Displayed", async function () {
            let precisionLableText = data.precisionLableText.replace("#", data.orderNumber)
            await expect<any>(orderDetailsViewPage.verifyDispatchedMessage()).toContain(precisionLableText);
        });
    });
});

