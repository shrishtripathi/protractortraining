import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { PositionAssignment } from "../../pages/cdrap/position-assignment.po";

let cdrapHomePage = new CdrapHomePage();
let positionAssignment = new PositionAssignment();
let using = require('jasmine-data-provider');

describe("CDRAP_Regression_29 Recruiting", () => {

    //PreTestCase 139492: CDRAP Login to homescreen
    using(DataProvider.Tc_157971, async function (data) {

        it("Should open CDRAP url", async () => {
            await cdrapHomePage.openUrl(cdrapHomePage.cdrapUrl);
        });

        it("Verifying that CDRAP page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toBe(data.loginTitle);
        });

        it("Login into CDRAP application ", async () => {
            await cdrapHomePage.loginIntoCdrap(data.username, data.password, data.submit);
        });

        it("Verifying that CDRAP Logged in Home page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toContain(data.cdrapHomeTitle);
        });

    });

    //141398
    using(DataProvider.Tc_141398, async function (data) {

        it('Click the Recruiting hyperlink.', async () => {
            await cdrapHomePage.clickonMenuLink(data.recruiting)
        });

        it("Click the dropdown tab next to State, click to select ARKANSAS. ", async () => {
            await positionAssignment.selectOptionFromDropdown(data.positionlocationstate, data.arkansas)
        });

        it(' Click the Search button.', async () => {
            await positionAssignment.clickOnButton(data.search)
        });

        it('Underneath the Job Description column, click a hyperlink. ', async () => {
            await positionAssignment.click(positionAssignment.firstJobDescriptionHyperLink)
        });

        it('Validate the new window and close the window', async () => {
            await positionAssignment.switchToWindow(1);
            expect(await positionAssignment.getPageTitle()).toContain(data.cdrap)
            await positionAssignment.closeCurrentWindow();
        });

        it('Click the Export To Excel button. ', async () => {
            await positionAssignment.clickOnButton(data.exportToExcel)
        });

        it('Validate Red message displays,', async () => {
            expect(await positionAssignment.getElementText(positionAssignment.errorMessageXpath)).toBe(data.expectedErrorMessage)
        });
    });

});