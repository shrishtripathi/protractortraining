import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { SkillAdmin } from "../../pages/cdrap/skill-admin-.po";

let cdrapHomePage = new CdrapHomePage();
let skillAdmin = new SkillAdmin();
let using = require('jasmine-data-provider');

//TC #141387: CDRAP_Regression_18 Company admin, skills admin
using(DataProvider.Tc_141387, async function (data) {

    describe("Company admin, skills admin", () => {

        //TC #157971
        
        it("Should open CDRAP url", async () => {
            await cdrapHomePage.navigateToCdrap();
        });

        it("Click on Orientation Location Search Hyperlink", async () => {
            await cdrapHomePage.clickOnLink(data.companyAdmin);
        });

        it("Click the Skills Admin tab. ", async () => {
            await skillAdmin.click(await skillAdmin.spanText(data.skillsAdmin));
        });

        it("Select 'Delivery Type' option from Type dropdown ", async () => {
            await skillAdmin.selectOptionFromDropdown(data.selectedTid, data.deliveryTypes)
            expect(await skillAdmin.getTextBoxValue(data.name)).toEqual(data.deliveryTypes)
            expect(await skillAdmin.getTextBoxValue(data.description)).toEqual(data.deliveryTypes)
        });

        it("Click On Edit Subtypes Button", async () => {
            await skillAdmin.clickButtonOnSkillAdminPage(data.editSubtypes),
                expect(await skillAdmin.getElementText(cdrapHomePage.topLevelXpath)).toEqual(data.topLevelDeliveryType)
        });

        it("Select 'Agricultural Bulk Feed Delivery' Option from Type dropdown ", async () => {
            await skillAdmin.selectOptionFromDropdown(data.selectedTid, data.agriculturalBulkFeedDelivery)
            expect(await skillAdmin.getTextBoxValue(data.name)).toEqual(data.agriculturalBulkFeedDelivery)
            expect(await skillAdmin.getTextBoxValue(data.description)).toEqual(data.agriculturalBulkFeedDelivery)
        });

        it("Click On Edit Subtypes Button", async () => {
            await skillAdmin.clickButtonOnSkillAdminPage(data.editSubtypes),
                expect(await skillAdmin.getElementText(cdrapHomePage.topLevelXpath)).toEqual(data.topLevelAgriculturalBulkFeedDelivery)
        });

        it("Click on Top Level Hyperlink", async () => {
            await cdrapHomePage.clickOnLink(data.topLevel);
            expect(await cdrapHomePage.topLevelXpath.isPresent()).toBe(false)
        });

        it("Select 'Accident Types' Option from Type dropdown ", async () => {
            await skillAdmin.selectOptionFromDropdown(data.selectedTid, data.accidentTypes)
            expect(await skillAdmin.getTextBoxValue(data.name)).toEqual(data.accidentTypes)
            expect(await skillAdmin.getTextBoxValue(data.description)).toEqual(data.accidentTypeDescription)
        });

        it("Click On Edit Subtypes Button", async () => {
            await skillAdmin.clickButtonOnSkillAdminPage(data.editSubtypes)
            expect(await skillAdmin.getElementText(cdrapHomePage.topLevelXpath)).toEqual(data.toplevelAccidentTypes)
        });

        it("Select 'Backing' Option from Type dropdown ", async () => {
            await skillAdmin.selectOptionFromDropdown(data.selectedTid, data.backing)
            expect(await skillAdmin.getTextBoxValue(data.name)).toEqual(data.backing)
            expect(await skillAdmin.getTextBoxValue(data.description)).toEqual(data.accidentTypeBacking)
        });

        it("Click On Edit Subtypes Button", async () => {
            await skillAdmin.clickButtonOnSkillAdminPage(data.editSubtypes)
            expect(await skillAdmin.getElementText(cdrapHomePage.topLevelXpath)).toEqual(data.toplevelAccidentTypesBacking)
        });
    });

});