import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { browser, element } from 'protractor';
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let using = require('jasmine-data-provider');

//TC_80864:FM2_Regression_33 Test Search Bar
using(DataProvider.Tc_80864, async function (data) {

    describe("User tests search bar", function () {

        it("Should open Freight Manager2 url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url);
        });

        it("Verifying that Freight Manger page is displayed", async function () {
            await expect(await freightManager2Page.verifyFreightManagerPage()).toBe(data.freightManagerTitle);
        });

        it("Should enter CCBDA in search field in FM2 page", async () => {
            await freightManager2Page.setTextInSearchInput(data.searchText1);
        });

        it("Should press Enter ", async () => {
            await freightManager2Page.pressEnter("Enter");
        });

        it("Verifying that Central Customer Information - Business Search page is displayed", async () => {
            var text = await freightManager2Page.getCentralCustomerInformation(data.centralCustomerInformationText);
            expect(text).toBe(data.centralCustomerText);
        });

        it("Should exit from the Central Customer Information and Verifying that Freight Manger page is displayed", async () => {
            expect(await freightManager2Page.getFreightManagerPage()).toBe(data.freightManagerTitle);
        });

        it("Should enter CAR142 in search field in FM2 page ", async () => {
            await freightManager2Page.setTextInSearchInput(data.searchText2);
        });

        it("Should press Enter ", async () => {
            await freightManager2Page.pressEnter("Enter");
        });

        it("Verifying that Driver Schedule is displayed", () => {
            var text = freightManager2Page.getDriverScheduleText(data.driverScheduleText);
            expect<any>(text).toBe(data.driverSchedule);
        });

        it("Should exit from the Driver Schedule page and Verifying that Freight Manger page is displayed", async () => {
            expect(await freightManager2Page.getFreightManagerPage()).toBe(data.freightManagerTitle);
        });

        it("Should enter 330281 in search field in FM2 page ", async () => {
            await freightManager2Page.setTextInSearchInput(data.searchText3);
        });

        it("Should press Enter ", async () => {
            await freightManager2Page.pressEnter("Enter");
        });

        it("Verifying that Check Call Details is displayed", async () => {
            var text = await freightManager2Page.getCheckCallTetails(data.checkCallDetailsTitle);
            expect<any>(text).toBe(data.checkCallDetailsTitle);
        });

        it("Should exit from the Check Call Details page and Verifying that Freight Manger page is displayed", () => {
            expect<any>(freightManager2Page.getFreightManagerPage()).toBe(data.freightManagerTitle);
        });

    });
    
});