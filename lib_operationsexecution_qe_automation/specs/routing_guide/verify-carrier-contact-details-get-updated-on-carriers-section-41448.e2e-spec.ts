import { RoutingGuideAdministrationHomePage } from "../../pages/routing_guide/routing-guide-administration-home.po";
import { DataProvider } from "../../data/dataProvider";

let routingGuideAdministrationHomePage = new RoutingGuideAdministrationHomePage();
let using = require('jasmine-data-provider');

using(DataProvider.Tc_41448, async function (data) {
    //TC 41448: Routing Guide Admin-Regression part3-Verify Carrier contact details get updated on Carriers section
    describe("Verify Carrier contact details get updated on Carriers section", () => {
        let firstName: string;

        it("Should open My JBHunt url", async () => {
            await routingGuideAdministrationHomePage.navigateToAppHome(routingGuideAdministrationHomePage.routingGuideApplicationUrl);
        });

        it("Should select Carrier menu", async () => {
            await routingGuideAdministrationHomePage.selectMenu(data.carrierDropdownOptionName);
        });

        it("Should enter HA29 in Carrier Code field", async () => {
            await routingGuideAdministrationHomePage.setCarriersCarrierCode(data.carrierCode);
        });

        it("Should click on Find Carrier button", async () => {
            await routingGuideAdministrationHomePage.clickOnButton(data.findCarrierButton);
        });

        it("Verifying that Carrier should display ", async () => {
            await expect<any>(await routingGuideAdministrationHomePage.getCarrierInfoText(data.carrierCode)).toBe(data.carrierCode);
        });

        it("Should click on Options button", async () => {
            await routingGuideAdministrationHomePage.clickOnOptionsButtonWithReferenceToTable(data.tableIndex);
        });

        it("Should click on View Contacts", async () => {
            await routingGuideAdministrationHomePage.setOptionDropdown(data.viewContactDropDownOption);
        });

        it("Should click on Options button", async () => {
            await routingGuideAdministrationHomePage.clickOnOptionsButtonWithReferenceToTable(data.tableIndex);
        });

        it("Should click on Edit contact", async () => {
            await routingGuideAdministrationHomePage.setOptionDropdown(data.editContactDropDownOption);
        });

        it("Should edit the contact details  as first name and last name and phone number", async () => {
            firstName = data.firstName
            await routingGuideAdministrationHomePage.setContactDetails(firstName, data.lastName, data.phoneNumber);
        });

        it("Should click on Update button", async () => {
            await routingGuideAdministrationHomePage.clickOnButton(data.updateButton);
        });

        it("Verifying that Carrier contact details get updated on Carriers section", async () => {
            expect(await routingGuideAdministrationHomePage.getCarrierInfoText(firstName));
        });

    });
});