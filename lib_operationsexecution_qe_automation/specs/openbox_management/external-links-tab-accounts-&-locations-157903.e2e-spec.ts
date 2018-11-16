import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";

let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();

//Tc# 157903 - Box Management System App- External Links TAB- ACCOUNTS & LOCATIONS
using(DataProvider.Tc_157903, async function (data) {

    describe("Box Management System App- External Links TAB- ACCOUNTS & LOCATIONS", function () {

        it("Should open Open Box Management url", async () => {
            await boxManagementSystemHomePage.navigateToAppHome(boxManagementSystemHomePage.openBoxManagementUrl);
        });

        it("Verifying that redirected to box management system", async () => {
            expect<any>(await boxManagementSystemHomePage.getPageTitle()).toBe(data.boxManagementSystemPageTitle);
        });

        it("Should click on EXTERANL LINKS TAB tab and selct Accounts & Location option", async () => {
            await boxManagementSystemHomePage.clickOnTabAndSelectOption(data.tabName,data.optionName);
        });

        it("Verifying that the 'Accounts' Screen of the J B Hunt 360 App will appear", async () => {
            await boxManagementSystemHomePage.switchToWindow(data.one);
            await boxManagementSystemHomePage.loginIfRequired();
            expect<any>(await boxManagementSystemHomePage.getPageTitle()).toBe(data.accountTitle);
        });

    });

});