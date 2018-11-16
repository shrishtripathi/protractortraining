import { DataProvider } from "../../data/dataProvider";
import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";
import { TrailerPage } from "../../pages/openbox_management/trailer.po";
import { async } from "q";
let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();
let trailerPage = new TrailerPage();

//Tc# 158010 - Box Management System App- Dwell Tab- 'FILENET ECM' EXTERNA LINK VERIFICATION- (via Exception Manager/External Links Tab)
using(DataProvider.Tc_158010, async function (data) {
describe("Dwell Tab- 'FILENET ECM' EXTERNA LINK VERIFICATION- (via Exception Manager/External Links Tab)", function () {

        it("Should open Open Box Management url", async () => {
            await boxManagementSystemHomePage.navigateToAppHome(boxManagementSystemHomePage.openBoxManagementUrl);
        });

        it("Verifying that redirected to box management system", async () => {
            expect<any>(await boxManagementSystemHomePage.getPageTitle()).toBe(data.boxManagementSystemPageTitle);
        });

        it("Should click on Dwell tab and selct Exceptions Manager option", async () => {
            await boxManagementSystemHomePage.clickOnTabAndSelectOption(data.tabName, data.optionName);
        });

        it("Verifying that redirected to Exceptions Manager", async () => {
            await boxManagementSystemHomePage.switchToWindow(data.one);            
            await boxManagementSystemHomePage.loginIfRequired();
            expect<any>(await boxManagementSystemHomePage.getPageTitle()).toBe(data.exceptionsManagerScreenTitle);
        });

        it("Should click on EXTERANL LINKS TAB tab", async () => {
            await boxManagementSystemHomePage.click(boxManagementSystemHomePage.externalLinks);
        });

        it("Click on 'FileNet ECM' option",async () => {
            await boxManagementSystemHomePage.click(await boxManagementSystemHomePage.externalLinksDropDownXpath(data.filenetEcm));
        });

        it('Login To the application', async () => {
            await boxManagementSystemHomePage.switchToWindow(data.two);
            await boxManagementSystemHomePage.loginIfRequired();
        });

        it("Verifying that the 'Central Customer Information' app will open", async () => {
            expect<any>(await boxManagementSystemHomePage.getPageTitle()).toBe(data.filenetWorkPlace);
        });
    });
});