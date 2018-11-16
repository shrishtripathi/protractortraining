import { RoutingGuideAdministrationHomePage } from "../../pages/routing_guide/routing-guide-administration-home.po";
import { DataProvider } from "../../data/dataProvider";

let routingGuideAdministrationHomePage = new RoutingGuideAdministrationHomePage();
let using = require('jasmine-data-provider');

//TC 41446: 1-Routing Guide Admin-Regression part1-Verfiy Carrier search
using(DataProvider.Tc_41446, async function (data) {
    
    describe("1-Routing Guide Admin-Regression part1-Verfiy Carrier search", () => {

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

    });
});