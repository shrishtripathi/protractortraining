import { DataProvider } from "../../data/dataProvider";
import { DetailsPage } from "../../pages/eom/details.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { FleetDecisionPage } from "../../pages/eom/fleet-decision.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { CustomerPoolPage } from "../../pages/freight_manager/customer-pool.po";
import { CheckCallDetailsPage } from "../../pages/freight_manager/check-call-details.po";
import { HighValueBriefingPage } from '../../pages/safety_briefing/high-value-briefing.po';
import { HazmatVerificationPage } from '../../pages/safety_briefing/hazmat-verification.po';
import { SafetyHomePage } from '../../pages/safety_briefing/safety-briefing-home.po';


let using = require('jasmine-data-provider');
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let fleetDecisionPage = new FleetDecisionPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let unitViewPage = new UnitViewPage();
let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let orderSegmentPage = new OrderSegmentPage();
let detailsPage = new DetailsPage();
let customerPoolPage = new CustomerPoolPage();
let checkCallDetailsPage = new CheckCallDetailsPage();
let safetyHomePage = new SafetyHomePage();
let highValueBriefingPage = new HighValueBriefingPage();
let hazmatVerificationPage = new HazmatVerificationPage();
let skeltonListingPage = new SkeletonListingPage();
let loadDetailsPage = new DetailsPage();

