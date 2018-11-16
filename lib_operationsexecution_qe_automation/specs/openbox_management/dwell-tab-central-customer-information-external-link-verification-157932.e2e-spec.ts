import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";

let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();

//Tc# 157932 - Box Management System App- Dwell Tab- 'CENTRAL CUSTOMER INFORMAITON' EXTERNAL LINK VERIFICATION (Box Management System Tab)
using(DataProvider.Tc_157932, async function (data) {

    describe("Box Management System App- Dwell Tab- 'CENTRAL CUSTOMER INFORMAITON' EXTERNAL LINK VERIFICATION (Box Management System Tab)", function () {

        it("Should open Open Box Management url", async () => {
            await boxManagementSystemHomePage.navigateToAppHome(boxManagementSystemHomePage.openBoxManagementUrl);
        });

        it("Verifying that redirected to box management system", async () => {
            expect<any>(await boxManagementSystemHomePage.getPageTitle()).toBe(data.boxManagementSystemPageTitle);
        });

        it("Should click on Dwell tab and selct Exceptions Manager option", async () => {
            await boxManagementSystemHomePage.clickOnTabAndSelectOption(data.tabName,data.optionName);
        });

        it("Verifying that redirected to Exceptions Manager", async () => {
            await boxManagementSystemHomePage.switchToWindow(data.one);
            await boxManagementSystemHomePage.loginIfRequired();
            expect<any>(await boxManagementSystemHomePage.getPageTitle()).toBe(data.exceptionsManagerScreenTitle);
        });

        it("Should click on EXTERANL LINKS TAB tab and selct Central Customer Information option", async () => {
            await boxManagementSystemHomePage.click(boxManagementSystemHomePage.externalLinks);
            await boxManagementSystemHomePage.click(boxManagementSystemHomePage.centralCustomerInformationOption);
        });

        it("Verifying that the 'Central Customer Information' app will open", async () => {
            await boxManagementSystemHomePage.switchToWindow(data.two);
            expect<any>(await boxManagementSystemHomePage.getPageTitle()).toBe(data.centralCustomerInformation);
        });

    });

});