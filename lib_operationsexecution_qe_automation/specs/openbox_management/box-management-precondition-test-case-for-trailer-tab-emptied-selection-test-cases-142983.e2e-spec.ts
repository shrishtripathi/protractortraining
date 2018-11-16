import { DataProvider } from "../../data/dataProvider";
import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";
import { TrailerPage } from "../../pages/openbox_management/trailer.po";
let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();
let trailerPage=new TrailerPage();

//Tc# 142983 - Box Management- Precondition Test Case for Trailer Tab 'EMPTIED' Selection Test Cases
using(DataProvider.Tc_142983, async function (data) {

    describe("Box Management- Precondition Test Case for Trailer Tab 'EMPTIED' Selection Test Cases", function () {

        it("Should open Fleet Status url", async () => {
            await boxManagementSystemHomePage.navigateToAppHome(boxManagementSystemHomePage.openBoxManagementUrl);
        });

        it("Verifying that redirected to box management system", async () => {
            await expect<any>(boxManagementSystemHomePage.getPageTitle()).toBe(data.boxManagementSystemPageTitle);
        });

        it("Should click on trailer tab and selct emptied option", async () => {
            await boxManagementSystemHomePage.clickOnTabAndSelectOption(data.tabName,data.optionName);
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
 
    });
});