// #TC182012 - FM2 High Value Check Calls
describe('FM2 High Value Check Calls', async () => {
    let loadNumber: string;
    let unitNumber: string;
    let originRamp: string;    
    let route: string;           
    let destinationRamp: string;
    let equipmentnumber: string

    using(DataProvider.Tc_177262, async function (data) {

        describe("EOM Hazmat Load Create", function () {            
    
            it("Should open EOM url", () => {
                enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });
    
            it("should enter GEEC in Bill To Code field", async function () {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
            });
    
            it("should enter LGFO18 in Origin field", async function () {
                await enterpriseOrderManagementPage.setOrigin(data.origin);
            });
    
            it("Should click on Search Skelton button", async () => {
                await enterpriseOrderManagementPage.clickSearchSkeletons();
            });
    
            it("Verifying that skeltons list will be displayed", async () => {
                await expect(skeltonListingPage.verifySkeltonList(data.zero)).toBeTruthy();
            });
    
            it("Should find an order that has HJBT JBVAN underneath Division, and TRAIN underneath Mode and click on skelton book load", async () => {
                await skeltonListingPage.clickOnBookLoadWithDivisionHjbtJbvanAndTrainMode();
            });
    
            it("Verifying that skeltons pick screen will be displayed", async () => {
                await expect<any>(skeltonListingPage.getSkeletonPickScreenTitle()).toBe(data.skeletonPickScreenTitle);
            });
    
            it("Should click on Next Button in skelton pick screen", async () => {
                await skeltonListingPage.clickOnSkeletonNextButton();
            });
    
            it("Should click on IM", async () => {
                await skeltonListingPage.clickOnIM();
            });
    
            it("Verifying that New Load Deatils screen will be displayed", async () => {
                await expect<any>(loadDetailsPage.getStandardNewLoadScreenTitle()).toBe(data.standardNewLoadScreenTitle);
            });
    
            it("Should click on dropdown tab next to Load DETAIL", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfLoadDetails();
            });
    
            it("Should select empty from Monitor Code dropdown", async () => {
                await loadDetailsPage.monitorsValueSelection(data.monitorCode);
            });
    
            it("Should click on dropdown tab next to Bill To GEEC", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
            });
    
            it("Should click on the magnifying glass next to Classifications to Bill To GEEC", async () => {
                await loadDetailsPage.clickOnMagnifyingGlass();
            });
    
            it("Should click on the HAZMAT checkbox to select", async () => {
                await loadDetailsPage.clickOnOrderClassificationCheckBox(data.classificationCheckboxValue);
            });
    
            it("Should click on Close button", async () => {
                await loadDetailsPage.clickOnCloseButton();
            });
    
            it("Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
            });
    
            it("Should clear date and time in Scheduled Appointment Time for Stop 99", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTimeInStop99(data.stop99Date, data.stop99BeginTime, data.stop99EndTime);
            });
    
            it("Should select 'Y' option from dropdown under Hazmat ", async () => {
                await loadDetailsPage.selectOptionFromHazmatDropDown(data.hazmatDropDownValue);
            });
    
            it("Should click on Create Load button", async () => {
                await loadDetailsPage.clickOnCreateLoad();
            });
    
            it("Should take note of the load number at the top of the page", async () => {
                loadNumber = await loadDetailsPage.focusLoadNumber();
                console.log("loadNumber:" + loadNumber);
            });
    
            it("Should take note of the destination details at bottom of the page", async () => {
                originRamp = await detailsPage.getOriginRamp();
            });
    
        });
    
    });

    using(DataProvider.Tc_187034, async function (data) {

        describe('Finding a JBC Driver', () => {

            it('Should Navigate to Freight Manager2 url', async () => {
                await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.freightManager2);
            });

            it("Should select 'Unit View' under planning tab", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.option);
            });

            it("should enter Board Codes", async () => {
                await unitViewPage.enterBarCodes(data.boardCode1, 1);
                await unitViewPage.enterBarCodes(data.boardCode2, 2);
                await unitViewPage.enterBarCodes(data.boardCode3, 3);
                await unitViewPage.enterBarCodes(data.boardCode4, 4);
                await unitViewPage.clickOnSearchButton();
            });

            it("Select driver from the displayed search results", async () => {
                unitNumber = await unitViewPage.getAvailableTractor(data.DSPSTT, data.OBCError);
            });

            it("Verify the other columns data from Serach results", async () => {
                await expect<any>(unitViewPage.validateBarCodeSearchResults(unitNumber)).toBeTruthy();
            });

        });

    });

    using(DataProvider.Tc_185247, async function (data){

        describe("FM2 Hazmat Preplan", function(){            
    
            it("Should Open My JBHunt url", async() => {
                await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.freightManager2);
            });
    
            it("Should click on'Order Segment' under planning tab", async () => {
               await myJbHuntHomePage.selectOptionFromTab(data.tabName,data.option);
            });
    
            it("Should enter the earlier noted load number, in the white text box underneath Order# ", async () => {
                await orderSegmentPage.enterOrderNumber(loadNumber, "Order Number");
            });
    
            it("Should click on Search button", async () => {
                await orderSegmentPage.clickSearchButton();
            });
        
            it("Should click the radial button next to Tractor, in the white text box underneath Tractor enter the earlier noted driver number", async () => {
                await orderSegmentPage.enterTractorNumber(unitNumber);
            });
    
            it("Should Click all the check boxes", async () => {
                await orderSegmentPage.clickAllCheckbox();
            });
    
            it("Should enter the origin ramp, In the white text box underneath TCall Location", async () => {
                await orderSegmentPage.EnterTcall(originRamp, "");
            });
    
            it("Should Click the Create preplan button and click the Continue button if required", async () => {
                await orderSegmentPage.clickOnCreatePreplanButton();
            });
    
        });
    });

    using(DataProvider.Tc_187073, async function (data) {

        describe("Hazmat Dispatch", function () {
    
            it("Should Open FM2 url", async () => {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2)
            });
    
            it("Should select 'Customer Pool' under equipment tab", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.equipment, data.customerPool);
            });
    
            it("Click the dropdown tab next to Division, click to select HJBT JBVAN.", async () => {
                await customerPoolPage.selectDivision(data.divison)
            });
    
            it("In the white text box next to Cust Code, enter LGFO18", async () => {
                await customerPoolPage.enterCustCode(data.custCode);
            });
    
            it("Click the Search button", async () => {
                await customerPoolPage.clickOnSearchButton();
            });
    
            it("Take note of the equipment number.", async () => {
                equipmentnumber = await customerPoolPage.equipmentNumberWithEmptyLoadStausAndPreFix('JBHU');
                console.log('equipmentnumber: '+ equipmentnumber)
            });
    
            it("Hover over the Planning tab, click to select Order Segment", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.planning, data.orderSegment);
            });
    
            it("In the text box underneath Order#, enter your order number", async () => {               
                await orderSegmentPage.enterOrderId(loadNumber);
            });
    
            it("click the Search button", async () => {
                await orderSegmentPage.clickOnSearchButton();
            });
    
            it('Click the driver number hyperlink underneath Power Driver',async () => {
                await orderSegmentPage.clickTractorNumberUnderPowerDriverColumn(unitNumber);
            });
    
            it("verify Check Calls Details screen opens", async () => {
                await checkCallDetailsPage.verifyCheckCallDetailsPage();
            });

            it("Hover status Option from header", async () => {
                await freightManager2Page.hoverOverFM2PageHeaderOption(data.headerOptionStatus);
            });

            it("Click on Comment option", async () => {
                await freightManager2Page.clickHeaderDropDownOption(data.headerDropDownOptionComment);
            });

            it("Wait till Comment window opens", async () => {
                await checkCallDetailsPage.waitTillDispatchWindowLoad();
            });
    
            it("Should enter details in Comment Tab", async () => {
                await customerPoolPage.enterDetailsInCommentPopup(data.commentPopup_TrlrCode, equipmentnumber);
            });
    
            it("Should click on update button on Comment window", async () => {
                await checkCallDetailsPage.clickOnUpdateOnPopup();
            });
    
            it("Should hover status Option from header", async () => {
                await freightManager2Page.hoverOverFM2PageHeaderOption(data.headerOptionStatus);
            });
    
            it("Should click on dispatch option", async () => {
                await freightManager2Page.clickHeaderDropDownOption(data.headerDropDownOptionDispatch);
            });
    
            it("Wait till dispatch window opens", async () => {
                await checkCallDetailsPage.waitTillDispatchWindowLoad();
            });
    
            it("Should click on update button on dispatch window", async () => {
                await checkCallDetailsPage.clickOnUpdateOnPopup();
            });
    
            it("Verify Dispatch is completed", async () => {
                let result: boolean = await checkCallDetailsPage.verifyCheckCallHistorySuccessful(data.transactionValue);
                await expect(result).toBeTruthy();
            });
    
        });
    })

    using(DataProvider.Tc_185293, async function (data) {

        describe('Safety Briefing Hazmat and Verification', () => {
    
            it("Should open Safety Briefing url ", async ()=>{
                await safetyHomePage.navigateToAppHome(safetyHomePage.safetyBriefingUrl);
                await hazmatVerificationPage.waitForLoadingMask();
            });
    
            it("Should over the Safety Briefing tab, and click Create New Briefing ", async ()=>{
                await safetyHomePage.mouseOverTab(data.tabName);
                await safetyHomePage.clickDropDownValue(data.dropDownOptions);
            });
    
            it("Should enter order number ", async ()=>{
                await safetyHomePage.enterOrderNumber(loadNumber);
            });
    
            it('Should Click OK for Manager Instructions', async () => {
                await hazmatVerificationPage.clickOkButton();
            });
    
            it('Should enter UN/NA Number', async () => {
                await hazmatVerificationPage.enterUnNumber(data.unNum);
            });
    
            it('Should enter Material Weight', async () => {
                await hazmatVerificationPage.enterUnNumber(data.materialWeight);
            });
    
            it('Should enter No. Of Packages', async () => {
                await hazmatVerificationPage.enterNoOfPackage(data.noOfPackage);
            });
    
            it('Should enter Package Type', async () => {
                await hazmatVerificationPage.enterPackageType();
            });     
            
            it('Should enter Package Type', async () => {
                await hazmatVerificationPage.clickNext();
            });   
    
            it('Should Check Air Bag and enter emergency response telephone number', async () => {
                await hazmatVerificationPage.clickAirBagCheckBox();
                await hazmatVerificationPage.enterEmergencyTelephoneNumber(data.telNumber1, data.telNumber2, data.telNumber3);
            });
            
            it('Should enter Shipper Name', async () => {
                await hazmatVerificationPage.enterShipperName(data.shipperName);
            });
    
            it('Should enter Emergency Response Provider Contract Number', async () => {
                await hazmatVerificationPage.enterEmergencyContract(data.contractNumber);
            });
    
            it('Should click Next', async () => {
                await hazmatVerificationPage.clickEmergencyInformationNext();
            });
            
            it('Should click Next', async () => {
                await hazmatVerificationPage.clickConfirmNext();
            });
    
            it('Should check all checkboxes', async () => {
                await hazmatVerificationPage.checkAllCheckBoxes();
            });
    
            it('Should click Ok to Confirm', async () => {
                await hazmatVerificationPage.clickConfirmOk();
            });
    
            it('Check the first order number', async () => {
                expect(await hazmatVerificationPage.getFirstOrderNumber()).toEqual(data.orderNumber);
            });
        });
    });

    using(DataProvider.Tc_185257, async function (data) {

        describe("FM2 High Value & Hazmat Check Calls", () => {

            it("should Launch Freight Manager Application And Login If Required", async () => {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
            });

            it("should Hover Over The Planning Tab, Click Order Segment To Select", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.tabOption);
            });

            it("should Enter Load Number In The White Text Box Underneath Order#", async () => {
                await orderSegmentPage.enterOrderId(loadNumber);
            });

            it("should Click On Search Button", async () => {
                await orderSegmentPage.clickOnSearchButton();
            });

            it("should click the driver number hyperlink underneath Power Driver", async () => {
                await orderSegmentPage.clickTractorNumberUnderPowerDriverColumn(unitNumber);
            });

            it("verify Check Calls Details screen opens", async () => {
                await checkCallDetailsPage.verifyCheckCallDetailsPage();
            });

            it("Hover status Option from header", async () => {
                await freightManager2Page.hoverOverFM2PageHeaderOption(data.checkcalltabName);
            });

            it("should click on Arrival/Loaded option under Status tab", async () => {
                await freightManager2Page.clickHeaderDropDownOption(data.checkCalloption);
            });

            it("Wait till Arrival/Loaded window opens", async () => {
                await checkCallDetailsPage.waitTillDispatchWindowLoad();
            });

            it("should enter arrival and loaded details", async () => {
                await checkCallDetailsPage.enterDetailsInArrivalAndLoaded();
            });

            it("should click on update button", async () => {
                await checkCallDetailsPage.clickOnUpdateOnPopup();
            });
        });
    });

});
