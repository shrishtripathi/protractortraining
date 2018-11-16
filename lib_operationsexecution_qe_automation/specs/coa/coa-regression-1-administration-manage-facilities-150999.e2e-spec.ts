import { DataProvider } from "../../data/dataProvider";
import { COAHomePage } from "../../pages/coa/coa-home-page.po";
import { CustomerRequestPage } from "../../pages/coa/customer-request-page.po";
import { ManageFacilitiesPage } from "../../pages/coa/manage-facilities-page.po";

let coaHomePage = new COAHomePage();
let manageFacilitiesPage = new ManageFacilitiesPage();
let using = require('jasmine-data-provider');

//TC #150999: COA_Regression_1 Administration, manage facilities
describe("COA_Regression_1 Administration, manage facilities", () => {

    using(DataProvider.Tc_156016, async function (data) {

        it("Should open COA url", async () => {
            await coaHomePage.navigateToAppHome(coaHomePage.coaUrl);
        });

        it("Verifying that COA Home page is displayed", async () => {
            await expect(coaHomePage.getPageTitle()).toBe(data.coaPageTitle);
        });

    });

    using(DataProvider.Tc_150999, async function (data) { 
      
        it("Should hover on administration tab and select 'Manage Facilities'", async function () {
            await coaHomePage.hoverOnTabAndSelectOption(data.administrationTab, data.manageFacilities);
        });

        it("Verifying that Manage Facilities page is displayed", async () => {
            await expect(manageFacilitiesPage.getPageTitle()).toBe(data.manageFacilitiesPageTitle);
        }); 

        it("Should click on 'edit' Icon" , async () =>{
            await manageFacilitiesPage.click(manageFacilitiesPage.editIconLinks.get(data.zero));
        });  
        
        it("Verifying that Chance each of the values in the now editable text boxes", async () => {
            await expect(manageFacilitiesPage.customerCodeInput).toBeTruthy();
            await expect(manageFacilitiesPage.nameInput).toBeTruthy();
            await expect(manageFacilitiesPage.cityStateCodeInput).toBeTruthy();
            await expect(manageFacilitiesPage.zipCodeInput).toBeTruthy();
        });

        it("Should click on 'cancel' Icon" , async () =>{
            await manageFacilitiesPage.click(manageFacilitiesPage.cancelIconLink);
        });  
        
        it("Should click on 'last' link in Pagination" , async () =>{
            await manageFacilitiesPage.click(manageFacilitiesPage.lastLink);
            await manageFacilitiesPage.verifyDisabledLink(data.lastPage);
        });  

        it("Verifying that 'Last' page is displayed", async () => {
            await expect(manageFacilitiesPage.getCurrentPageNumber()).toBe(manageFacilitiesPage.getTotalNoOfPages());
        });

        it("Should click on 'Previous' link in Pagination" , async () =>{
            await manageFacilitiesPage.click(manageFacilitiesPage.previousLink);
            await manageFacilitiesPage.verifyEnabledLink(data.lastPage);
        });  

        it("Verifying that 'Previous' page is displayed", async () => {
            let previousPageNo = Number(await manageFacilitiesPage.getTotalNoOfPages()) - Number(data.one);
            await expect<any>(manageFacilitiesPage.getCurrentPageNumber()).toBe(previousPageNo.toString());
        });

        it("Should click on 'First' link in Pagination" , async () =>{
            await manageFacilitiesPage.click(manageFacilitiesPage.firstLink);
            await manageFacilitiesPage.verifyDisabledLink(data.firstPage);
        });  

        it("Verifying that 'First' page is displayed", async () => {
            await expect(manageFacilitiesPage.getCurrentPageNumber()).toBe(data.one);
        });

        it("Should click on 'Next' link in Pagination" , async () =>{
            await manageFacilitiesPage.click(manageFacilitiesPage.nextLink);
            await manageFacilitiesPage.verifyEnabledLink(data.firstPage);
        }); 
        
        it("Verifying that 'Next' page is displayed", async () => {
            let nextPageNo = Number(data.one) + Number(data.one);
            await expect<any>(manageFacilitiesPage.getCurrentPageNumber()).toBe(nextPageNo.toString());
        });

    });

});