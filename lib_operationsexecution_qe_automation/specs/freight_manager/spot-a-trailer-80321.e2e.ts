import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { UnitViewPage } from '../../pages/freight_manager/unit-view.po';
import { OrderSegmentPage } from '../../pages/freight_manager/order-segment.po';
import { CheckCallDetailsPage } from '../../pages/freight_manager/check-call-details.po';
import { DataProvider } from "../../data/dataProvider";
import { UnitViewParameterPage } from '../../pages/freight_manager/unit-view-parameter.po';
import { browser } from 'protractor';


let homePage = new MyJbHuntHomePage();
let freightManager = new FreightManager2Page();
let unitView = new UnitViewPage();
let unitViewParameterPage = new UnitViewParameterPage();
let orderSegment = new OrderSegmentPage();
let checkCallDetailsPage = new CheckCallDetailsPage();
let using = require('jasmine-data-provider');
//TC_80321: FM2_Regression_21 Spot a Trailer
using(DataProvider.Tc_80321, async function (data) {
    describe("Spot a Trailer", function () {
        it("should open 'Freight Manager Page'", async function () {
            await homePage.openFm2Url();
        });
        it("should display 'Freight manager page'", async function () {
            let pageTitle = await freightManager.verifyFreightManagerPage();
            expect(pageTitle).toEqual(data.freightManagerTitle);
        });
        it("should click on 'Planning' in Freightmanager", async function () {
            await freightManager.mouseOverOnPlanningTab();
        });
        it("should click on 'Unit View' in Planning", async function () {
            await freightManager.clickOnUnitView();
        });
       
        it("Click on Parameter Button", async () => {
            await unitView.clickOnParameterButton();
        });

        it("Click on Board radio Button", async () => {
            await unitViewParameterPage.setParameterRadioAndChechBox(data.setParameterRadioAndChechBoxFieldName, data.setParameterRadioAndChechBoxOption)
        });

        it("should enter Board Codes", async () => {
            await unitViewParameterPage.enterSelectTypeCode(data.codeName, 1, data.BoardCode1);
            await unitViewParameterPage.enterSelectTypeCode(data.codeName, 2, data.BoardCode2);
            await unitViewParameterPage.enterSelectTypeCode(data.codeName, 3, data.BoardCode3);
            await unitViewParameterPage.enterSelectTypeCode(data.codeName, 4, data.BoardCode4);
        });

        it("Click on Save Parameter Button", async () => {
            await unitViewParameterPage.clickOnSaveParameterButton();
        });

        it("Click on Exit Button", async () => {
            await unitViewParameterPage.clickOnExitButton();
        });
        it("should click on 'Search Button",async function() {
            await unitView.clickSearchButton();
        });
        it("should Find a tractor that has a trailer attached (can be MTY PP) (Trl/Ctr) (Can be JBHU w/JBHZ chassis, or JBHZ only) and is available and copy the truck/tractor number as well as the trailer number and prefix ",async function() {
            await unitView.getTrailerNumber();  
           expect(unitView.spotDriverNumber).not.toBeNull();
        });
        it("should Hover on 'Driver Tab' in Freightmanager",async function() {
            await unitView.clickSearchButton();
            await freightManager.mouseOverToDriverTab();
        });
        it("should click on 'Order Segment' in Planning",async function() {
            await freightManager.clickOnTruckCheckCall();
        });
        it("should Enter the 'Truck number' and press enter ",async function() {
            await checkCallDetailsPage.enterDriverNumberAndPressEnter(unitView.spotDriverNumber);
        });
        it("should Hover over 'STATUS' and select  'SPOT' and enter customer",async function() {
            await checkCallDetailsPage.mouseOverToStatus();
            await checkCallDetailsPage.clickSpot();
        });
        it("should enter location in the spot pop up alert.",async function() {
            await checkCallDetailsPage.enterLocationInspotPopUp(unitView.destination);
        });
        it("should click on 'Update'",async function() {
            await checkCallDetailsPage.clickOnUpdate();
        });
        it("should Hover over 'STATUS' and select  'SPOT' and enter customer",async function() {
            await checkCallDetailsPage.mouseOverToStatus();
            await checkCallDetailsPage.clickComment();
        });
        it("should enter trailer number",async function() {
            await checkCallDetailsPage.enterTrailerNumber(unitView.trailerCode,unitView.trailerNumber,data.customerNumber);
            await checkCallDetailsPage.clickOnUpdate();
        });


    });
})