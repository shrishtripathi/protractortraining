import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { SearchPage } from "../../pages/cdrap/search.po";

let cdrapHomePage = new CdrapHomePage();
let searchPage = new SearchPage();
let using = require('jasmine-data-provider');

//TC #138401: CREATING A NEW APPLICATION=Part 1
describe("CREATING A NEW APPLICATION", () => {

    using(DataProvider.Tc_157971, async function (data) {

        it("Should open CDRAP url", async () => {
            await cdrapHomePage.openUrl(cdrapHomePage.cdrapUrl);
        });

        it("Verifying that CDRAP page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toBe(data.loginTitle);
        });

        it("Login into CDRAP application ", async () => {
            await cdrapHomePage.loginIntoCdrap(data.username, data.password, data.submit);
        });

        it("Verifying that CDRAP Logged in Home page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toContain(data.cdrapHomeTitle);
        });

    });

    using(DataProvider.Tc_138401, async function (data) {

        it("Click on Search hyperlink", async () => {
            await cdrapHomePage.clickOnLink(data.searchText);
        });

        it("Enter 9 digit SSN number", async () => {
            await searchPage.enterSSNNumber();
        });

        it("Click on Search button" , async () =>{
            await searchPage.clickOnInputButton(searchPage.searchButton); 
        });

        it("Verify Error message", async () => {
            let result:boolean = await searchPage.verifyErrorMessage(data.errorMSG);
            expect(result).toBeTruthy();
        });
            
    });
    
});