import { RoadServiceContacCentretHomePage } from "../../pages/road_service_contact_centre/roadservicecontactcentre-home-page.po";
import { IncidentHistorySearchPage } from "../../pages/road_service_contact_centre/incident-history-search-page.po";
import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { protractor } from "protractor/built/ptor";
import { VendorLookUpPage } from "../../pages/road_service_contact_centre/vendor-look-up.po";
import { CreateWorkOrderPage } from "../../pages/road_service_contact_centre/create-work-order.po";

let roadSrviceContactServiceHomePage = new RoadServiceContacCentretHomePage();
let incidentHistorySearchPage = new IncidentHistorySearchPage();
let vendorLookUpPage=new VendorLookUpPage();
let createWorkOrderPage=new CreateWorkOrderPage();
let using = require('jasmine-data-provider');
//#111120_Creating work order
using(DataProvider.TC_111120, async function (data) {
    describe("Creating-work-order-111120", () => {
        let asset;
        let workOrder;
        it("Should Open road contact service url", async () => {
            await roadSrviceContactServiceHomePage.openRoadServiceContactCentreUrl();
        });

        it("Should click on incident history", async () => {
            await roadSrviceContactServiceHomePage.click(roadSrviceContactServiceHomePage.incidentHistory);
        });

        it("Should enter 'SHAJ18' to alpha input field", async () => {
            await incidentHistorySearchPage.setInputField(incidentHistorySearchPage.alphaInputField, data.alphaInputFieldValue);
        });

        it("Should click on search button", async () => {
            await incidentHistorySearchPage.click(incidentHistorySearchPage.searchButton);
        });

        it("Should take a note of asset", async () => {
            asset = await incidentHistorySearchPage.getAssetValue();
        });

        it("Should click on incident history", async () => {
            await incidentHistorySearchPage.click(incidentHistorySearchPage.incidentTab);
        });

        it("Should enter asset value to tractor input field", async () => {
            await roadSrviceContactServiceHomePage.setInputField(roadSrviceContactServiceHomePage.tractorInputField, asset);
        });

        it("Should tab out of tractor input field", async () => {
            await roadSrviceContactServiceHomePage.click(roadSrviceContactServiceHomePage.comments);
        });

        it("Should click on ok button", async () => {
            await roadSrviceContactServiceHomePage.clickOnOKButton();
        });

        it("Should select info to type dropdown", async () => {
            await roadSrviceContactServiceHomePage.setTypeDropdown(data.typeDropdownOption);
        });

        it("Should click on save incident button", async () => {
            await roadSrviceContactServiceHomePage.click(roadSrviceContactServiceHomePage.saveIncidentButton);
        });

        it("Should click on vendor look up tab", async () => {
            await roadSrviceContactServiceHomePage.click(roadSrviceContactServiceHomePage.vendorLookUpTab);
        });

        it("Should click on ok button", async () => {
            await vendorLookUpPage.clickOnOKButton();
        });

        it("Should select all types Under Service/Commodity Criteria", async () => {
            await vendorLookUpPage.clickCheckBox(data.checkBox);
        });
        
        it("Should enter 500 to radius input field", async () => {
            await vendorLookUpPage.setInputField(vendorLookUpPage.radiusInputField, data.radius);
        });

        it("Should click on search button", async () => {
            await vendorLookUpPage.click(vendorLookUpPage.searchButton);
        });

        it("Should double click on vendor", async () => {
            await vendorLookUpPage.doubleClickOnVendor();
        });

        it("Should click on create work order button", async () => {
            await vendorLookUpPage.click(vendorLookUpPage.createWorkOrderButton);
        });

        it("Should click on asset check box", async () => {
            await createWorkOrderPage.clickCheckBox(asset);
        });
      
        it("Should select UNPLANNED - Unplanned Vendor Work option to Work Order Category drop down", async () => {
            await createWorkOrderPage.setDropDown(data.workOrderCategoryDropDownName,data.workOrderCategoryDropDownOptionName);
        });

        it("Should enter CR_IA to vendor input field", async () => {
            await createWorkOrderPage.setInputField(createWorkOrderPage.vendorInputField, data.vendor);
        });

        it("Should enter 0330-01 to job code input field", async () => {
            await createWorkOrderPage.setInputField(createWorkOrderPage.jobCodeInputField, data.jobCodeInputValue);
        });

        it("Should enter test to condition input field", async () => {
            await createWorkOrderPage.setInputField(createWorkOrderPage.conditionInputField, data.conditionInputValue);
        });

        it("Should select 01 - Replaced option to Work Accomp drop down", async () => {
            await createWorkOrderPage.setDropDown(data.workAccompDropdownName,data.workAccompDropdownOption);
        });

        it("Should select 33 - Normal Wear option to Item Failure drop down", async () => {
            await createWorkOrderPage.setDropDown(data.itemFailureDropDownName,data.itemFailureDropDownOption);
        });

        it("Should select 410 - Unscheduled option to Reason drop down", async () => {
            await createWorkOrderPage.setDropDown(data.reasonDropDownName,data.reasonDropDownOption);
        });

        it("Should enter 104 to estimated labour input field", async () => {
            await createWorkOrderPage.setInputField(createWorkOrderPage.estimatedLabourInputField, data.estimatedLabourInputValue);
        });

        it("Should enter 192.5 to estimated issued item input field", async () => {
            await createWorkOrderPage.setInputField(createWorkOrderPage.estimatedIssuedItemInputField, data.estimatedIssuedItemInputValue);
        });

        it("Should enter 22 to estimated misc item input field", async () => {
            await createWorkOrderPage.setInputField(createWorkOrderPage.estimatedMiscItemInputField, data.estimatedMiscItemInputValue);
        });

        it("Should enter 0524 1259 to ecall back input field", async () => {
            await createWorkOrderPage.setInputField(createWorkOrderPage.callBackInputField, data.callBackInputValue);
        });

        it("Should click on create work order button", async () => {
            await createWorkOrderPage.click(createWorkOrderPage.createWorkOrderButton);
        });

        it("Should wait until spinner disappears", async () => {
            await createWorkOrderPage.waitUntilWorkOrderSpinnerDisappears();
        });

        it("Verifying sucess message", async () => {
            await expect<any>(createWorkOrderPage.verifySuccessMessage()).toContain(data.sucessMessage);
        });
        
        it("Should make a note of work order", async () => {
            workOrder=await createWorkOrderPage.workOrderNUmber();
            console.log("workOrder"+workOrder);
        });

    });
});       