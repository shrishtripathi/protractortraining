import { RoadServiceContacCentretHomePage } from "../../pages/road_service_contact_centre/roadservicecontactcentre-home-page.po";
import { IncidentHistorySearchPage } from "../../pages/road_service_contact_centre/incident-history-search-page.po";
import { DataProvider } from "../../data/dataProvider";


let roadSrviceContactServiceHomePage = new RoadServiceContacCentretHomePage();
let incidentHistorySearchPage = new IncidentHistorySearchPage();
let using = require('jasmine-data-provider');
//#113222_Testing for negative data
using(DataProvider.TC_113222, async function (data) {
    describe("Testing for negative data-113222", () => {
        it("Should Open road contact service url", async () => {
            await roadSrviceContactServiceHomePage.openRoadServiceContactCentreUrl();
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



    });
});   