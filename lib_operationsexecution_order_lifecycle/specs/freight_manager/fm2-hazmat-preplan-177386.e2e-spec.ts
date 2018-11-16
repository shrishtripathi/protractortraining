import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { DetailsPage } from "../../pages/eom/details.po";
import { DataProvider } from "../../data/dataProvider";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { browser } from "protractor";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeltonListingPage = new SkeletonListingPage();
let loadDetailsPage = new DetailsPage();
let freightManager2Page = new FreightManager2Page();
let unitViewPage = new UnitViewPage();
let orderSegmentPage = new OrderSegmentPage();
let using = require('jasmine-data-provider');

// TC #177386 - FM2 Hazmat Preplan
describe("FM2 Hazmat Preplan", function () {
    let loadNumber: string;
    let originRamp: string;
    let tractorNumber: string;

    using(DataProvider.Tc_177262, async function (data) {

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

        it("Should click on dropdown tab next to Bill To GEEC", async () => {
            await loadDetailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
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
            loadNumber = loadNumber.trim();
            console.log("loadNumber:" + loadNumber);
        });

        it("Should take note of the destination details at bottom of the page", async () => {
            originRamp = await loadDetailsPage.getOriginRamp();
            console.log("originRamp:" + originRamp);
        });

    });

    using(DataProvider.Tc_187034, async function (data) {

        it('Should Navigate to Freight Manager2 url', async () => {
            await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
        });

        it("Should select 'Unit View' under planning tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.option);
        });

        it("Should enter Board Codes", async () => {
            await unitViewPage.enterBarCodes(data.boardCode1, 1);
            await unitViewPage.enterBarCodes(data.boardCode2, 2);
            await unitViewPage.enterBarCodes(data.boardCode3, 3);
            await unitViewPage.enterBarCodes(data.boardCode4, 4);
            await unitViewPage.clickOnSearchButton();
        });

        it("Should select driver from the displayed search results", async () => {
            tractorNumber = await unitViewPage.getAvailableTractor(data.DSPSTT, data.OBCError);
            tractorNumber = tractorNumber.trim();
            console.log("tractorNumber:" + tractorNumber);
        });

        it("Verifying that the other columns data from Serach results", async () => {
            await expect<any>(unitViewPage.validateBarCodeSearchResults(tractorNumber)).toBeTruthy();
        });

    });

    using(DataProvider.Tc_185247, async function (data) {

        it("Should click on'Order Segment' under planning tab", async () => {
            await freightManager2Page.selectOptionFromTab(data.tabName, data.option);
        });

        it("Should enter the earlier noted load number, in the white text box underneath Order# ", async () => {
            await orderSegmentPage.enterOrderNumber(loadNumber, "Order Number");
        });

        it("Should click on Search button", async () => {
            await orderSegmentPage.clickSearchButton();
        });

        it("Should click the radial button next to Tractor, in the white text box underneath Tractor enter the earlier noted driver number", async () => {
            await orderSegmentPage.enterTractorNumber(tractorNumber);
        });

        it("Should Click all the check boxes", async () => {
            await orderSegmentPage.clickOnCheckBox();
        });

        it("Should enter the origin ramp, In the white text box underneath TCall Location", async () => {
            await orderSegmentPage.enterTcallLocationValue(originRamp);
        });

        it("Should Click the Create preplan button and click the Continue button if required", async () => {
            await orderSegmentPage.clickOnCreatePreplanButton();
        });

    });

});