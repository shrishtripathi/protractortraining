import { DataProvider } from "../../data/dataProvider";
import { COAHomePage } from "../../pages/coa/coa-home-page.po";
import { CustomerRequestPage } from "../../pages/coa/customer-request-page.po";

let coaHomePage = new COAHomePage();
let customerRequestPage = new CustomerRequestPage();
let using = require('jasmine-data-provider');

//TC #150998: COA_Smoketest
describe("COA_Smoketest", () => {

    using(DataProvider.Tc_156016, async function (data) {

        it("Should open COA url", async () => {
            await coaHomePage.navigateToAppHome(coaHomePage.coaUrl);
        });

        it("Verifying that COA Home page is displayed", async () => {
            await expect(coaHomePage.getPageTitle()).toBe(data.coaPageTitle);
        });

    });

    using(DataProvider.Tc_150998, async function (data) { 


        it("Should select 'WHDC' option from next to Search By drop down", async () => {          
            await coaHomePage.setOptionFromDropDown(coaHomePage.searchByFirstDropDownOptions, data.searchByDropDownValue, coaHomePage.searchByFirstDropDown);
        });

        it("Should enter '272047702' in Search By input field", async () => {
            await coaHomePage.setTextInInput(coaHomePage.searchByInput, data.bolNumber);
        });

        it("Should click on 'Search' button" , async () =>{
            await coaHomePage.click(coaHomePage.searchBySearchButton);
        }); 

        it("Verifying that Request Details is populated", async () => { 
            await coaHomePage.waitForElementIsVisible(customerRequestPage.text(data.requestDetails));
            await expect(customerRequestPage.getElementText(await customerRequestPage.text(data.requestDetails))).toBe(data.requestDetails);
        });

        it("Should click on 'View Call History' button" , async () =>{
            await coaHomePage.clickOnLink(data.viewCallHistory);
            await coaHomePage.switchToWindow(data.one); 
        }); 
        
        it("Verifying that precall screen is populated", async () => {
            await expect(customerRequestPage.getPageTitle()).toBe(data.preCallPageTitle);
        });

        it("Should close precall window" , async () =>{
            await coaHomePage.closeWindow();
            await coaHomePage.switchToWindow(data.zero); 
        }); 

        it("Should click on 'Edit Request' button" , async () =>{
            await coaHomePage.clickOnLink(data.editRequest); 
        });

        it("Should click on 'Cancel' button", async () => {
            await customerRequestPage.waitForElementIsVisible(customerRequestPage.editRequestCancelButton);
            await customerRequestPage.click(customerRequestPage.editRequestCancelButton);
        });

    });

});