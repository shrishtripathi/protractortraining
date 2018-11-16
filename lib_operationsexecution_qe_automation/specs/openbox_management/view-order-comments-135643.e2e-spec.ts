import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";
import { TrailerPage } from "../../pages/openbox_management/trailer.po";
let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();
let trailerPage = new TrailerPage();
//Tc# 135643 - VIEW ORDER COMMENTS
using(DataProvider.Tc_135643, async function (data) {

    describe("View order comments", function () {

        it("Should open Fleet Status url", async () => {
            await boxManagementSystemHomePage.navigateToAppHome(boxManagementSystemHomePage.openBoxManagementUrl);
        });

        it("Verifying that redirected to box management system", async () => {
            await expect<any>(boxManagementSystemHomePage.getPageTitle()).toBe(data.boxManagementSystemPageTitle);
        });

        it("Should click on trailer tab and selct dropped option", async () => {
            await boxManagementSystemHomePage.clickOnTabAndSelectOption(data.tabName, data.optionName);
        });

        it("Should click on assigned to radio button", async () => {
            await trailerPage.click(trailerPage.assignedToRadioButton);
        });

        it("Should select 'JOPS512' to assigned to dropdown", async () => {
            await trailerPage.setAssignedToDropdown(data.assignedToDropdownValue);
            await trailerPage.waitForActionToComplete();
        });

        it("Should click on publication", async () => {
            await trailerPage.click(trailerPage.publication);
        });

        it("Should hover on action and click on order comments", async () => {
            await trailerPage.hoverOnActionAndSelectOption(data.optionToHover);
        });

        it("Verifying order comments page is displayed", async () => {
            await expect<any>(trailerPage.verifyPageDisplayed(data.text)).toContain(data.text);
        });

        it("Should click on close button", async () => {
            await trailerPage.click(trailerPage.closeButton);
        });

    });
});