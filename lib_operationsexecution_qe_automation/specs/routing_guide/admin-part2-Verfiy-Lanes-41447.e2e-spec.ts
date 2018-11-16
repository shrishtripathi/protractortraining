import { RoutingGuideAdministrationHomePage } from "../../pages/routing_guide/routing-guide-administration-home.po";
import { DataProvider } from "../../data/dataProvider";

let routingGuideAdministrationHomePage = new RoutingGuideAdministrationHomePage();
let using = require('jasmine-data-provider');

using(DataProvider.Tc_41447, async function (data) {

    describe("Test Case : TC_41447 Admin part2 verify lanes ", function () {

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

        it("Should click option button", async () => {
            await routingGuideAdministrationHomePage.clickOnOptionsButtonWithReferenceToRow(data.referenceRowIndex);
        });

        it("Should select View Carriers option button", async () => {
            await routingGuideAdministrationHomePage.setOptionDropdown(data.viewCarrierDropdownOptionName);
            await routingGuideAdministrationHomePage.waitForActionComplete(data.carriersGridName);
        });

        it("Verifying lane is displayed", async () => {
            let carrierElementText = await routingGuideAdministrationHomePage.getCarrierCodeElement(data.carrierCodeRowIndex);
            expect(carrierElementText).toBe(data.expectedCarrierElementText);
        });

        it("Verifying carriers are displayed", async () => {
            let numberOfCarriers = await routingGuideAdministrationHomePage.getAllCarrierCodeElements();
            expect(numberOfCarriers).toBeGreaterThan(data.carrierNumber);
        });


    });
});