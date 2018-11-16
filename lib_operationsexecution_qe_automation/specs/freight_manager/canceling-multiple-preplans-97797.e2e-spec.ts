import { MyJbHuntHomePage } from "../../Pages/my-jbhunt-home.po";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { TractorMultiplePreplan } from "../../pages/freight_manager/tractor-multiple-preplan.po";
import { DataProvider } from "../../data/dataProvider";
import { browser } from "../../node_modules/protractor";
import { UnitViewParameterPage } from "../../pages/freight_manager/unit-view-parameter.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let unitViewPage = new UnitViewPage();
let unitViewParameterPage = new UnitViewParameterPage();
let freightManager2Page = new FreightManager2Page();
let tractorMultiplePreplan = new TractorMultiplePreplan();
let using = require('jasmine-data-provider');

// TC_97797: FM2_Regression_41 canceling multiple preplans 
using(DataProvider.Tc_97797, async function (data) {
    describe("canceling multiple preplans", function () {
        let unitNumber;
        let index = 1;
        it("Navigate to FM2 page", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url);
        });

        it('Navigate to Unit View Page', async () => {
            await freightManager2Page.hoverOverFM2PageHeaderOption(data.planning);
        });

        it('Click on Unit View Drop Down Option', async () => {
            await freightManager2Page.clickHeaderDropDownOption(data.unitViewOption);
        });

        it("Click on Parameter Button", async () => {
            await unitViewPage.clickOnParameterButton();
        });

        it("Click on Board radio Button", async () => {
            await unitViewParameterPage.setParameterRadioAndChechBox(data.setParameterRadioAndChechBoxFieldName, data.setParameterRadioAndChechBoxOption)
        });

        it("should enter Board Codes", async () => {
            await unitViewParameterPage.enterSelectTypeCode(data.codeName, 1, data.BoardCode1);
            await unitViewParameterPage.enterSelectTypeCode(data.codeName, 2, data.BoardCode2);
            await unitViewParameterPage.enterSelectTypeCode(data.codeName, 3, data.BoardCode3);
            await unitViewParameterPage.enterSelectTypeCode(data.codeName, 4, data.BoardCode4);
        });

        it("Click on Save Parameter Button", async () => {
            await unitViewParameterPage.clickOnSaveParameterButton();
        });

        it("Click on Exit Button", async () => {
            await unitViewParameterPage.clickOnExitButton();
        });

        it('Click on Search Button', async () => {
            await unitViewPage.clickSearchButton();
            await unitViewPage.WaitForSearchResultLoading();
        });

        it('Getting UnitNumber having more than 1 turck preplan', async () => {
            unitNumber = await unitViewPage.unitNumberWithMoreThen1TruckPreplan(index);
            index = unitNumber[1]
        });

        it('Navigate to Unit View Page', async () => {
            await browser.refresh()
            await freightManager2Page.hoverOverFM2PageHeaderOption(data.planning);
        });

        it('Click on multiPrePlan Option Drop Down Option', async () => {
            await freightManager2Page.clickHeaderDropDownOption(data.multiPrePlanOption);
        });

        it('Enter Tractor Number', async () => {
            await tractorMultiplePreplan.enterTractorNumber(unitNumber[0]);
        });

        it('Click on Search Button', async () => {
            await tractorMultiplePreplan.clickOnButton(data.buttonTextValueSearch);
            await tractorMultiplePreplan.WaitForSearchResultLoading();
        });

        it('Click on Select All Button', async () => {
            await tractorMultiplePreplan.clickOnButton(data.buttonTextValueSelectAll);
            await tractorMultiplePreplan.clickOnButton(data.buttonTextValueDeleteSegment);
        });

        it('Verify success message', async () => {
            let message: string = await tractorMultiplePreplan.validateSuccessMessage();
            console.log(message);

            do {
                console.log("inside")
                await freightManager2Page.hoverOverFM2PageHeaderOption(data.planning);
                await freightManager2Page.clickHeaderDropDownOption(data.unitViewOption);
                await unitViewPage.clickSearchButton();
                await unitViewPage.WaitForSearchResultLoading();
                unitNumber = await unitViewPage.unitNumberWithMoreThen1TruckPreplan(index);
                index = unitNumber[1]
                await browser.refresh()
                await freightManager2Page.hoverOverFM2PageHeaderOption(data.planning);
                await freightManager2Page.clickHeaderDropDownOption(data.multiPrePlanOption);
                await tractorMultiplePreplan.enterTractorNumber(unitNumber[0]);
                await tractorMultiplePreplan.clickOnButton(data.buttonTextValueSearch);
                await tractorMultiplePreplan.WaitForSearchResultLoading();
                await tractorMultiplePreplan.clickOnButton(data.buttonTextValueSelectAll);
                await tractorMultiplePreplan.clickOnButton(data.buttonTextValueDeleteSegment);
                message = await tractorMultiplePreplan.validateSuccessMessage();
                console.log(message);

            } while (message == "UNABLE TO CANCEL PREPLAN");

            expect(message).toEqual(data.message);

        });


    });
});