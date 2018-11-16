import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { DomainAdmin } from "../../pages/cdrap/domain-admin-page";

let cdrapHomePage = new CdrapHomePage();
let domainAdminPage = new DomainAdmin();
let using = require('jasmine-data-provider');

//TC #139873: CDRAP_Regression_12 Domain admin
using(DataProvider.Tc_139873, async function (data) {

    describe("CDRAP Regression: Domain admin", () => {

        it("Should open CDRAP url", async () => {
            await cdrapHomePage.navigateToCdrap()
        });

        it("Click the Domain Admin hyperlink", async () => {
            await cdrapHomePage.clickOnLink(data.domainAdmin)
        });

        it("Select Option from domain dropdown ", async () => {
            await domainAdminPage.selectOptionFromDropdown(data.domainViewId, data.jbhunt)
        });

        it("Click to uncheck half of the boxes", async () => {
            await domainAdminPage.uncheckHalfOfCheckBoxes()
        });

        it("Select Option from domain dropdown ", async () => {
            await domainAdminPage.selectOptionFromDropdown(data.domainViewId, data.texasTransportation)
        });

        it("Select Option from domain dropdown ", async () => {
            await domainAdminPage.selectOptionFromDropdown(data.domainViewId, data.jbhunt)            
        });

        it('Verify Half of the check boxes are still unchecked.',async () => {
            expect(await domainAdminPage.uncheckedBoxArrayXpath.count()).toBe(Math.floor((await domainAdminPage.checkBoxArrayXpath.count())/2))
        });

        it('Click each unchecked box. Click the Update button.', async () => {
            await domainAdminPage.checkAllUnchekedBoxes()
        });

        it("Select Option from domain dropdown ", async () => {
            await domainAdminPage.selectOptionFromDropdown(data.domainViewId, data.texasTransportation)
        });

        it("Select Option from domain dropdown ", async () => {
            await domainAdminPage.selectOptionFromDropdown(data.domainViewId, data.jbhunt)            
        });

        it('Verify Half of the check boxes are still unchecked.',async () => {
            expect(await domainAdminPage.checkedBoxArrayXpath.count()).toBe(await domainAdminPage.checkBoxArrayXpath.count())
        });
    });

});