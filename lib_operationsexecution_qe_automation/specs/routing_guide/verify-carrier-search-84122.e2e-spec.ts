import { CarrierPage } from "../../pages/routing_guide/carriers.po";
import { DataProvider } from "../../data/dataProvider";
import { RoutingGuideAdministrationHomePage } from "../../pages/routing_guide/routing-guide-administration-home.po";

let routingGuideAdministrationHomePage = new RoutingGuideAdministrationHomePage();
let carrierPage = new CarrierPage();
let using = require('jasmine-data-provider');

using(DataProvider.Tc_84122, async function (data) {

    describe("Verify Carrier Search ", function () {

        it("should open 'homepage'", async function () {
            await routingGuideAdministrationHomePage.navigateToAppHome(routingGuideAdministrationHomePage.routingGuideApplicationUrl);
        });
        it("should Select 'Carriers' from the JBHUNTRGA page menu", async function () {
            let flag: boolean = await carrierPage.clickCarriers();
            expect(flag).toBeTruthy();
        });
        it("should Select 'Carrier Code' from the carrier page", async function () {
            await carrierPage.setCarrierCode(data.carrierCode);
        });
        it("should Click 'Find Carriers'from the carrier page", async function () {
            await carrierPage.clickFindCarriers();
        });
        it("should display 'Search Results'", async function () {
            let flag: boolean = await carrierPage.verifyFindCarrierSearchResults();
            expect(flag).toBeTruthy();
        });
        it("should verify 'Options' button", async function () {
            let flag: boolean = await carrierPage.verifyOptions();
            expect(flag).toBeTruthy();
        });
    });

});


