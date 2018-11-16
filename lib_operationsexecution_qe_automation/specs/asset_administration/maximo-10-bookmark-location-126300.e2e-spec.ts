import { By, browser } from 'protractor';
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { DataProvider } from '../../data/dataProvider';
import { MaximoHomePage } from '../../pages/maximo/maximo-homepage.po';
import { StoreRommsPage } from '../../pages/asset_administration/strerooms.po';


let myJbHuntHomePage = new MyJbHuntHomePage();
let maximoHomePage=new MaximoHomePage();
let storeRoomsPage = new StoreRommsPage();
let using = require('jasmine-data-provider');


// TC_126300: Maximo_10 Bookmark Location
using(DataProvider.Tc_126300, async function (data) {
    describe("Maximo_10 Bookmark Location", () => {


        it("Should open maximo url", async () => {
            await maximoHomePage.openUrl(myJbHuntHomePage.maximoURL);
        });
        it("Verifying that maximo page is displayed", async () => {
            await expect(maximoHomePage.getPageTitle()).toBe(data.maximoTitle);
        });
        it("Give login credentials", async () => {
            await maximoHomePage.loginPage(data.username,data.password);
        });
        it("Click the three line icon in the top left corner of the screen", async () => {
            	await maximoHomePage.clickMenuIcon();
        });
        it("Should hover over the inventory tab, click to select storerooms. ", async () => {
            await maximoHomePage.selectOptionFromTab(data.tabName, data.tabOption);
        });
        it("Should Click the input box below where it says Location ", async () => {
            await storeRoomsPage.clickLocationTextBox();
        });
        it("should hit enter", async () => {
            await storeRoomsPage.hitEnter();
        });
        it("should Select any Location hyperlink.", async () => {
            await storeRoomsPage.clickOnLocationHyperlink();
        });
        it("Next, click the 'Select Action' dropdown at the top of the screen and select 'Add to Bookmarks'", async () => {
            await storeRoomsPage.selectActionDropDown();
        });
        it("Verify save message at the top", async () => {
            let result: boolean = await storeRoomsPage.verifySavedMessage();
            await expect(result).toBeTruthy();
        });
    });
});