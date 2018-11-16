import { DataProvider } from "../../data/dataProvider";
import { ShopfloorHomePage } from "../../pages/shopfloor/shopfloor.homepage.po";
import { browser } from "protractor";
import { ShopManagementPage } from "../../pages/shopfloor/shop-management.po";
let shopfloorHomePage=new ShopfloorHomePage();
let shopManagementPage=new ShopManagementPage();
let using = require('jasmine-data-provider');
//#158278_Shop management, user profile
using(DataProvider.TC_158278, async function (data) {
    describe("Shop management, user profile", () => {
        
        it("Should Open road contact service url", async () => {
            await shopfloorHomePage.openshopfloorURL()
        });

        it("Should login into shop floor application", async function () {
            await shopfloorHomePage.login(data.userid, data.password);
        });

        it("Verifying that redirected to shopfloor Page", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.shopfloorPageTitle);
        });

        it("Should hover on shop management tab and select 'User Profile'", async function () {
            await shopfloorHomePage.hoverOnDropdownAndSelectOption(data.shopManagementDropdown, data.userProfileOption);
        });

        it("Should click the dropdown tab next to Primary Work Location, click to select CORPADM", async function () {
            await shopManagementPage.setDropdown(shopManagementPage.primaryWorkLocation, data.primaryWorkLocationOption);
        });

        it("Should Click the dropdown tab next to My Home Page, click to select Shop Assignments-All. ", async function () {
            await shopManagementPage.setDropdown(shopManagementPage.myHomePage, data.myHomePageOption);
        });

        it("Should click the dropdown tab next to Default Locations,, click to select LOWAR.  ", async function () {
            await shopManagementPage.setDropdown(shopManagementPage.deafultLocation, data.defaultLocationOption);
        });

        it("Should click save button", async function () {
            await shopManagementPage.click(shopManagementPage.savebutton);
            await shopManagementPage.acceptingAlert();
        });

        it("Verifying that redirected to shopfloor login Page", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.shopfloorLoginPageTitle);
        });

    });
});