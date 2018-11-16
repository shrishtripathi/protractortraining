import { browser } from "protractor";
import { protractor } from "protractor/built/ptor";
import { RoadServiceContacCentretHomePage } from "../../pages/road_service_contact_centre/roadservicecontactcentre-home-page.po";
import { IncidentHistorySearchPage } from "../../pages/road_service_contact_centre/incident-history-search-page.po";
import { VendorLookUpPage } from "../../pages/road_service_contact_centre/vendor-look-up.po";
import { CreateWorkOrderPage } from "../../pages/road_service_contact_centre/create-work-order.po";

import { DataProvider } from "../../data/dataProvider";
import { ShopfloorHomePage } from "../../pages/shopfloor/shopfloor.homepage.po";



let roadSrviceContactServiceHomePage = new RoadServiceContacCentretHomePage();
let incidentHistorySearchPage = new IncidentHistorySearchPage();
let vendorLookUpPage=new VendorLookUpPage();
let createWorkOrderPage=new CreateWorkOrderPage();
let shopfloorHomePage=new ShopfloorHomePage();
let using = require('jasmine-data-provider');
//#110847_Road Service Contact Center (All Steps)
using(DataProvider.TC_110847, async function (data) {
    describe("Road Service Contact Center (All Steps)", () => {
        let asset;
        let workOrder;
        it("Should Open road contact service url", async () => {
            await roadSrviceContactServiceHomePage.navigateToAppHome(roadSrviceContactServiceHomePage.roadServiceContactCentreUrl);
        });

        it("Should click on incident history", async () => {
            await roadSrviceContactServiceHomePage.click(roadSrviceContactServiceHomePage.incidentHistory);
        });

        it("Should enter '123456' to incident input field", async () => {
            await incidentHistorySearchPage.setInputField(incidentHistorySearchPage.incidentInput,data.incidentInputValue);
        });

        it("Should click on search button", async () => {
            await incidentHistorySearchPage.click(incidentHistorySearchPage.searchButton);
        });

        it("Verifying no data to diplay message", async () => {
            await expect<any>(incidentHistorySearchPage.verifyNoDataDisplayMessage()).toBe(data.noDataToDisplayMessage);
        });

        it("Should click on clear button", async () => {
            await incidentHistorySearchPage.clickOnClearButton();
        });

        it("Verifying data is cleared", async () => {
            await expect<any>(incidentHistorySearchPage.verifyInputFieldIsCleared(incidentHistorySearchPage.incidentInput)).toBe("");
        });

        it("Should enter '45454' to after date input field", async () => {
            await incidentHistorySearchPage.setInputField(incidentHistorySearchPage.afterDateInputField,data.afterDateInputValue);
        });

        it("Verifying background color of after date input field", async () => {
            await expect<any>(incidentHistorySearchPage.getBackgroundColorOfAfterDateInputField()).toBe(data.backGroundColor);
        });

        it("Should clear after date input field", async () => {
            await incidentHistorySearchPage.clearAfterDateInputField();
        });

        it("Verifying data is cleared", async () => {
            await expect<any>(incidentHistorySearchPage.verifyInputFieldIsCleared(incidentHistorySearchPage.incidentInput)).toBe("");
        });

        it("Should enter '333' to asset input field", async () => {
            await incidentHistorySearchPage.setInputField(incidentHistorySearchPage.assetInputField,data.assetInputFieldValue);
        });

        it("Should click on search button", async () => {
            await incidentHistorySearchPage.click(incidentHistorySearchPage.searchButton);
        });

        it("Verifying bad request error message", async () => {
            await expect<any>(incidentHistorySearchPage.verifyBadRequestErrorMessage()).toBe(data.badRequestError);
        });

        it("Should click on close button", async () => {
            await incidentHistorySearchPage.clickOnCloseBadrequestError();
        });

        it("Should click on clear button", async () => {
            await incidentHistorySearchPage.clickOnClearButton();
        });

        it("Verifying data is cleared", async () => {
            await expect<any>(incidentHistorySearchPage.verifyInputFieldIsCleared(incidentHistorySearchPage.assetInputField)).toBe("");
        });

        it("Should enter 'asdf' to asset input field", async () => {
            await incidentHistorySearchPage.setInputField(incidentHistorySearchPage.assetInputField,data.assetInputFieldValue1);
        });

        it("Should click on search button", async () => {
            await incidentHistorySearchPage.click(incidentHistorySearchPage.searchButton);
        });

        it("Verifying no data to diplay message", async () => {
            await expect<any>(incidentHistorySearchPage.verifyNoDataDisplayMessage()).toBe(data.noDataToDisplayMessage);
        });

        it("Should click on clear button", async () => {
            await incidentHistorySearchPage.clickOnClearButton();
        });

        it("Verifying data is cleared", async () => {
            await expect<any>(incidentHistorySearchPage.verifyInputFieldIsCleared(incidentHistorySearchPage.assetInputField)).toBe("");
        });

        it("Should enter '046543 abc' to asset input field", async () => {
            await incidentHistorySearchPage.setInputField(incidentHistorySearchPage.assetInputField,data.assetInputFieldValue2);
        });

        it("Should click on search button", async () => {
            await incidentHistorySearchPage.click(incidentHistorySearchPage.searchButton);
        });

        it("Verifying no data to diplay message", async () => {
            await expect<any>(incidentHistorySearchPage.verifyNoDataDisplayMessage()).toBe(data.noDataToDisplayMessage);
        });

        it("Should click on clear button", async () => {
            await incidentHistorySearchPage.clickOnClearButton();
        });

        it("Verifying data is cleared", async () => {
            await expect<any>(incidentHistorySearchPage.verifyInputFieldIsCleared(incidentHistorySearchPage.assetInputField)).toBe("");
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
            await roadSrviceContactServiceHomePage.waitForSavingIncidentLoading();
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
            await  createWorkOrderPage.waitUntilWorkOrderSpinnerDisappears();
        });
                
        it("Should make a note of work order", async () => {
            workOrder=await createWorkOrderPage.workOrderNUmber();
            console.log("workOrder"+workOrder);
        });

        it("Should Open road contact service url", async () => {
            await shopfloorHomePage.openshopfloorURL();
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