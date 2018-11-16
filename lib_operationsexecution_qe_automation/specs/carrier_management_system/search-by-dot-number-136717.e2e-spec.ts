import { CarrierManagementPage } from "../../pages/carrier_management_system/carrier-management-po";
import { CarrierSearchPage } from "../../pages/carrier_management_system/carrier-search-po";
import { SpecificCarrierSearchPage } from "../../pages/carrier_management_system/specific-carrier-search-po";
import { DataProvider } from "../../data/dataProvider";

let carrierManagementPage = new CarrierManagementPage();
let carrierSearchPage = new CarrierSearchPage();
let specificCarrierSearchPage = new SpecificCarrierSearchPage();
let using = require('jasmine-data-provider');

//TC#136717 -CMS | Search by DOT number
using(DataProvider.TC_136717, async function (data) {

    describe("Search by DOT number", function () {

        it("should open 'Carrier Management' page", async function () {
            await carrierManagementPage.navigateToAppHome(carrierManagementPage.carrierManagementUrl);
        });

        it("Verifying that redirected to Carrier management system Page", async () => {
            await expect<any>(carrierManagementPage.getPageTitle()).toBe(data.CMSPageTitle);
        });

        it("Should click on 'Carrier Search Page' in CarrierManagementPage", async function () {
            await carrierManagementPage.clickonSpecificCarrierSearch();
        });

        it("Should select Dot Number from Search Type", async function () {
            await specificCarrierSearchPage.selectOptionFromSearchType(data.searchTypeValue);
        });

        it("Should Enter Dot Number in Search Text Field", async function () {
            await specificCarrierSearchPage.setTextInSearchInput(data.searchTextValue);
        });

        it("Should Click on Search Button", async function () {
            await carrierSearchPage.clickSearchButtonUnderCarrierSearch();
        });

        

    });

});