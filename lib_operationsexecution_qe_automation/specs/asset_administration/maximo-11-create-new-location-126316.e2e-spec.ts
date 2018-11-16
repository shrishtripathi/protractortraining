import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { DataProvider } from '../../data/dataProvider';
import { MaximoHomePage } from '../../pages/maximo/maximo-homepage.po';
import { LocationsPage } from '../../pages/asset_administration/locations.po';



let myJbHuntHomePage = new MyJbHuntHomePage();
let maximoHomePage = new MaximoHomePage();
let locationPage = new LocationsPage();
let using = require('jasmine-data-provider');


// TC_126316: Maximo_11 Create New Location
using(DataProvider.Tc_126316, async function (data) {
    describe("Maximo_11 Create New Location", () => {

        it("Should open maximo url", async () => {
            await maximoHomePage.openUrl(myJbHuntHomePage.maximoURL);
        });
        it("Verifying that maximo page is displayed", async () => {
            await expect(maximoHomePage.getPageTitle()).toBe(data.maximoTitle);
        });
        it("Give login credentials", async () => {
            await maximoHomePage.loginPage(data.username, data.password);
        });
        it("Click the three line icon in the top left corner of the screen", async () => {
            await maximoHomePage.clickMenuIcon();
        });
        it("Should hover over the Asset tab, click to select Locations. ", async () => {
            await maximoHomePage.selectOptionFromTab(data.tabName, data.tabOption);
        });
        it("Select the new location icon ", async () => {
            await locationPage.clickNewLocationIcon();
        });
        it(" should type in any location name where it says Location", async () => {
            await locationPage.enterLocation();
        });
        it(" should Select the hyperlink value for Vendor", async () => {
            await locationPage.selectFromType();
        });
        it("Click on Save icon", async () => {
            await locationPage.clickOnSaveButton(locationPage.saveButton);
        });
        it("Verify save message at the top", async () => {
            let result: boolean = await locationPage.verifySavedMessage();
            await expect(result).toBeTruthy();
        });



    });
});