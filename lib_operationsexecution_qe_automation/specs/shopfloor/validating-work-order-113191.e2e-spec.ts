import { DataProvider } from "../../data/dataProvider";
import { ShopfloorHomePage } from "../../pages/shopfloor/shopfloor.homepage.po";
import { browser } from "protractor";
let shopfloorHomePage=new ShopfloorHomePage();
let using = require('jasmine-data-provider');
//#113191_Validating work order
using(DataProvider.TC_113191, async function (data) {
    describe("Validating-work-order", () => {
        let workOrder;
        it("Should Open road contact service url", async () => {
            await shopfloorHomePage.openshopfloorURL()
        });

        it("Should login into shop floor application", async function () {
            await shopfloorHomePage.login(data.userid, data.password);
        });

        it("Verifying that redirected to shopfloor Page", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.shopfloorPageTitle);
        });

        it("Should hover on work order dropdown and select 'Fleet Assignments'", async function () {
            await shopfloorHomePage.hoverOnDropdownAndSelectOption(data.workOrderDropdown, data.fleetAssignmentsOption);
        });

        it("Should enter work order number to work order input field", async () => {
            await shopfloorHomePage.setInputField(shopfloorHomePage.workOrderInputField, workOrder);
        });

        it("Should click on search button", async () => {
            await shopfloorHomePage.click(shopfloorHomePage.searchButton);
        });
       
        it("Verifying work order number", async () => {
            await expect<any>(shopfloorHomePage.verifyWorkOrder(workOrder)).toBe(workOrder);
        });
    });
});