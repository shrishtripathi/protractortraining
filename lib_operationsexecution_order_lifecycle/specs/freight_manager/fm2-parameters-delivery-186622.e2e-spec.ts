
import { DataProvider } from "../../data/dataProvider";
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { DeliveryPage } from "../../pages/freight_manager/delivery.po";

let using = require('jasmine-data-provider');

let myJbHuntHomePage = new MyJbHuntHomePage();
let deliveryPage = new DeliveryPage();

//TC 186622: FM2 Parameters Delivery
using(DataProvider.Tc_186622, async function (data) {

    describe('FM2 Parameters Delivery', () => {

        it('Should Navigate to Freight Manager2 url', async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.freightManager2);
        });

        it('Should Navigate to Delivery from Planning Tab', async () => {
            await myJbHuntHomePage.selectOptionFromTab(data.tabName, data.option)
        });

        it('Should Select A- Area from Type', async () => {
            await deliveryPage.setSearchParameters(data.value, data.division, data.areaType, data.area);
        });

        it('Should enter Fleet Type Codes ', async () => {
            await deliveryPage.setTextToFleetTypeInputFields(data.value1, data.value2, data.value3, data.value4);
        });

        it('Should Click on Save Preferences Button', async () => {
            await deliveryPage.clickOnSavePreferencesButton();
            await deliveryPage.waitForActionToComplete()
        });

        it('Should Validate Success message after Saving Preferences', async () => {
            expect(await deliveryPage.preferenceUpdatedMessage.getText()).toBe(data.message)
        });
    })
});