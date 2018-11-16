import { browser } from 'protractor';
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { PickupviewPage } from '../../pages/freight_manager/pick-up-view.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { FleetManagerView } from "../../pages/freight_manager/fleet-manager-view.po";
import { OrderSegmentPage } from '../../pages/freight_manager/order-segment.po';
import { UnitViewPage } from '../../pages/freight_manager/unit-view.po';
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let pickupviewPage = new PickupviewPage();
let orderSegmentPage = new OrderSegmentPage();
let unitViewPage = new UnitViewPage();
let fleetManagerView = new FleetManagerView();
let using=require('jasmine-data-provider');
using(DataProvider.Tc_79110, async function(data){
//Tc#79110 - FM2_Regression_5 Find order via Driver View, preplan via order segment using driver alpha
describe("Find order via driver view preplan via order segment using driver alpha", function () {

    let text_OrderNo : string;
    let orderNumber  : string;
    let driverAlpha: string;

    it("Open My JBHunt url", async () => {
        await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url)
    });

    it("Should click on 'UNIT VIEW'under planning tab", async () => {
        await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.option);

    });

    it("Should click 'Search' button", async () => {
        await fleetManagerView.clickSearchButtonInFM2Page();

    });

    it("Should find a driver that is available with no preplans and make note of alpha code ", async () => {
        driverAlpha = await unitViewPage.getDriverAlpha();
        console.log("spec driver: " + driverAlpha);
    });

    it("Should select 'PICK UP' under planning tab", async () => {
        await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.pickUpOption);
    });

    it("Should select 'Area' to type dropdown", async () => {
        await pickupviewPage.selectTypeArea();
    });

    it("Should type 'HJBT JBVAN' in division field ", async () => {
        await pickupviewPage.enterDivision(data.strDivison);
    });

    it("Should type 'MKT' in Area type field ", async () => {
        await pickupviewPage.enterAreaType(data.strAreaType);
    });

    it("Should type 'DA' in Area field ", async () => {
        await pickupviewPage.enterArea(data.strArea);
    });

    it("Should type 'I' in Tran Md  field ", async () => {
        await pickupviewPage.cleanTrandMDField();
        await pickupviewPage.enterTranMdByIndex( data.transMdIndex, data.strTranMd);
    });

    it("Should click 'Save Prefs' button", async () => {
        await pickupviewPage.clickSavePrefsButton();
    });

    it("Should click 'Search' button", async () => {
        await fleetManagerView.clickSearchButtonInFM2Page();
    });

    it("Should Find an order with blank PWR/DRVR NOTES field ", async () => {
        let orderNumbers = await pickupviewPage.getOrderNumberByColumnValues(data.recordsCount, data.columnHeader1, data.columnHeader1Value,data.columnHeader2, data.columnHeader2Value);
        expect(orderNumbers).not.toBeUndefined();
        orderNumber = orderNumbers[0];
        console.log("orderNumber: " + orderNumber);
    });
    

    it("Should Select 'ORDER SEGMENT' under  planning ", async () => {
        await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.optionOrderSegment);
    });

    it("Should Enter order number in the order bar ", async()=>{
        await orderSegmentPage.enterOrderId(orderNumber);
       
     });

    it("Should click search button ", async () => {
        await orderSegmentPage.clickSearchButton();
    });

    it("Should click Radial button next to Driver Alpha ", async () => {
        await orderSegmentPage.clickRadioButton(data.radioButtonDriverAlpha);
    }); 

    it("Should enter your 'DRIVER ALPHA number", async () => {
        await orderSegmentPage.enterDriverAlphatext(driverAlpha);

    });
    it("Should click 'CREATE PREPLAN' button",async () => {
        await orderSegmentPage.clickCreatePreplanButton();
    });

    it("Should click 'Driver Preplan List' button", async () => {
        await orderSegmentPage.clickDriverPreplanList();
    });

    it("Should click 'Update' button", async () => {
       await orderSegmentPage.clickUpdateButton();

    });



});
})