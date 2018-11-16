
import { OfferManagementHomePage } from "../../pages/offer_management/offer-management-home.po";
import { browser } from "protractor";
import { DataProvider } from "../../data/dataProvider";

let offerManagementSystem = new OfferManagementHomePage();
let using = require('jasmine-data-provider');

// TC_87110: OMS/Offer Management_Regression_Part 2 of 2-Verify UI and Rate Search
using(DataProvider.Tc_87110, async function (data) {
    describe("Verify UI and Rate Search", function () {

        it('Open OMS URL', async () => {
            await offerManagementSystem.navigateToOms(offerManagementSystem.omsUrl);
        });

        it("Wait untill offer management page loads", async () => {
            await offerManagementSystem.waitUntilPageLoads();
        });

        it('Click on Serach Icon', async () => {
            await offerManagementSystem.clickonSearchIconFromLeftNavigation();
        });
        it('Enter Origin City', async () => {
            await offerManagementSystem.enterCityInOriginAndDestiantion(data.origin, data.cityOrigin);
        });
        it('Select Mode', async () => {
            await offerManagementSystem.selectModeFromDropDown();
        });
        it('Enter Destination City', async () => {
            await offerManagementSystem.enterCityInOriginAndDestiantion(data.destination, data.destinationCity);
        });
        it('Select Equipment', async () => {
            await offerManagementSystem.selectEquipmentFromDropDown(data.equipmentDropDown);
        });
        it('Select Date from calender', async () => {
            await offerManagementSystem.setDate();
        });
        it('CLick on Find Rates button', async () => {
            await offerManagementSystem.clickOnFindRatesButton();
        });
        it('Verify rate calculator is displayed', async () => {
            let result:boolean = await offerManagementSystem.verifyRateCalculatorDisplayed();
            await expect(result).toBeTruthy();
           /*  let result = await offerManagementSystem.verifyRateCalculator(data.sourceCity, data.desCity);
            expect(result).toBe(true); */
        });
    });
});

