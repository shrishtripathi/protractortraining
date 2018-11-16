import { DraynetHomePage } from "../../pages/draynet/draynet4-home.po";
import { DataProvider } from "../../data/dataProvider";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
let myJbHuntHomePage = new MyJbHuntHomePage();
let draynetHomePage = new DraynetHomePage();

let using = require('jasmine-data-provider');

//#110851_Draynet_Regression_2 Load Dropdown Box Options
using(DataProvider.Tc_110851, async function (data) {
describe("Load Dropdown Box Options", () => {
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

    it("Should click Arrow next to order number", async () => {
        await draynetHomePage.clickOnArrowNextToOrderNumber();
    });

    it("Should click 'Charge lists' from list", async () => {
        await draynetHomePage.clickOnChargeLists();
    });

    it("Verifying  'Charge lists' window opens", async () => {
        await expect<any>(draynetHomePage.verifyChargeListWindowOpens()).toBeTruthy();
    });

    it("Should click red X to exit pop up box", async () => {
        await draynetHomePage.clickOnClose();
    });

    it("Verifying  'Draynet' page opens", async () => {
        await expect<any>(draynetHomePage.verifyDrynetPage()).toBeTruthy();
    });

    it("Should click Arrow next to order number", async () => {
        await draynetHomePage.clickOnArrowNextToOrderNumber();
    });

    it("Should select Communication Log from list", async () => {
        await draynetHomePage.clickOnCommunicationLogs();
    });

    it("Verifying  'Communication log' window opens", async () => {
        await expect<any>(draynetHomePage.verifyCommunicationLogWindowOpens()).toBeTruthy();
    });

    it("Should click red X to exit Communication Log screen", async () => {
        await draynetHomePage.clickOnClose();
    });

    it("Verifying  'Draynet' page opens", async () => {
        await expect<any>(draynetHomePage.verifyDrynetPage()).toBeTruthy();
    });

});
});
