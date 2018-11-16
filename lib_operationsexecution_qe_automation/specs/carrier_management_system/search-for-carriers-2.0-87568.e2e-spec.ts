import { CarrierManagementPage } from "../../pages/carrier_management_system/carrier-management-po";
import { SpecificCarrierSearchPage } from "../../pages/carrier_management_system/specific-carrier-search-po";
import { DataProvider } from "../../data/dataProvider";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";

let carrierManagementPage = new CarrierManagementPage();
let specificCarrierSearchPage = new SpecificCarrierSearchPage();
let myJbHuntHomePage = new MyJbHuntHomePage();
let using = require('jasmine-data-provider');

//TC 87568: CMS_Regression_6 Search for carriers 2.0
using(DataProvider.TC_87568, async function (data) {

    describe("Search for carriers 2.0 ", () => {

        let userName: string;

        it("Should open My JBHunt url", async ()=> {            
            await carrierManagementPage.navigateToAppHome(carrierManagementPage.myJbhuntUrl);
        });
       
        it("Should cick on Show my app link on JbHunt home page", async()=> {
            await myJbHuntHomePage.clickOnShowMoreAppLink();
            userName = await myJbHuntHomePage.getUserName();
        });
     
        it("Should click on Carrier Management link from left Navigation", async ()=> {
            await myJbHuntHomePage.clickOnAppLink(data.carrierManagement);
        });

        it("Verifying that redirected to Carrier management system Page", async () => {
            await expect<any>(carrierManagementPage.getPageTitle()).toBe(data.CMSPageTitle);
        });

        it("Should click on Specific Carrier Search link ", async () => {
            await carrierManagementPage.clickOnLinkButton(data.specificCarrierSearchlink);
        });

        it("Should select Dot Number from Search Type drop down", async () => {
            await specificCarrierSearchPage.selectOptionFromSearchType(data.searchTypeDropDownValue);
        });

        it("Should enter Dot Number value 239936 in search input field", async () => {
            await specificCarrierSearchPage.setTextInSearchInput(data.dotNumberValue);
        });

        it("Should click on Search button ", async () => {
            await specificCarrierSearchPage.clickOnLinkButton(data.searchButton);
        });

        it("Should click on Cancel button ", async () => {
            await carrierManagementPage.clickOnLinkButton(data.cancelButton);
        });

        it("Should select MC Number from Search Type drop down", async () => {
            await specificCarrierSearchPage.selectOptionFromSearchType(data.searchTypeDropDownValue1);
        });

        it("Should enter Dot Number value 239936 in search input field", async () => {
            await specificCarrierSearchPage.setTextInSearchInput(data.dotNumberValue1);
        });

        it("Should click on Search button ", async () => {
            await specificCarrierSearchPage.clickOnLinkButton(data.searchButton);
        });

        it("Should click on Cancel button ", async () => {
            await specificCarrierSearchPage.clickOnLinkButton(data.cancelButton);
        });

        it("Should select Email Address from Search Type drop down", async () => {
            await specificCarrierSearchPage.selectOptionFromSearchType(data.searchTypeDropDownValue2);
        });

        it("Should enter Email Address as OSCARSTT@YAHOO.COM  in search input field", async () => {
            await specificCarrierSearchPage.setTextInSearchInput(data.emailAdressesValue);
        });

        it("Should click on Search button ", async () => {
            await specificCarrierSearchPage.clickOnLinkButton(data.searchButton);
        });

        it("Should click on Export to Excel ", async () => {
            await specificCarrierSearchPage.clickOnExportToExcel();
        });

        it("Verifying that downloaded excel is available in Downloads folder ", async () => {
            await expect(await specificCarrierSearchPage.verifyDownloadedExcel(userName)).toBeTruthy();
        });

        it("Should click on Logout ", async () => {
            await specificCarrierSearchPage.clickOnLogOutLink();
        });

    });

});