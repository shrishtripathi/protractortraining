import { DataProvider } from "../../data/dataProvider";
import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";
import { TrailerPage } from "../../pages/openbox_management/trailer.po";
let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();
let trailerPage = new TrailerPage();

//Tc# 142317 - SEARCH LOAD FUNCTIONALITY CHECK (Trailer Summary Screen)- Trailer Tab- 'Dropped' Selection Functionality  
using(DataProvider.Tc_142317, async function (data) {

    describe("Search Load functonality check (Trailer Summary Screen)- Trailer Tab- 'Dropped' Selection Functionality", function () {
        let loadNumber: any;

        it("Should open Box Management System url", async () => {
            await boxManagementSystemHomePage.navigateToAppHome(boxManagementSystemHomePage.openBoxManagementUrl);
        });

        it("Verifying that redirected to box management system", async () => {
            await expect<any>(boxManagementSystemHomePage.getPageTitle()).toBe(data.boxManagementSystemPageTitle);
        });

        it("Should click on trailer tab and selct dropped option", async () => {
            await boxManagementSystemHomePage.clickOnTabAndSelectOption(data.tabName, data.optionName);
        });

        it("Should click on assigned to radio button", async () => {
            await boxManagementSystemHomePage.click(boxManagementSystemHomePage.assignedToRadioButton);
        });

        it("Should select 'JOPS512' to assigned to dropdown", async () => {
            await trailerPage.setAssignedToDropdown(data.assignedToDropdownValue);
            await boxManagementSystemHomePage.waitForActionToComplete();
        });

        it("Should click on publication", async () => {
            await trailerPage.click(trailerPage.publication);
        });

        it("Should take a note of Load Number", async () => {
            loadNumber = await trailerPage.getLoadNumber();
        });

        it("Should click on search load radio button", async () => {
            await trailerPage.click(trailerPage.searchLoadRadioButton);
        });

        it("Should search load Number", async () => {
            await expect<any>(trailerPage.searchLoadNumber(loadNumber)).toBe(1);
        });

        it("Should click header action bution to check load is usable", async () => {
            await expect<any>(trailerPage.clickHeaderActionButton()).toBeTruthy();
        });

        it("Should click body action bution to check load is usable", async () => {
            await expect<any>(trailerPage.clickBodyActionButton()).toBeTruthy();
        });

    });
});