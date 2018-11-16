import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { DataProvider } from "../../data/dataProvider";

    
    //TC #131655: EOM | Search Skeleton - Book order 
    let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
    let skeletonListingPage = new SkeletonListingPage();
    let using = require('jasmine-data-provider');
  using(DataProvider.Tc_131689, async function (data) {
    
     describe("Search Skeleton - Book order", () => {

         it("On the EOM home page enter 'GEEC' in ''BILL TO CODE'' field", async () => {
               await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
           });

         it("Select HJBT JBHA funder search restrictions", async () => {
                await enterpriseOrderManagementPage.setSearchRestrictions(false, true, false)
           });

         it("Click ''SEARCH SKELETON'' BUTTON", async () => {
              await enterpriseOrderManagementPage.clickOnEOMButton(data.searchSkeltonButton);
           });

         it("Waiting till processing", async () => {
             await enterpriseOrderManagementPage.waitTillProcessing(data.waitTillProcessingValue);
           });

         it("Verifying that skeltons list will be displayed", async () => {
              await expect(skeletonListingPage.verifySkeltonList(0)).toBeTruthy();
           });

         it("Click green ''BOOK ORDER'' icon of chosen skeleton", async () => {
              await skeletonListingPage.clickOnBookIconHavingRequiredBillTo(data.billToCode);
           });

        });
    });

