import { BasePage } from "../../pages/base.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { DataProvider } from "../../data/dataProvider";
import { EomSearchPage } from "../../pages/eom/eom-search-page.po";

let basePage = new BasePage();
let eomSearchPage = new EnterpriseOrderManagementPage();
let orderSearchPage = new EomSearchPage();
let using = require('jasmine-data-provider');
const loadNumber = "M539139";

//Tc_183292: EOM International Check Call Verification Completed  
using(DataProvider.Tc_183292, async function (data) {
    describe("EOM International Check Call Verification Completed", () => {

        it("Should Launch EOM Search Page Application And Login If Required ", async () => {
            await basePage.navigateToAppHome(basePage.eomUrl);
        });

        it("Should Ensure ''LOAD#'' Is Selected And Enter Load Number In The 'Search Value' Box", async () => {
            await eomSearchPage.setValuesInDataSpecificSearch(data.searchOption, loadNumber);
        });

        it("Should Click The Search Loads Button", async function () {
            await eomSearchPage.clickSearchLoadsButton();
        });

        it('Should Click On Load Number Hyperlink', async () => {
            await eomSearchPage.clickLoadNumber(loadNumber);
        });

        it('Should make sure load is displayed and status is empty', async () => {
            expect(await orderSearchPage.getLoadStatusMessage()).toContain(data.loadStatus);
        });

        it('Should have Arrival heading under origin ', async () => {
            expect(await orderSearchPage.getArrivalHead()).toEqual(data.arrivalHead);
        });

        it('Should have Completionb heading under origin ', async () => {
            expect(await orderSearchPage.getCompletionHead()).toEqual(data.completionHead);
        });

        it('Should check whether Arival time is displayed ', async () => {
            expect(await orderSearchPage.isArrivalTimeDisplayed()).toBeTruthy();
        });

        it('Should check whether Completion time is displayed ', async () => {
            expect(await orderSearchPage.isCompletionTimeDisplayed()).toBeTruthy();
        });

        it('Should check whether reciever location is displayed ', async () => {
            expect(await orderSearchPage.isRecieverLocationDisplayed()).toBeTruthy();
        });

    });
});

