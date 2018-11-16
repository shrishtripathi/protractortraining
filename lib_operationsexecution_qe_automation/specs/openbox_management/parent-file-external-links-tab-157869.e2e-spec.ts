import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { DwellPage } from "../../pages/openbox_management/dwell.po";
import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";
import { TrailerPage } from "../../pages/openbox_management/trailer.po";


let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();

//Tc# 157869 -Box Management System- PARENT FILE- External Links Tab
using(DataProvider.Tc_157869, async function (data) {

    describe("Box Management System-  PARENT FILE- External Links Tab", function () {

        it("Should open Fleet Status url", async () => {
            await boxManagementSystemHomePage.navigateToAppHome(boxManagementSystemHomePage.openBoxManagementUrl);
        });

        it("Verifying that redirected to box management system", async () => {
            await expect<any>(boxManagementSystemHomePage.getPageTitle()).toBe(data.boxManagementSystemPageTitle);
        });

        it("When the 'Box Management System' App opens- Click on the EXTERANL LINKS TAB Tab From the Dropdown list- Click on 'Accounts & Location'  ", async () => {
            await boxManagementSystemHomePage.clickOnTabAndSelectOption(data.tabName,data.optionName);
        });

        it("Verify that The 'Accounts' Screen of the J B Hunt 360 App will appear", async () => {
            await boxManagementSystemHomePage.verifyExternalLinksPages(data.accountPage);
        });
        it("Click on the EXTERANL LINKS TAB Tab From the Dropdown list- Click on 'Accounts & Location'  ", async () => {
            await boxManagementSystemHomePage.clickOnTabAndSelectOption(data.tabName,data.optionName2);
        });

        it("Verify that The 'Help' screen of the J B Hunt Homepage App will appear ", async () => {
            await boxManagementSystemHomePage.verifyExternalLinksPages(data.helpSupport);
        });

       
 
    });
});