import { BasePage } from '../../pages/base.po';
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { PickupviewPage } from '../../pages/freight_manager/pick-up-view.po';
import { DataProvider } from "../../data/dataProvider";
import { async } from '../../node_modules/@types/q';

let basePage = new BasePage();
let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let pickupviewPage = new PickupviewPage();
let using=require('jasmine-data-provider');
//TC_79802_TFS - FM2_Regression_10 Test changes to parameters in Pickup
using(DataProvider.Tc_79802, async function(data){

describe("Test changes to parameters in Pickup", function () {

    it("Should Open My JBHunt url", async () => {
        await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url)
    });

    it("Should select 'PICK UP' under planning tab", async () => {
        await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.pickUpOption);
    });

    it("Should type 'HJBT JBVAN' in division field ", async () => {
        await pickupviewPage.enterDivision(data.strDivison);
    });

    it("Should type 'MKT' in Area type field ", async () => {
        await pickupviewPage.setText(pickupviewPage.text_AreaType,data.strAreaType);
    });

    it("Should type 'DA' in Area field ", async () => {
       await  pickupviewPage.enterArea(data.strArea);
    });

    it("Should type 'I' in Tran Md  field ", async () => {
        await pickupviewPage.clearText(pickupviewPage.text_TranMD1);
        await pickupviewPage.clearText(pickupviewPage.text_TranMD2);
        await pickupviewPage.setText(pickupviewPage.text_TranMD1,data.strTranMd);
    });

    it("Should click 'Search' button", async () => {
        await basePage.clickSearchButton();
    });

    it("Verifying that orders are pulled into list ", async () => {
       await  pickupviewPage.numOfRows();
    });
});
})