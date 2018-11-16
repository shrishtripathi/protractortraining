import { DataProvider } from "../../data/dataProvider";
import { ShopfloorHomePage } from "../../pages/shopfloor/shopfloor.homepage.po";
import { browser } from "protractor";
import { ShopManagementPage } from "../../pages/shopfloor/shop-management.po";
let shopfloorHomePage=new ShopfloorHomePage();
let shopManagementPage=new ShopManagementPage();
let using = require('jasmine-data-provider');
//#158283_Shop management, Clock in-out
using(DataProvider.TC_158283, async function (data) {
    describe("Clock in-out", () => {
        
        it("Should Open road contact service url", async () => {
            await shopfloorHomePage.openshopfloorURL()
        });

        it("Should login into shop floor application", async function () {
            await shopfloorHomePage.login(data.userid, data.password);
        });

        it("Verifying that redirected to shopfloor Page", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.shopfloorPageTitle);
        });

        it("Should hover on clock in/out tab and select 'start shift'", async function () {
            await shopfloorHomePage.hoverOnDropdownAndSelectOption(data.clockInOut, data.startShift);
            await shopManagementPage.acceptingAlert();
        });

        it("Should hover on clock in/out tab and select 'end shift - lunch'", async function () {
            await shopfloorHomePage.hoverOnDropdownAndSelectOption(data.clockInOut, data.endShift);
            await shopManagementPage.acceptingAlert();
        });

        it("Verifying that redirected to shopfloor login Page", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.shopfloorLoginPageTitle);
        });

        it("Should login into shop floor application", async function () {
            await shopfloorHomePage.login(data.userid, data.password);
        });

        it("Verifying that redirected to shopfloor Page", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.shopfloorPageTitle);
        });

        it("Should hover on clock in/out tab and select 'start shift'", async function () {
            await shopfloorHomePage.hoverOnDropdownAndSelectOption(data.clockInOut, data.startShift);
            await shopManagementPage.acceptingAlert();
        });

        it("Should hover on clock in/out tab and select 'end shift'", async function () {
            await shopfloorHomePage.hoverOnDropdownAndSelectOption(data.clockInOut, data.endShiftEOD);
            await shopManagementPage.acceptingAlert();
        });

        it("Verifying that redirected to shopfloor login Page", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.shopfloorLoginPageTitle);
        });

        
        



    });
});