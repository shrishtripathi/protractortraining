import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";
import { TrailerPage } from "../../pages/openbox_management/trailer.po";
let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();
let trailerPage=new TrailerPage();
//Tc# 141407 - FILTER FUNCTIONALITY CHECK (Listing filter functionality) Trailer Tab- 'Dropped' Selection Functionality
using(DataProvider.Tc_141407, async function (data) {

    describe("Box Management- Filter functionality Trailer Tab 'DROPPED' Selection Functionality", function () {

        it("Should open Fleet Status url", async () => {
            await boxManagementSystemHomePage.navigateToAppHome(boxManagementSystemHomePage.openBoxManagementUrl);
        });

        it("Verifying that redirected to box management system", async () => {
            await expect<any>(boxManagementSystemHomePage.getPageTitle()).toBe(data.boxManagementSystemPageTitle);
        });

        it("Should click on trailer tab and selct dropped option", async () => {
            await boxManagementSystemHomePage.clickOnTabAndSelectOption(data.tabName,data.optionName);
        });

        it("Should click on assigned to radio button", async () => {
            await trailerPage.click(boxManagementSystemHomePage.assignedToRadioButton);
        });

        it("Should select 'JOPS512' to assigned to dropdown", async () => {
            await trailerPage.setAssignedToDropdown(data.assignedToDropdownValue);
            await trailerPage.waitForActionToComplete();
        });

        it("Should click on publication", async () => {
            await trailerPage.click(trailerPage.publication);
        });

        it("Should Select the 'Bill To' Arrow Icon and Select one of the Bill to Codes from the list", async () => {
            await trailerPage.setDropDownOption(trailerPage.billToCode,data.billToCOde);
        });

        it("Verifyimg bill to code", async () => {
            expect(await trailerPage.verifyBillToCodeText()).toBe(true);
        });

        it("Should Select the 'Reciever code' Arrow Icon and Select one of the Reciever code from the list", async () => {
            await trailerPage.setDropDownOption(trailerPage.receiverCode,data.receiverCode);
        });

        it("Verifyimg reciever code", async () => {
            expect(await trailerPage.verifyRecieverCodeText()).toBe(true);
        });

        it("Should click on clear filter button", async () => {
            await trailerPage.click(trailerPage.clearFilter);
        });

        it("Should Select the 'Reciever city and state' Arrow Icon and Select one of the Reciever city state from the list", async () => {
            await trailerPage.setDropDownOption(trailerPage.recieverStateCity,data.recieverStateCity);
        });

        it("Verifyimg reciever city state", async () => {
            expect(await trailerPage.verifyRecieverCityStateText()).toBe(true);
        });

        it("Should click on clear filter button", async () => {
            await trailerPage.click(trailerPage.clearFilter);
        });

        it("Should Select the 'transit mode' Arrow Icon and Select one of the transit mode from the list", async () => {
            await trailerPage.setDropDownOption(trailerPage.transitMode,data.transitMode);
        });

        it("Verifyimg transit mode", async () => {
            expect(await trailerPage.verifyTransitModeText()).toBe(true);
        });
      
    });
});