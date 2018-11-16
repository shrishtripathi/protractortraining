import { MyJbHuntHomePage } from "../../Pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";
import { DeliveryPage } from "../../pages/freight_manager/delivery.po";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";


let myJbHuntHomePage = new MyJbHuntHomePage();
let deliveryPage = new DeliveryPage();
let freightManagerPage = new FreightManager2Page();
let using=require('jasmine-data-provider');
// TC_79803: FM2_Regression_11 Test changes to parameters in Delivery

using(DataProvider.Tc_79803, async function(data){

describe("User changes the parameters in Delivery", function () {

    it("Should open homepage", async () => {
        myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url);
    });

    it("Hover Planning Option from header", async () => {
        await freightManagerPage.hoverOverFM2PageHeaderOption(data.tabName);
    });

    it("Click on Delivery Option", async () => {
        await freightManagerPage.clickHeaderDropDownOption(data.option);
    });

    it("Refresh page to reflect parameters", async () => {
        await freightManagerPage.refreshPage();
    });

    it("Enter parameters on delivery view screen", async () => {
        await deliveryPage.setSearchParameters(data.strType, data.strDivison, data.strAreaType, data.strArea, data.strFleetType);
    });

    it("Click search on delivery view page", async () => {
        await deliveryPage.clickOnSearch();
    });

    it("Verify the search result based on Area - WB", async () => {
        let result: boolean = await deliveryPage.verifySearchResults(data.strArea);
        await expect(result).toBeTruthy();
    });

    it("Change area as 'DA' on delivery view screen", async () => {
        await deliveryPage.setSearchParameters(data.strType, data.strDivison, data.strAreaType, data.strAreaDa, data.strFleetType);
    });

    it("Click search on delivery page", async () => {
        await deliveryPage.clickSearchButton();
    });

    it("Verify the search results based on Area-DA", async () => {
        let result: boolean = await deliveryPage.verifySearchResults(data.strAreaDa);
        await expect(result).toBeTruthy();
    });

});
})
