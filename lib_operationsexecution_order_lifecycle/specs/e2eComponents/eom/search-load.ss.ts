import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { browser } from "protractor";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";

// Search Load
export class SearchLoadE2EComponents {

    async EOMLoadSearch(searchData, loadNumber) {
        
        let eomSearchPage = new EnterpriseOrderManagementPage();
        let orderDetailsViewPage = new OrderDetailsViewPage();

        describe('Search for specific load in EOM', async () => {

            it('Should Launch Enterprise Order Management Application And Login', async () => {                
                await eomSearchPage.navigateToAppHome(eomSearchPage.eomUrl);
            });
    
            it("Verifying That Enterprise Order Management Page Is Displayed", async function () {
                expect<any>(await browser.getTitle()).toBe(searchData.enterpriseOrderManagementTitle);
            });
    
            it("Should Ensure ''LOAD#'' Is Selected And Enter Load Number In The 'Search Value' Box", async () => {
                await eomSearchPage.setValuesInDataSpecificSearch(searchData.searchOption, loadNumber);
            });
    
            it("Should Click The Search Loads Button", async function () {
                await eomSearchPage.clickSearchLoadsButton();
            });
    
            it('Should Click On Load Number Hyperlink', async () => {
                await eomSearchPage.clickLoadNumber(loadNumber);
            });
    
            it("Verifying Order Details Page Is Displayed", async function () {
                let precisionLableText = searchData.precisionLableText.replace("#", loadNumber)
                await expect<any>(orderDetailsViewPage.verifyDispatchedMessage()).toContain(precisionLableText);
            });
        });
    }
}
