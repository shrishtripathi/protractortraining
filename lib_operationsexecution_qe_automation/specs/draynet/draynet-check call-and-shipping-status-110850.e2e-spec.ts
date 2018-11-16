import { DraynetHomePage } from "../../pages/draynet/draynet4-home.po";
import { OrderListPage } from "../../pages/draynet/order-list.po";
import { DataProvider } from "../../data/dataProvider";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let draynetHomePage = new DraynetHomePage();
let orderListPage = new OrderListPage();
let using = require('jasmine-data-provider');

//#110850 Draynet_Regression_1_Check Call and Shipping Status 
using(DataProvider.Tc_110850, async function (data) {
    describe("Check Call and Shipping Status ", () => {
        it("Should Open My JBHunt url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.myJbhuntUrl);
        });

        it("Should Click on Show my app link on JbHunt home page", async () => {
            await myJbHuntHomePage.clickOnShowMoreAppLink();
        });

        it("Should Click on Draynet 4.0 link from left Navigation", async () => {
            await myJbHuntHomePage.clickonDraynet();
        });

        it("Verifying  'Draynet' page opens", async () => {
            await expect<any>(draynetHomePage.verifyDrynetPage()).toBeTruthy();
        });

        it("Should set Division to 'HJBT JBVAN'", async () => {
            await draynetHomePage.selectDivision(data.selectDivision);
        });

        it("Should set Project to 'A!01'", async () => {
            await draynetHomePage.selectProject(data.project);
        });

        it("Should click search ", async () => {
            await draynetHomePage.clickSearchButton();
        });
        
        it("Click on a clickable CC button  ", async () => {
            await orderListPage.clickCheckCall();
        });

        it("Exit Check Call pop up box ", async () => {
            await orderListPage.closeCheckCall()
        });

        it("Click SS to update shipping status  ", async () => {
            await orderListPage.clickSS();
            await orderListPage.waitForElementIsVisible(orderListPage.shipStatus);
            await (expect(await orderListPage.shipStatus.isPresent())).toBe(true)
        });

        it("Click Cancel ", async () => {
            await orderListPage.clickCancel();
            await orderListPage.waitForElementIsVisible(orderListPage.orderNumberSearch);
            await (expect(await orderListPage.orderNumberSearch.isPresent())).toBe(true)
        });
    });
});