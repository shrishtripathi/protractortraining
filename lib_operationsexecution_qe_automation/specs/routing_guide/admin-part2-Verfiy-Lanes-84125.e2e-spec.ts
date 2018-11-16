import { RoutingGuideAdministrationHomePage } from "../../pages/routing_guide/routing-guide-administration-home.po";
import { DataProvider } from "../../data/dataProvider";

let routingGuideAdministrationHomePage = new RoutingGuideAdministrationHomePage();
let using = require('jasmine-data-provider');

using(DataProvider.Tc_84125, async function (data) {

    describe("Test Case : TC_84125 Admin part2 verify lanes ", function () {

        it("Should Open routing guide url", async () => {
            await routingGuideAdministrationHomePage.navigateToAppHome(routingGuideAdministrationHomePage.routingGuideApplicationUrl);
        });

        it("Should select lanes menu", async () => {
            await routingGuideAdministrationHomePage.selectMenu(data.optionMenuLanes);
        });

        it("Should  Add a carrier (Ex. sof1) on Carrier Code ", async () => {
            await routingGuideAdministrationHomePage.setCarriersCarrierCode(data.carriersCarrierCode);
        });

        it("Should hit find lanes button", async () => {
            await routingGuideAdministrationHomePage.findLanes();
        });

        it("Verifying lanes are displayed", async () => {
            expect(await routingGuideAdministrationHomePage.verifyLanes(data.referenceRowIndex)).toBe(true);
        });

        it("Should click option button", async () => {
            await routingGuideAdministrationHomePage.clickOnOptionsButtonWithReferenceToRow(data.referenceRowIndex);
        });

        it("Should select Add Carriers option button", async () => {
            await routingGuideAdministrationHomePage.setOptionDropdown(data.addCarrierDropdownOptionName);
        });


        it("Verifying Add carrier fields can hold data", async () => {
            expect(await routingGuideAdministrationHomePage.addCarrierInputFields(data.carrierInputFieldOrigin)).not.toBeNull();
            expect(await routingGuideAdministrationHomePage.addCarrierInputFields(data.carrierInputFieldDestination)).not.toBeNull();
            expect(await routingGuideAdministrationHomePage.addCarrierInputFields(data.carrierInputFieldVolume)).not.toBeNull();
            expect(await routingGuideAdministrationHomePage.addCarrierInputFields(data.carrierInputFieldLane)).not.toBeNull();
            expect(await routingGuideAdministrationHomePage.addCarrierInputFields(data.carrierInputFieldEquipment)).not.toBeNull();
            expect(await routingGuideAdministrationHomePage.addCarrierInputFields(data.carrierInputFieldLaneType)).not.toBeNull();

        });
    });

});