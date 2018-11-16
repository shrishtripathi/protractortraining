import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";

import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";
import { TrailerPage } from "../../pages/openbox_management/trailer.po";


let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();
let trailerPage=new TrailerPage();

//Tc# 155200 - Box Management System App- HOME TAB- SEARCH BY CUSTOMER CODE- SEARCH CRITERIA FUNCTIONALITY VERIFICATION
using(DataProvider.Tc_155200, async function (data) {

    describe("Box Management System App- HOME TAB- SEARCH BY CUSTOMER CODE- SEARCH CRITERIA FUNCTIONALITY VERIFICATION", function () {

        it("Should open Fleet Status url", async () => {
            await boxManagementSystemHomePage.navigateToAppHome(boxManagementSystemHomePage.openBoxManagementUrl);
        });

        it("Verifying that redirected to box management system", async () => {
            await expect<any>(boxManagementSystemHomePage.getPageTitle()).toBe(data.boxManagementSystemPageTitle);
        });

        it("In the 'Search Criteria' box Select the 'Search By' Arrow Icon- And then Select 'Customer Code' from the 'Search By' Dropdown box", async () => {
            await boxManagementSystemHomePage.selectOptionsFromSearchByDropdown(data.option);
        });

        it("Next, Click on the empty 'Value' box, to put the cursor in the box- And Enter a Customer Code ", async () => {
            await boxManagementSystemHomePage.setText(boxManagementSystemHomePage.valueInputField,data.code);
        });

        it("After the 'Customer Code' is entered- Click on the Search button ", async () => {
            await boxManagementSystemHomePage.click(boxManagementSystemHomePage.searchButton);
        });

        it("verify that The 'Customer Code' Information will be displayed at the bottom of the 'National Account Summary' box ", async () => {
             await boxManagementSystemHomePage.verifyCustomerCodeResults(data.code);
        });
 
    });
});