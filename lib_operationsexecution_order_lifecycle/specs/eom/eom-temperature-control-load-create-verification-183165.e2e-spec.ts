import { BasePage } from "../../pages/base.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { browser } from "protractor";
import { DataProvider } from "../../data/dataProvider";
import { DetailsPage } from "../../pages/eom/details.po";
import { EomSearchPage } from "../../pages/eom/eom-search-page.po";

let basePage = new BasePage();
let eomSearchPage = new EnterpriseOrderManagementPage();
let orderSearchPage = new EomSearchPage();
let loadDetailsPage = new DetailsPage();
let using = require('jasmine-data-provider');
const loadNumber = "M534761";

//TC 183165: EOM Temperature Control Load Create Verification
using(DataProvider.Tc_183165, async function (data) {

    describe("EOM Temperature control Load Create Verification", () => {

        it("Should Launch EOM Search Page Application And Login If Required ", async () => {
            await basePage.navigateToAppHome(basePage.eomUrl);
        });

        it("Verifying That Enterprise Order Management Page Is Displayed", async function () {
            await expect<any>(browser.getTitle()).toBe(data.loadSearchData.enterpriseOrderManagementTitle);
        }); 
        
        it("Should Ensure ''LOAD#'' Is Selected And Enter Load Number In The 'Search Value' Box", async () => {
            await eomSearchPage.setValuesInDataSpecificSearch(data.loadSearchData.searchOption, loadNumber);
        });

        it("Should Click The Search Loads Button", async function () {
            await eomSearchPage.clickSearchLoadsButton();
        });

        it('Should Click On Load Number Hyperlink', async () => {
            await eomSearchPage.clickLoadNumber(loadNumber);
        });

        it("Should click on dropdown tab next to Bill To GEEC", async () => {
            await loadDetailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
        });

        it("Should check whether Reefer is ", async () => {
            expect(await orderSearchPage.ensureReeferIsThere()).toBeTruthy();
        });
    
    });
});

