import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { DetailsPage } from "../../pages/eom/details.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { CommentsPage } from "../../pages/eom/comments.po";
import { browser } from "protractor";
import { LTLInformationPage } from "../../pages/eom/ltl-information.po";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let loadDetailsPage = new DetailsPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let skeletonListingPage = new SkeletonListingPage();
let commentsPage = new CommentsPage();
let lTLInformationPage = new LTLInformationPage();

export class EOME2EComponents {

    // Scenario 4001: EOM 1Pick/1Drop Load Create -- Done
    async eomOnePickOrDropTruckModeLoadCreate(data) {

        describe("4001 EOM 1Pick/1Drop Load Create", () => {

            it('Should open Eom url', async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl)
            });

            it('Should enter Bill to Code', async () => {
                await enterpriseOrderManagementPage.enterBillToCode(data.code)
            });

            it('Should enter Origin Code', async () => {
                await enterpriseOrderManagementPage.setOrigin(data.originCode)
            });

            it('Should click on Search Skeletons Button', async () => {
                await enterpriseOrderManagementPage.clickOnEOMButton(data.searchSkeletonButtonId)
            });

            it('Should click on Book load icon having Mode as Truck', async () => {
                await skeletonListingPage.clickOnBookIconHavingTruckMode();
            });

            it("Should click on Next Button in skelton pick screen", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });

            it('Should select option for reason code', async () => {
                await skeletonListingPage.selectOptionFromChooseReasonCode(data.reasonCode);
            });

            it('Should click on book load with rate button', async () => {
                await skeletonListingPage.clickOnBookLoadWithoutRateButton();
            });

            it('Should click on Truck Under Current Date', async () => {
                await loadDetailsPage.clickOnTruck();
            });

            it('Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time', async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
            });

            it('Should clear date and time in Scheduled Appointment Time for Stop 99', async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTimeInStop99(data.stop99Date, data.stop99BeginTime, data.stop99EndTime);
            });

            it('Should click on Load Detail Dropdown Tab', async () => {
                await orderDetailsViewPage.loadDetailsClick();
            });

            it('Should not contain any data in Monitor Dropdown', async () => {
                await orderDetailsViewPage.monitorsValueSelection(data.monitorValue)
            });

            it('Should Click on Bill To Dropdown Tab', async () => {
                await orderDetailsViewPage.billToClick();
            });

            it('Should Verify text in Classification tab', async () => {
                await orderDetailsViewPage.verifyClassificationText();
            });

            it('Should Click On COMMENTS Tab', async () => {
                await orderDetailsViewPage.commentsTabClick()
            });

            it('Should Click On The Dropdown Tab Underneath Type, Click GENERAL.', async () => {
                await commentsPage.commentsTypeValueSelection(data.commentType);
            });

            it('Should Add THIS IS A TEST ORDER DO NOT PROCESS In The Comment Section', async () => {
                await commentsPage.setComments(data.comment);
                await commentsPage.setComments(data.comment);
            });

            it('Should click On The Details Tab', async () => {
                await orderDetailsViewPage.detailsTabClick();
            });

            it('Verifying that the Comments Tab Is Now COMMENTS (1)', async () => {
                await expect<any>(orderDetailsViewPage.commentsTab.getText()).toBe(data.commentsText);
            });

            it('Should click on Create Load button', async () => {
                await orderDetailsViewPage.clickOnCreateLoadButton();
                await orderDetailsViewPage.clickOnOverRideSelectButton();
            });

            it('Should Note Load Number', async () => {
                data.orderNumber = await loadDetailsPage.focusLoadNumber();
                data.orderNumber = data.orderNumber.trim();
            });

            it("Should Click On Load Detail Dropdown Tab", async () => {
                await orderDetailsViewPage.loadDetailsClick();
            });

            it("Should Take Note Of Initials Under Load Details Tab Of EOM Screen", async () => {
                data.initials = await loadDetailsPage.getInitials();                
                data.initials = data.initials.trim();
            });

        });

    }

    // Verifying Preplan in EOM -- Done
    async eomPreplanVerification(data, loadData, driverData) {
        //TC 187618: EOM Preplan Verification
        describe("EOM Preplan Verification", () => {
            it("Should open EOM url", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("Should select LOAD # from Search Option drop down and enter  load value in search input field", async () => {
                await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.dropDownOption, loadData.orderNumber);
            });

            it("Should click on Search Loads button", async () => {
                await enterpriseOrderManagementPage.clickSearchLoadsButton();
            });

            it("Verifying that loads will be displayed", async () => {
                expect<any>(await skeletonListingPage.verifyLoadValue()).toBe(loadData.orderNumber);
            });

            it("Should click on the hyperlink under Load #", async () => {
                await skeletonListingPage.selectLoadUnderLoadListing(loadData.orderNumber);
            });

            it('Should click on Load Detail Dropdown Tab', async () => {
                await orderDetailsViewPage.loadDetailsClick();
            });

            it("Verifying that status is AVAILABLE", async () => {
                expect(await orderDetailsViewPage.getLoadStatus()).toBe(data.availableText);
            });

            it("Verifying that underneath PPNOTE has our earlier noted driver", async () => {
                expect(await orderDetailsViewPage.getDriverNumber()).toBe(driverData.unitNumber);
            });

        });
    }

    // 189147 EOM ICS Dispatch Verification -- Done
    async eomIcsDispatchVerification(data) {

        describe("EOM ICS Dispatch Verification", () => {
            let orderNumber = 'M528605';

            it("Should open My JBHunt url", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("Should select LOAD # from Search Option drop down and  load value in search input field", async () => {
                await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.tabName, orderNumber);
            });

            it("Should click on Search Loads button", async () => {
                await enterpriseOrderManagementPage.clickOnEOMButton(data.searchLoadsID);
            });

            it("Waiting till processing", async () => {
                await enterpriseOrderManagementPage.waitTillProcessing(data.pageLoadText);
            });

            it("Should click on the hyperlink under Load #", async () => {
                await skeletonListingPage.selectLoadUnderLoadListing(orderNumber);
            });

            it("Should click on the 'Load Details' Arrow Icon", async () => {
                await loadDetailsPage.loadDetailsClick();
            });

            it('Should Ensure Mode is Truck', async () => {
                await loadDetailsPage.verifyModeTruckInLoadDetail();
            });

            it("Verifying that underneath PPNOTE driver", async () => {
                expect(await orderDetailsViewPage.getDriverNumber()).toBe(data.unitNumber);
            });
        });
    }

    // Create Hazmat Load -- Done
    async eoMHazmatLoadCreate(data) {

        describe("EOM Hazmat Load Create", function () {

            it("Should open EOM url", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("should enter 'GEEC' in Bill To Code field", async function () {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
            });

            it("should enter 'LGFO18' in Origin field", async function () {
                await enterpriseOrderManagementPage.setOrigin(data.origin);
            });

            it("Should click on Search Skelton button", async () => {
                await enterpriseOrderManagementPage.clickSearchSkeletons();
            });

            it("Verifying that skeltons list will be displayed", async () => {
                await expect(skeletonListingPage.verifySkeltonList(data.zero)).toBeTruthy();
            });

            it("Should find an order that has 'HJBT JBVAN' underneath Division, and 'TRAIN' underneath Mode and click on skelton book load", async () => {
                await skeletonListingPage.clickOnBookLoadWithDivisionAndMode(data.division, data.modeType);
            });

            it("Verifying that skeltons pick screen will be displayed", async () => {
                await expect<any>(skeletonListingPage.getSkeletonPickScreenTitle()).toBe(data.skeletonPickScreenTitle);
            });

            it("Should click on Next Button in skelton pick screen", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });

            it("Should click on IM", async () => {
                await skeletonListingPage.clickOnIM();
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
                await loadDetailsPage.receiverScheduledAppointmentEmptyCheck();
            });

            it("Should select 'Y' option from dropdown under Hazmat ", async () => {
                await loadDetailsPage.selectOptionFromHazmatDropDown(data.hazmatDropDownValue);
            });

            it("Should Click On COMMENTS Tab", async () => {
                await orderDetailsViewPage.commentsTabClick();
            });

            it("Should Click On The Dropdown Tab Underneath Type, Click GENERAL.", async () => {
                await commentsPage.commentsTypeValueSelection(data.commentType);
            });

            it("Should Add 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!' In The Comment Section", async () => {
                await commentsPage.setComments(data.comment);
                await commentsPage.setComments(data.comment);
            });

            it("Click On The 'Details' Tab", async () => {
                await orderDetailsViewPage.detailsTabClick();
            });

            it("Verifying The Comments Tab Is Now COMMENTS (1)", async () => {
                await expect<any>(orderDetailsViewPage.commentsTab.getText()).toBe(data.commentsText);
            });

            it("Should click on Create Load button", async () => {
                await orderDetailsViewPage.clickOnCreateLoadButton();
                await orderDetailsViewPage.clickOnOverRideSelectButton();
            });

            it("Should take note of the load number at the top of the page", async () => {
                data.orderNumber = await loadDetailsPage.focusLoadNumber();
                data.orderNumber = data.orderNumber.trim();
            });

            it("Should take note of the destination details at bottom of the page", async () => {
                data.originRamp = await loadDetailsPage.getOriginRamp();
            });

        });

    }

    // Create One Pick/Drop Load -- Done
    async eomOnePickOrDropLoadCreate(data) {

        describe("EOM 1Pick/1Drop Load Create", () => {

            it("Should open Eom url", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl)
            });

            it('Should Enter Bill to Code', async () => {
                await enterpriseOrderManagementPage.enterBillToCode(data.code)
            });

            it('Should Enter Origin Code', async () => {
                await enterpriseOrderManagementPage.setOrigin(data.originCode)
            });

            it('Should Click on Search Skeletons Button', async () => {
                await enterpriseOrderManagementPage.clickOnEOMButton(data.searchSkeletonButtonId)
            });

            it('Should Click on Book load icon having Mode as Train', async () => {
                await skeletonListingPage.clickOnBookLoadIconHavingTrainMode();
            });

            it('Should Click on Next in Select Pick Up Date Screen', async () => {
                await skeletonListingPage.clickNextONSelectPickUpDateScreen()
            });

            it('Should Click on IM Under Current Date', async () => {
                await skeletonListingPage.clickOnIM();
            });

            it('Should Set Time under Scheduled Appointmnet', async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime)
            });

            it('Should set Stop99 Scheduled Appointment Date And Time', async () => {
                await loadDetailsPage.receiverScheduledAppointmentEmptyCheck();
            });

            it('Should click on Load Detail Dropdown Tab', async () => {
                await orderDetailsViewPage.loadDetailsClick();
            });

            it('Should not contain any data in Monitor Dropdown', async () => {
                await orderDetailsViewPage.monitorsValueSelection(data.monitorValue)
            });

            it('Should Click on Bill To Dropdown Tab', async () => {
                await orderDetailsViewPage.billToClick();
            });

            it('Should Verify text in Classification tab', async () => {
                await expect<any>(orderDetailsViewPage.verifyClassificationText()).toBe('');
            });

            it("Should Click On COMMENTS Tab", async () => {
                await orderDetailsViewPage.commentsTabClick()

            });

            it("Should Click On The Dropdown Tab Underneath Type, Click GENERAL.", async () => {
                await commentsPage.commentsTypeValueSelection(data.commentType);
            });

            it("Should Add 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!' In The Comment Section", async () => {
                await commentsPage.setComments(data.comment);
                await commentsPage.setComments(data.comment);
            });

            it("Click On The 'Details' Tab", async () => {
                await orderDetailsViewPage.detailsTabClick();
            });

            it("Verifying The Comments Tab Is Now COMMENTS (1)", async () => {
                await expect<any>(orderDetailsViewPage.commentsTab.getText()).toBe(data.commentsText);
            });

            it('Should Click on Create Load Button', async () => {
                await orderDetailsViewPage.clickOnCreateLoadButton();
                await orderDetailsViewPage.clickOnOverRideSelectButton();
            });

            it('Should Note Load Number', async () => {
                data.orderNumber = await loadDetailsPage.focusLoadNumber();
                data.orderNumber = data.orderNumber.trim();
            });

            it('Should Note Destination Details', async () => {
                data.originRamp = await loadDetailsPage.getOriginRamp();
                data.originRamp = data.originRamp.trim();
            });

        });
    }

    // Create Multi Pick/Drop Load -- Done
    async eomMultiPickDropLoadCreate(data) {

        describe("EOM Multi Pick/Drop Load Create", function () {

            it("Should open EOM url", () => {
                enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("should enter 'GEEC' in Bill To Code field", async function () {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
            });

            it("should enter 'LGFO18' in Origin field", async function () {
                await enterpriseOrderManagementPage.setOrigin(data.origin);
            });

            it("Should click on Search Skelton button", async () => {
                await enterpriseOrderManagementPage.clickSearchSkeletons();
            });

            it("Verifying that skeltons list will be displayed", async () => {
                await expect(skeletonListingPage.verifySkeltonList(0)).toBeTruthy();
            });

            it("Should find an order that has HJBT JBVAN underneath Division, and TRAIN underneath Mode and click on skelton book load", async () => {
                await skeletonListingPage.clickOnBookLoadWithDivisionHjbtJbvanAndTrainMode();
            });

            it("Verifying that skeltons pick screen will be displayed", async () => {
                await expect<any>(skeletonListingPage.getSkeletonPickScreenTitle()).toBe(data.skeletonPickScreenTitle);
            });

            it("Should click on Next Button in skelton pick screen", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });

            it("Should click on IM", async () => {
                await skeletonListingPage.clickOnIM();
            });

            it("Verifying that New Load Deatils screen will be displayed", async () => {
                await expect<any>(loadDetailsPage.getStandardNewLoadScreenTitle()).toBe(data.standardNewLoadScreenTitle);
            });

            it("Click on the COMMENTS tab on the EOM load details screen ", async () => {
                await orderDetailsViewPage.commentsTabClick();
            });

            it("Click the dropdown tab underneath Type, click GENERAL.", async () => {
                await commentsPage.commentsTypeValueSelection(data.commentType);
            });

            it("In the COMMENT box type, 'THIS IS A TEST ORDER ONLY. DO NOT PROCESS!' ", async () => {
                await commentsPage.setComments(data.comment);
                await commentsPage.setComments(data.comment);
            });

            it("Click on the details tab", async () => {
                await orderDetailsViewPage.detailsTabClick();
            });

            it("Should click on dropdown tab next to Load DETAIL", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfLoadDetails();
            });

            it("Should select empty from Monitor Code dropdown", async () => {
                await loadDetailsPage.monitorsValueSelection(" ");
            });

            it("Should click on dropdown tab next to Bill To GEEC", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
            });

            it("Verifying no classifications are selected.", async () => {
                await loadDetailsPage.verifyClassificationValue(data.empty);
            });

            it("Should click on add stop button", async () => {
                await loadDetailsPage.clickOnAddStopButton();
            });

            it("Should click on add stop button", async () => {
                await loadDetailsPage.clickOnAddStopButton();
            });

            it("Should select Shipper from the drop down to stop2", async () => {
                await loadDetailsPage.setStop2DropDown(data.shipperDropDown)
            });

            it("Should enter the Shipper Code", async () => {
                await loadDetailsPage.enterShipperCode(data.shipperCode);
            });

            it("Should select RECEIVER from the drop down to stop3", async () => {
                await loadDetailsPage.setStop3DropDown(data.ReceiverDropDown)
            });

            it("Should enter the RECEIVER Code", async () => {
                await loadDetailsPage.enterStop3Code(data.ReceiverCode);
            });

            it("Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop1", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
            });

            it("Should enter the date 5 days after current date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop2", async () => {
                await loadDetailsPage.setStop2ScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
            });

            it("Should Click the dropdown tab underneath HAZMAT, click to select N.", async () => {
                await loadDetailsPage.setStop2HazmatDropdown(data.hazmatDropDownValue);
            });

            it("Should Click the dropdown tab underneath LOADED ON, click to select FLOOR", async () => {
                await loadDetailsPage.setStop2LoadedOnDropdown(data.loadedOnDropDownOption);
            });

            it("Click the dropdown tab underneath DRIVER COUNT, click to select N", async () => {
                await loadDetailsPage.setStop2DriverCountDropdown(data.driverCountDropDownOption);
            });

            it("Click the dropdown tab underneath LOAD/UNLOADED BY, click to select CUSTOMER", async () => {
                await loadDetailsPage.setStop2LoadAndUnloadedByDropdown(data.loadUnlodedByDropDownOption);
            });

            it("Should enter the date 5 days after the date on STOP 2 date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop3", async () => {
                await loadDetailsPage.setStop3ScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
            });

            it("Click the dropdown tab underneath DRIVER COUNT, click to select N", async () => {
                await loadDetailsPage.setStop3DriverCountDropdown(data.driverCountDropDownOption);
            });

            it("Click the dropdown tab underneath LOAD/UNLOADED BY, click to select CUSTOMER", async () => {
                await loadDetailsPage.setStop3LoadAndUnloadedByDropdown(data.loadUnlodedByDropDownOption);
            });

            it("Should enter the date 5 days after the date on STOP 3 date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop2", async () => {
                await loadDetailsPage.setLastStopScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
            });

            it("Should click on Create Load button", async () => {
                await orderDetailsViewPage.clickOnCreateLoadButton();
                await orderDetailsViewPage.clickOnOverRideSelectButton();
            });

            it("Should take note of the load number at the top of the page", async () => {
                data.orderNumber = await loadDetailsPage.focusLoadNumber();
                data.orderNumber = data.orderNumber.trim();
            });

            it("Should take note of the destination details at bottom of the page", async () => {
                data.originRamp = await loadDetailsPage.getOriginRamp();
                data.originRamp = data.originRamp.trim();
            });
        });
    }

    // Verifying Load is created -- Done
    async eomLoadSearch(searchData, loadData) {

        describe("Search for specific load in EOM", async () => {

            it("Should Launch Enterprise Order Management Application And Login", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("Verifying That Enterprise Order Management Page Is Displayed", async function () {
                expect<any>(await enterpriseOrderManagementPage.getPageTitle()).toBe(searchData.enterpriseOrderManagementTitle);
            });

            it("Should Ensure 'LOAD#' Is Selected And Enter Load Number In The Search Value Box", async () => {
                await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(searchData.searchOption, loadData.orderNumber);
            });

            it("Should Click The Search Loads Button", async function () {
                await enterpriseOrderManagementPage.clickSearchLoadsButton();
            });

            it("Should Click On Load Number Hyperlink", async () => {
                await enterpriseOrderManagementPage.clickLoadNumber(loadData.orderNumber);
            });

            it("Verifying Order Details Page Is Displayed", async function () {
                let precisionLableText = searchData.precisionLableText.replace("#", loadData.orderNumber)
                await expect<any>(orderDetailsViewPage.verifyDispatchedMessage()).toContain(precisionLableText);
            });

            it("Should Click On Load Detail Dropdown Tab", async () => {
                await orderDetailsViewPage.loadDetailsClick();
            });

            it("Verifying There Are No Monitor Codes", async () => {
                await expect(enterpriseOrderManagementPage.verifyMonitorCode()).toBe(searchData.monitorValue);
            });

            it("Should Click On Bill To Dropdown Tab", async () => {
                await orderDetailsViewPage.billToClick();
            });

            it("Verifying There Are No Classifications", async () => {
                await orderDetailsViewPage.verifyClassificationText();
            });

            it("Should Click On Bill To Dropdown Tab", async () => {
                await orderDetailsViewPage.billToClick();
            });

            it("Verify There Is STOP 1", async () => {
                expect(await orderDetailsViewPage.stopType_1.getText()).toEqual(searchData.stop1);
            });

            it("Verify There Is STOP 99", async () => {
                expect(await orderDetailsViewPage.stopType_99.getText()).toEqual(searchData.stop99);
            });

        });
    }

    // EOM Dispatch Verification -- Done
    async eomDispatchVerification(loadData, data) {

        describe("EOM Dispatch Verification", () => {

            it("Should open EOM url", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("Verifying that EOM page is displayed", async function () {
                await expect<any>(enterpriseOrderManagementPage.getPageTitle()).toBe(data.eomTitle);
            });

            it("Should Enter load number in the Search Value box", async function () {
                await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(loadData.orderNumber, data.searchValue);
            });

            it("Should Click the Search Loads button", async function () {
                await enterpriseOrderManagementPage.clickSearchLoadsButton();
            });

            it("Verifying Status is Dispatched", async function () {
                await expect<any>(enterpriseOrderManagementPage.verifyLoadStatus()).toContain(data.dispatchStatus);
            });

        })
    }

    // EOM Multi Pick Drop Load Create For Truck
    async eomMultiPickOrDropTruckModeLoadCreate(data) {
        describe("EOM Multi Pick/Drop Load Create", () => {
            let loadNumber: string;

            it("Should open Enterprise Order Management url", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("should enter 'GEEC' in Bill To Code field", async function () {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
            });

            it("should enter 'LGFO18' in Origin field", async function () {
                await enterpriseOrderManagementPage.setOrigin(data.origin);
            });

            it("Should click on Search Skelton button", async () => {
                await enterpriseOrderManagementPage.clickSearchSkeletons();
            });

            it("Verifying that skeltons list will be displayed", async () => {
                await expect(skeletonListingPage.verifySkeltonList(0)).toBeTruthy();
            });

            it("Should click on green 'BOOK ORDER' icon of chosen skeleton having Truck Mode", async () => {
                await skeletonListingPage.clickOnBookIconHavingTruckMode();
            });

            it("Should click on Next Button in skelton pick screen", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });

            it("Click 'CHOOSE REASON CODE' drop down box ", async () => {
                await skeletonListingPage.selectRateCode(data.rateCode);
            });

            it("Should click on book load without rate button", async () => {
                await skeletonListingPage.clickOnBookLoadWithoutRateButton();
            });

            it("Should Click 'TRUCK' under current date", async () => {
                await loadDetailsPage.clickOnTruck();
            });

            it("Should click on dropdown tab next to Load DETAIL", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfLoadDetails();
            });

            it("Should select empty from Monitor Code dropdown", async () => {
                await loadDetailsPage.monitorsValueSelection(" ");
            });

            it("Should click on dropdown tab next to Bill To GEEC", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
            });

            it("Verifying no classifications are selected", async () => {
                await loadDetailsPage.verifyClassificationValue(data.empty);
            });

            it("Should click on add stop button", async () => {
                await loadDetailsPage.clickOnAddStopButton();
            });

            it("Should click on add stop button", async () => {
                await loadDetailsPage.clickOnAddStopButton();
            });

            it("Should select Shipper from the drop down to stop2", async () => {
                await loadDetailsPage.setStop2DropDown(data.shipperDropDown)
            });

            it("Should enter the Shipper Code", async () => {
                await loadDetailsPage.enterShipperCode(data.shipperCode);
            });

            it("Should Click the dropdown tab underneath HAZMAT, click to select N.", async () => {
                await loadDetailsPage.setStop2HazmatDropdown(data.hazmatDropDownValue);
            });

            it("Should Click the dropdown tab underneath LOADED ON, click to select FLOOR", async () => {
                await loadDetailsPage.setStop2LoadedOnDropdown(data.loadedOnDropDownOption);
            });

            it("Should Click the dropdown tab underneath DRIVER COUNT, click to select N", async () => {
                await loadDetailsPage.setStop2DriverCountDropdown(data.driverCountDropDownOption);
            });

            it("Should Click the dropdown tab underneath LOAD/UNLOADED BY, click to select CUSTOMER", async () => {
                await loadDetailsPage.setStop2LoadAndUnloadedByDropdown(data.loadUnlodedByDropDownOption);
            });

            it("Should select RECEIVER from the drop down to stop3", async () => {
                await loadDetailsPage.setStop3DropDown(data.ReceiverDropDown)
            });

            it("Should enter the RECEIVER Code", async () => {
                await loadDetailsPage.enterStop3Code(data.ReceiverCode);
            });

            it("Should click the dropdown tab underneath LOAD/UNLOADED BY, click to select CUSTOMER", async () => {
                await loadDetailsPage.setStop3LoadAndUnloadedByDropdown(data.loadUnlodedByDropDownOption);
            });

            it("Should click the dropdown tab underneath DRIVER COUNT, click to select N", async () => {
                await loadDetailsPage.setStop3DriverCountDropdown(data.driverCountDropDownOption);
            });

            it("Should set shipper scheduled appointment time to 19:00-23:00", async () => {
                await orderDetailsViewPage.scheduledAppointmentTimeSet(data.scheduledAppointmentBeginTime, data.scheduledAppointmentEndTime);
            });

            it("Should check receiver scheduled appointment date fields are empty", async () => {
                await orderDetailsViewPage.receiverScheduledAppointmentEmptyCheck();
                await orderDetailsViewPage.receiverSuggestedAppointmentEmptyCheck();
                await orderDetailsViewPage.receiverCustomerRequestedEmptyCheck();
            });

            it("Click on the COMMENTS tab on the EOM load details screen ", async () => {
                await orderDetailsViewPage.commentsTabClick();
            });

            it("Click the dropdown tab underneath Type, click GENERAL.", async () => {
                await commentsPage.commentsTypeValueSelection(data.commentType);
            });

            it("In the COMMENT box type, 'THIS IS A TEST ORDER ONLY. DO NOT PROCESS!' ", async () => {
                await commentsPage.setComments(data.comment);
            });

            it("Click on the details tab", async () => {
                await orderDetailsViewPage.detailsTabClick();
            });

            it("Should click on Create Load button", async () => {
                await orderDetailsViewPage.clickOnCreateLoadButton();
                await orderDetailsViewPage.clickOnOverRideSelectButton();
            });

            it("Should take note of the load number at the top of the page", async () => {
                data.loadNumber = await loadDetailsPage.focusLoadNumber();
                console.log("loadNumber:", +loadNumber);
            });

        });
    }

    // ICS Create International Load -- Done
    async icsEominternationalLoadCreate(data) {

        describe("ICS (Brokerage) International Shipment- Load Createe", () => {
            let loadNumber: string;
            let originRamp: string;

            it("Should open EOM page", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("Should enter the Bill of Code Text ", async () => {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
            });

            it("Should enter the origin Text and destination text ", async () => {
                await enterpriseOrderManagementPage.setValuesCustomerGeographicalSearch(data.origin, data.destination);
            });

            it("Should click search skeleton button ", async () => {
                await enterpriseOrderManagementPage.clickSearchSkeletons();
            });

            it("Should Click the Book load order that contains division as HJBT JBVAN and TRAIN asw mode", async () => {
                await skeletonListingPage.clickOnBookLoadWithDivisionHjbtJbvanAndTrainMode();
            });

            it("should Click Next button", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });

            it("Should select option for reason code", async () => {
                await skeletonListingPage.selectOptionFromChooseReasonCode(data.reasonCode);
            });

            it("Should click on book load with rate button", async () => {
                await skeletonListingPage.clickOnBookLoadWithoutRateButton();
            });

            it("Should click on IM", async () => {
                await loadDetailsPage.clickOnICS();
            });

            it("Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop1", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.startTime, data.endTime);
            });

            it("Should check receiver scheduled appointment date fields are empty", async () => {
                await orderDetailsViewPage.receiverScheduledAppointmentEmptyCheck();
            });

            it("should Click Load details extension tab", async () => {
                await orderDetailsViewPage.loadDetailsClick();
            })

            it("Should change project code to DALT", async () => {
                await loadDetailsPage.changeProjectCode(data.projectCode);
            });

            it("Verifying NO monitor codes are selected", async () => {
                await expect<any>(orderDetailsViewPage.monitorValueCheck()).toBe("");
            });

            it("Should click on dropdown tab next to Bill To GEEC", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
            });

            it("Verifying no classifications are selected.", async () => {
                await loadDetailsPage.verifyClassificationValue(data.empty);
            });

            it("Should enter 'CCBDA' to solictor ", async () => {
                await loadDetailsPage.setSolictor(data.solictor);
            });

            it("Should enter Broker ", async () => {
                await loadDetailsPage.setBroker(data.broker);
            });

            it("Should Click On Create Load Button", async () => {
                await loadDetailsPage.clickOnCreateLoad();
            });

            it("Should Take Note Of The Load Number At The Top Of The Page", async () => {
                loadNumber = await loadDetailsPage.getLoadNumber();
                console.log("loadNumber:" + loadNumber);
                data.orderNumber = loadNumber.trim();
            });

        });
    }

    // Create International Load -- Done
    async eominternationalLoadCreate(data) {

        describe("EOM International Load Create", () => {

            it("Should open EOM page", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("Should enter the Bill of Code Text ", async () => {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
            });

            it("Should enter the origin Text and destination text ", async () => {
                await enterpriseOrderManagementPage.setValuesCustomerGeographicalSearch(data.origin, data.destination);
            });

            it("Should click search skeleton button ", async () => {
                await enterpriseOrderManagementPage.clickSearchSkeletons();
            });

            it("Should Click the Book load order that contains division as HJBT JBVAN and TRAIN as mode", async () => {
                await skeletonListingPage.clickOnBookLoadWithDivisionHjbtJbvanAndTrainMode();
            });

            it("should Click Next button", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });

            it("Should select option for reason code", async () => {
                await skeletonListingPage.selectOptionFromChooseReasonCode(data.reasonCode);
            });

            it("Should click on book load with rate button", async () => {
                await skeletonListingPage.clickOnBookLoadWithoutRateButton();
            });

            it("Should click on IM", async () => {
                await skeletonListingPage.clickOnIM();
            });

            it("Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop1", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.startTime, data.endTime);
            });

            it("Should check receiver scheduled appointment date fields are empty", async () => {
                await orderDetailsViewPage.receiverScheduledAppointmentEmptyCheck();
            });

            it("should Click Load details extension tab", async () => {
                await orderDetailsViewPage.loadDetailsClick();
            })

            it("Verifying NO monitor codes are selected", async () => {
                await expect<any>(orderDetailsViewPage.monitorValueCheck()).toBe("");
            })

            it("Should click on dropdown tab next to Bill To GEEC", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
            });

            it("Verifying no classifications are selected.", async () => {
                await loadDetailsPage.verifyClassificationValue(data.empty);
            });

            it("Should enter 'CCBDA' to solictor ", async () => {
                await loadDetailsPage.setSolictor(data.solictor);
            });

            it("Should enter 'TRLAA8' to broker ", async () => {
                await loadDetailsPage.setBroker(data.broker);
            });

            it("Should click on create load button ", async () => {
                await orderDetailsViewPage.clickOnCreateLoadButton();
                await orderDetailsViewPage.clickOnOverrideButton();
            });

            it("Should take note of the load number at the top of the page", async () => {
                data.orderNumber = await loadDetailsPage.focusLoadNumber();
            });

            it("Should take note of the destination details at bottom of the page", async () => {
                data.originRamp = await loadDetailsPage.getOriginRamp();
            });

        });

    }

    // Create High Value Load -- Done
    async eoMHighValueLoadCreate(data) {

        describe("EOM High Value Load Create", () => {

            it("Should Launch EOM Search Page Application And Login If Required ", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl)
            })

            it("Verifying That Enterprise Order Management Page Is Displayed", async function () {
                await expect<any>(browser.getTitle()).toBe(data.enterpriseOrderManagementTitle);
            });

            it("Should Enter Bill To Code Text GEEC", async () => {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
            })

            it("Should Enter Origin Text LGFO18", async () => {
                await enterpriseOrderManagementPage.setOrigin(data.origin);
            })

            it("Should Click On Search Skeleton Button", async () => {
                await enterpriseOrderManagementPage.clickSearchSkeletons();
            })

            it("Verifying That Skeltons List Will Be Displayed", async () => {
                await expect(skeletonListingPage.verifySkeltonList(data.zero)).toBeTruthy();
            });

            it("Should Click On Book Load Order That Contains Division As HJBT JBVAN And TRAIN As Mode", async () => {
                await skeletonListingPage.clickOnBookLoadWithDivisionHjbtJbvanAndTrainMode();
            })

            it("Verifying That Skeltons Pick Screen Will Be Displayed", async () => {
                await expect<any>(skeletonListingPage.getSkeletonPickScreenTitle()).toBe(data.skeletonPickScreenTitle);
            });

            it("Should Click On Next Button", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            })

            it("Should Click On IM", async () => {
                await skeletonListingPage.clickOnIM();
            })

            it("Verifying that New Load Deatils screen will be displayed", async () => {
                await expect<any>(loadDetailsPage.getStandardNewLoadScreenTitle()).toBe(data.standardNewLoadScreenTitle);
            });

            it("Should Click On Load Details Extension Tab", async () => {
                await orderDetailsViewPage.loadDetailsClick();
            })

            it("Should Select H In Monitor Dropdown", async () => {
                await orderDetailsViewPage.monitorsValueSelection(data.monitorValue)
            })

            it("Should Click On Bill To GEEC Extension Tab", async () => {
                await orderDetailsViewPage.billToClick();
            })
            it("Should Click On Classification Lens Icon", async () => {
                await orderDetailsViewPage.clickOnClassificationLensIcon();
            })

            it("Should Click On High Value", async () => {
                await orderDetailsViewPage.clickOnHighValueCheckbox();
            })

            it("Should Click On Close window Button", async () => {
                await orderDetailsViewPage.clickOncloseWindowButton();
            })

            it("Should Enter Today Date And Begin Time As 19:00 And End Time As 23:00 In Scheduled Appointment Time", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
            });

            it("Should Clear Date And Time In Scheduled Appointment Time For Stop 99", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTimeInStop99(data.stop99Date, data.stop99BeginTime, data.stop99EndTime);
            });

            it("Should Click On COMMENTS Tab", async () => {
                await orderDetailsViewPage.commentsTabClick()

            });

            it("Should Click On The Dropdown Tab Underneath Type, Click GENERAL.", async () => {
                await commentsPage.commentsTypeValueSelection(data.commentType);
            });

            it("Should Add 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!' In The Comment Section", async () => {
                await commentsPage.setComments(data.comment);
                await commentsPage.setComments(data.comment);
            });

            it("Click On The 'Details' Tab", async () => {
                await orderDetailsViewPage.detailsTabClick();
            });

            it("Verifying The Comments Tab Is Now COMMENTS (1)", async () => {
                await expect<any>(orderDetailsViewPage.commentsTab.getText()).toBe(data.commentsText);
            });

            it("Should click on Create Load button", async () => {
                await orderDetailsViewPage.clickOnCreateLoadButton();
                await orderDetailsViewPage.clickOnOverRideSelectButton();
            });

            it("Should Click On Continue Button", async () => {
                await orderDetailsViewPage.clickContinueButton();
            })

            it("Should take note of the load number at the top of the page", async () => {
                data.orderNumber = await loadDetailsPage.focusLoadNumber();
                data.orderNumber = data.orderNumber.trim();
            });

            it("Should take note of the destination details at bottom of the page", async () => {
                data.originRamp = await loadDetailsPage.getOriginRamp();
                data.originRamp = data.originRamp.trim();
            });
        })
    }

    // Create ICS Brokerage High Value Load -- Done
    async eomIcsBrokerageHighValueLoadCreate(data) {

        describe("High Value ICS Brokerage Load Create", function () {
            let loadNumber: string;

            it("Should open EOM url", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("should enter KNDA3 in Bill To Code field", async function () {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
            });

            it("should enter Origin and destination fields", async function () {
                await enterpriseOrderManagementPage.setValuesCustomerGeographicalSearch(data.origin, data.destination);
            });

            it("Should click on Search Skelton button", async () => {
                await enterpriseOrderManagementPage.clickSearchSkeletons();
            });

            it("Verifying that skeltons list will be displayed", async () => {
                await expect(skeletonListingPage.verifySkeltonList(data.zero)).toBeTruthy();
            });

            it("Should find an order that has HJBT JBVAN underneath Division, and TRAIN underneath Mode and click on skelton book load", async () => {
                await skeletonListingPage.clickOnBookLoadWithDivisionHjbtJbvanAndTrainMode();
            });

            it("Verifying that skeltons pick screen will be displayed", async () => {
                await expect<any>(skeletonListingPage.getSkeletonPickScreenTitle()).toBe(data.skeletonPickScreenTitle);
            });

            it("Should click on Next Button in skelton pick screen", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });

            it("Should click on ICS", async () => {
                await loadDetailsPage.clickOnIcsUnderCurrentDate();
            });

            it("Verifying that New Load Deatils screen will be displayed", async () => {
                await expect<any>(loadDetailsPage.getStandardNewLoadScreenTitle()).toBe(data.standardNewLoadScreenTitle);
            });

            it("Should click on dropdown tab next to Load DETAIL", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfLoadDetails();
            });

            it("Should change project code to DALT", async () => {
                await loadDetailsPage.changeProjectCode(data.projectCode);
            });

            it("Should Select H In Monitor Dropdown", async () => {
                await loadDetailsPage.monitorsValueSelection(data.monitorValue);
            });

            it("Should click on dropdown tab next to Bill To KNDA3", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
            });

            it("Should click on the magnifying glass next to Classifications to Bill To GEEC", async () => {
                await loadDetailsPage.clickOnMagnifyingGlass();
            });

            it("Should click on the HIGHVALUE checkbox to select", async () => {
                await loadDetailsPage.clickOnOrderClassificationCheckBox(data.classificationsValue);
            });

            it("Should click on Close button", async () => {
                await loadDetailsPage.clickOnCloseButton();
            });

            it("Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop1", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
            });

            it("Should clear date and time in Scheduled Appointment Time for Stop 99", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTimeInStop99(data.stop99Date, data.stop99BeginTime, data.stop99EndTime);
            });

            it("Click on the COMMENTS tab", async () => {
                await orderDetailsViewPage.commentsTabClick();
            });

            it("Click the dropdown tab underneath Type, click 'GENERAL'", async () => {
                await commentsPage.commentsTypeValueSelection(data.commentType);
            });

            it("In the COMMENT box type, 'THIS IS A TEST ORDER ONLY. DO NOT PROCESS!' and Click on 'SAVE COMMENTS' IF SAVE COMMENTS BUTTON IS AVAILABLE,", async () => {
                await commentsPage.setComments(data.comment);
                await commentsPage.clickonSaveCommentsIfSaveButtonExists();

            });

            it("Should Click the Details Tab", async () => {
                await loadDetailsPage.detailsTabClick();
            });

            it("Should click on Create Load button", async () => {
                await orderDetailsViewPage.clickOnCreateLoadButton();
                await orderDetailsViewPage.clickOnOverRideSelectButton();
            });

            it("Should take note of the load number at the top of the page", async () => {
                loadNumber = await loadDetailsPage.getLoadNumber();
                data.orderNumber = loadNumber.trim();
            });

        });

    }

    async eomJBTHazmatLoadCreate(data) {

        describe("EOM JBT Hazmat Load Create", function () {
            let loadNumber: string;
            
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
                await expect(skeletonListingPage.verifySkeltonList(data.zero)).toBeTruthy();
            });

            it("Should Click green 'BOOK ORDER' icon of chosen skeleton", async () => {
                await skeletonListingPage.clickOnSkeltonBookLoad();
            });

            it("Verifying that skeltons pick screen will be displayed", async () => {
                await expect<any>(skeletonListingPage.getSkeletonPickScreenTitle()).toBe(data.skeletonPickScreenTitle);
            });

            it("Should click on Next Button in skelton pick screen", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });

            it("Should select option for reason code", async () => {
                await skeletonListingPage.selectOptionFromChooseReasonCode(data.reasonCode);
            });

            it("Should click on book load with rate button", async () => {
                await skeletonListingPage.clickOnBookLoadWithoutRateButton();
            });

            it('Should click on Truck Under Current Date', async () => {
                await loadDetailsPage.clickOnTruck();
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
                data.orderNumber = loadNumber.trim();
            });

        });
    }

    async eominternationalLoadCreateVerification(loadData, data) {

        describe("EOM International Load Create Verification", () => {

            it("Should open EOM page", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("Should Click the drop down box under 'Search Option' and ensure ''LOAD#'' is selected.", async () => {
                await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.load, loadData.orderNumber);
            });

            it("Should click on search load button", async () => {
                await enterpriseOrderManagementPage.clickSearchLoadsButton();
            });

            it("Should click on load number", async () => {
                await enterpriseOrderManagementPage.clickLoadNumber(loadData.orderNumber.trim());
            });

            it("Verifying broker is there", async () => {
                await expect<any>(loadDetailsPage.verifyBroker()).not.toBe(null);
            });

            it("Verifying solictor is there", async () => {
                await expect<any>(loadDetailsPage.verifySolictor()).not.toBe(null);
            });

        });

    }

    //TC 191337: EOM DCS High Value Load Create -- Done
    async eomDcsHighValueLoadCreate(data) {
        describe("EOM DCS High Value Load Create", () => {

            it("Should Launch EOM Search Page Application And Login If Required", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl)
            });

            it("Verifying That Enterprise Order Management Page Is Displayed", async function () {
                await expect<any>(browser.getTitle()).toBe(data.enterpriseOrderManagementTitle);
            });

            it("Should Enter Bill To Code", async () => {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode)
            });

            it("Should Enter Origin Code", async () => {
                await enterpriseOrderManagementPage.setOrigin(data.originCode)
            });

            it("Should Check The Box Next To HJBT JBDCS, Make Sure The Boxes Next To HJBT JBHA And HJBT JBVAN Are UNCHECKED", async () => {
                await enterpriseOrderManagementPage.checkHjbtJbdcsCheckBox();
                await enterpriseOrderManagementPage.unCheckHjbtJbhaAndHjbtJbvanCheckBoxes();
            });

            it("Should Click On Search Skeletons Button", async () => {
                await enterpriseOrderManagementPage.clickOnEOMButton(data.searchSkeletonButtonId)
            });

            it("Verifying That Skeltons List Will Be Displayed", async () => {
                await expect(skeletonListingPage.verifySkeltonList(data.zero)).toBeTruthy();
            });

            it("Should Click On Book Load Icon Having Mode As Truck", async () => {
                await skeletonListingPage.clickOnBookIconHavingTruckMode();
            });

            it("Verifying That Skeltons Pick Screen Will Be Displayed", async () => {
                await expect<any>(skeletonListingPage.getSkeletonPickScreenTitle()).toBe(data.skeletonPickScreenTitle);
            });

            it("Should Click On Next In Select Pick Up Date Screen", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });

            it("Should Click On Choose Reason Code Dropdwon And Chose Any Reason Code", async () => {
                await skeletonListingPage.selectOptionFromChooseReasonCode(data.reasonCode);
            });

            it("Should Click On Book Load Without Rate", async () => {
                await skeletonListingPage.clickOnBookLoadWithoutRateButton();
            });

            it("Verifying That New Load Deatils Screen Will Be Displayed", async () => {
                await expect<any>(loadDetailsPage.getStandardNewLoadScreenTitle()).toBe(data.standardNewLoadScreenTitle);
            });

            it("Should Click On Drop Down Tab Next To Load DETAIL", async () => {
                await orderDetailsViewPage.loadDetailsClick();
            })

            it("Should Select H In Monitor Dropdown", async () => {
                await orderDetailsViewPage.monitorsValueSelection(data.monitorValue)
            })

            it("Should Click On Drop Down Tab Next To Bill To", async () => {
                await orderDetailsViewPage.billToClick();
            })

            it("Should Click On Classification Lens Icon", async () => {
                await orderDetailsViewPage.clickOnClassificationLensIcon();
            })

            it("Should Click On High Value", async () => {
                await orderDetailsViewPage.clickOnHighValueCheckbox();
            })

            it("Should Click On Close window Button", async () => {
                await orderDetailsViewPage.clickOncloseWindowButton();
            })

            it("Should Enter Today Date And Begin Time As 19:00 And End Time As 23:00 In Scheduled Appointment Time For Stop 1", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.BeginTime, data.EndTime);
            });

            it("Should Enter Today Date And Begin Time As 19:00 And End Time As 23:00 In Scheduled Appointment Time For Stop 99", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTimeForStop99(data.BeginTime, data.EndTime);
            });

            it("Should Click On COMMENTS Tab", async () => {
                await orderDetailsViewPage.commentsTabClick()

            });

            it("Should Click On The Dropdown Tab Underneath Type, Click GENERAL.", async () => {
                await commentsPage.commentsTypeValueSelection(data.commentType);
            });

            it("Should Add 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!' In The Comment Section", async () => {
                await commentsPage.setComments(data.comment);
                await commentsPage.setComments(data.comment);
            });

            it("Click On The 'Details' Tab", async () => {
                await orderDetailsViewPage.detailsTabClick();
            });

            it("Verifying The Comments Tab Is Now COMMENTS (1)", async () => {
                await expect<any>(orderDetailsViewPage.commentsTab.getText()).toBe(data.commentsText);
            });

            it("Should Click On Create Load Button", async () => {
                await orderDetailsViewPage.clickOnCreateLoadButton();
                await orderDetailsViewPage.clickOnOverRideSelectButton();
            });

            it("Should Take Note Of The Load Number At The Top Of The Page", async () => {
                data.loadNumber = await loadDetailsPage.focusLoadNumber();
                data.loadNumber = data.loadNumber.trim();
            });

        });
    }

    //Tc_188105 Food Safety Create Load ICS Brokerage
    async foodSafetyCreateLoadICSBrokerage(data) {

        describe("Food Safety Create Load ICS Brokerage ", function () {

            let orderNumber: string;

            it("Should open EOM url", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("Should enter the Bill of Code Text ", async () => {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
            });

            it("Should enter the origin Text and destination text ", async () => {
                await enterpriseOrderManagementPage.setValuesCustomerGeographicalSearch(data.origin, data.destination);
            });

            it("Should Click On Search Skeletons Button", async () => {
                await enterpriseOrderManagementPage.clickSearchSkeletons();
            });

            it("Should Click the green mouse icon underneath the Actions column and Look for a skeleton that has TRAIN underneath the Mode column", async () => {
                await skeletonListingPage.clickOnBookLoadIconHavingTrainMode();
            });

            it("Should Click Next button", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });

            it("Should select option for reason code", async () => {
                await skeletonListingPage.selectOptionFromChooseReasonCode(data.reasonCode);
            });

            it("Should Click ICS ", async () => {
                await skeletonListingPage.clickOnIcsUnderCurrentDate(data.mode);
            });

            it("Should Click Load details extension tab", async () => {
                await orderDetailsViewPage.loadDetailsClick();
            });

            it("Should select F in monitor dropdown ", async () => {
                await orderDetailsViewPage.monitorsValueSelection(data.monitorValue);
            });

            it("Should change project code to DALT", async () => {
                await loadDetailsPage.changeProjectCode(data.projectCode);
            });

            it("Should check receiver scheduled appointment date fields are empty", async () => {
                await orderDetailsViewPage.receiverScheduledAppointmentEmptyCheck();
            });

            it("Should set Start time and End Time for Stop 1 ", async () => {
                await orderDetailsViewPage.scheduledAppointmentTimeSet(data.startTime, data.endTime);
            });

            it("Should clear appoinment date Time for Stop 99 ", async () => {
                await orderDetailsViewPage.clearScheduleAppointmentDateTimeForStop99();
            });

            it("Should click on dropdown tab next to Bill To GEEC", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
            });

            it("Verifying no classifications are selected.", async () => {
                await loadDetailsPage.verifyClassificationValue(data.empty);
            });

            it('Should Click On COMMENTS Tab', async () => {
                await orderDetailsViewPage.commentsTabClick()
            });

            it('Should Click On The Dropdown Tab Underneath Type, Click GENERAL.', async () => {
                await commentsPage.commentsTypeValueSelection(data.commentType);
            });

            it('Should Add THIS IS A TEST ORDER DO NOT PROCESS In The Comment Section', async () => {
                await commentsPage.setComments(data.comment);
                await commentsPage.setComments(data.comment);
            });

            it('Should click On The Details Tab', async () => {
                await orderDetailsViewPage.detailsTabClick();
            });

            it('Verifying that the Comments Tab Is Now COMMENTS (1)', async () => {
                await expect<any>(orderDetailsViewPage.commentsTab.getText()).toBe(data.commentsText);
            });

            it("Should click on create load button ", async () => {
                await orderDetailsViewPage.clickOnCreateLoadButton();
                await orderDetailsViewPage.clickContinueButton();
            });

            it("Should note the Load Number ", async () => {
                orderNumber = await loadDetailsPage.getLoadNumber();
                data.orderNumber = orderNumber.trim();
                console.log("Order Number", data.orderNumber);
            });

        });
    }

    // TC 190118 - 1 Pick/1Drop EOM Order Create ICS Flatbed
    async onePickOneDropEomOrderCreateIcsFlatbed(data) {

        describe("1 Pick/1Drop EOM Order Create ICS Flatbed", function () {

            it("Should open EOM url", () => {
                enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("should enter KNDA3 in Bill To Code field", async function () {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
            });

            it("should enter FIVA2 in Origin field", async function () {
                await enterpriseOrderManagementPage.setOrigin(data.origin);
            });

            it("should enter LOWIAE in Destination field", async function () {
                await enterpriseOrderManagementPage.setValueToDestination(data.destination)
            });

            it("Should click on Search Skeleton button", async () => {
                await enterpriseOrderManagementPage.clickSearchSkeletons();
            });

            it("Verifying that skeletons list will be displayed", async () => {
                await expect(skeletonListingPage.verifySkeltonList(data.zero)).toBeTruthy();
            });

            it("Should find an order that has TRAIN underneath Mode and click on skeleton book load", async () => {
                await skeletonListingPage.clickOnBookLoadIconHavingTrainMode();
            });

            it("Verifying that skeletons pick screen will be displayed", async () => {
                await expect(skeletonListingPage.getSkeletonPickScreenTitle()).toBe(data.skeletonPickScreenTitle);
            });

            it("Should click on Next Button in skeleton pick screen", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });

            it('Should select option for reason code', async () => {
                await skeletonListingPage.selectOptionFromChooseReasonCode(data.reasonCode);
            });

            it('Should click on book load with rate button', async () => {
                await skeletonListingPage.clickOnBookLoadWithoutRateButton();
            });

            it("Should click on ICS Under Current Date", async () => {
                await loadDetailsPage.clickOnICS();
            });

            it("Verifying that New Load Deatils screen will be displayed", async () => {
                await expect(loadDetailsPage.getStandardNewLoadScreenTitle()).toBe(data.standardNewLoadScreenTitle);
            });

            it("Should click on dropdown tab next to Load DETAIL", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfLoadDetails();
            });

            it("Should change project code to DALT", async () => {
                await loadDetailsPage.changeProjectCode(data.projectCode);
            });

            it("Should change Equipment Type to FaltBed", async () => {
                await loadDetailsPage.changeEquipmentTypeToFlatBed(data.optionValue)
            });

            it('Should not contain any data in Monitor Dropdown', async () => {
                await orderDetailsViewPage.monitorsValueSelection(data.monitorValue)
            });

            it('Should Click on Bill To Dropdown Tab', async () => {
                await orderDetailsViewPage.billToClick();
            });

            it('Should Verify text in Classification tab', async () => {
                await orderDetailsViewPage.verifyClassificationText();
            });
            it("Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
            });

            it("Should clear date and time in Scheduled Appointment Time for Stop 99", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTimeInStop99(data.stop99Date, data.stop99BeginTime, data.stop99EndTime);
            });

            it('Should Click On COMMENTS Tab', async () => {
                await orderDetailsViewPage.commentsTabClick()
            });

            it('Should Click On The Dropdown Tab Underneath Type, Click GENERAL.', async () => {
                await commentsPage.commentsTypeValueSelection(data.commentType);
            });

            it('Should Add THIS IS A TEST ORDER DO NOT PROCESS In The Comment Section', async () => {
                await commentsPage.setComments(data.comment);
                await commentsPage.setComments(data.comment);
            });

            it('Should click On The Details Tab', async () => {
                await orderDetailsViewPage.detailsTabClick();
            });

            it('Verifying that the Comments Tab Is Now COMMENTS (1)', async () => {
                await expect<any>(orderDetailsViewPage.commentsTab.getText()).toBe(data.commentsText);
            });


            it("Should click on Create Load button", async () => {
                await loadDetailsPage.clickOnCreateLoad();
            });

            it("Should take note of the load number at the top of the page", async () => {
                data.orderNumber = await loadDetailsPage.getLoadNumber();
                console.log("loadNumber:" + data.orderNumber);
            });

        });
    }

    async eominternationalLoadCreateICSFlatbed(data) {

        describe("EOM International Order Create ICS Flatbed", () => {
            let loadNumber: string;
            it("Should open EOM page", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("Should enter the Bill of Code Text ", async () => {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
            });

            it("Should enter the origin Text and destination text ", async () => {
                await enterpriseOrderManagementPage.setValuesCustomerGeographicalSearch(data.origin, data.destination);
            });

            it("Should click search skeleton button ", async () => {
                await enterpriseOrderManagementPage.clickSearchSkeletons();
            });

            it("Should Click the Book load order that contains division as HJBT JBVAN and TRAIN asw mode", async () => {
                await skeletonListingPage.clickOnBookLoadWithDivisionHjbtJbvanAndTrainMode();
            });

            it("should click Next button", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });

            it("Should select option for reason code", async () => {
                await skeletonListingPage.selectOptionFromChooseReasonCode(data.reasonCode);
            });

            it("Should click on book load with rate button", async () => {
                await skeletonListingPage.clickOnBookLoadWithoutRateButton();
            });

            it("Should click on ICS", async () => {
                await loadDetailsPage.clickOnICS();
            });

            it("Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop1", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.startTime, data.endTime);
            });

            it("Should check receiver scheduled appointment date fields are empty", async () => {
                await orderDetailsViewPage.receiverScheduledAppointmentEmptyCheck();
            });

            it("should click Load details extension tab", async () => {
                await orderDetailsViewPage.loadDetailsClick();
            });

            it("Should change project code to DALT", async () => {
                await loadDetailsPage.changeProjectCode(data.projectCode);
            });

            it("Should change the Equipment type to Flatbed", async () => {
                await loadDetailsPage.changeEquipmentTypeToFlatBed(data.equipmentType);
            });

            it("Verifying NO monitor codes are selected", async () => {
                await expect<any>(orderDetailsViewPage.monitorValueCheck()).toBe("");
            })

            it("Should click on dropdown tab next to Bill To GEEC", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
            });

            it("Verifying no classifications are selected.", async () => {
                await loadDetailsPage.verifyClassificationValue(data.empty);
            });

            it("Should enter 'CCBDA' to solictor ", async () => {
                await loadDetailsPage.setSolictor(data.solictor);
            });

            it("Should enter 'TRLAA8 ' to broker ", async () => {
                await loadDetailsPage.setBroker(data.broker);
            });

            it("Should click on COMMENTS tab", async () => {
                await orderDetailsViewPage.commentsTabClick();
            });

            it("Should Click On The Dropdown Tab Underneath Type, Click GENERAL.", async () => {
                await commentsPage.commentsTypeValueSelection(data.commentType);
            });

            it("Should Add 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!' In The Comment Section", async () => {
                await commentsPage.setComments(data.comment);
                await commentsPage.setComments(data.comment);
            });

            it("Should Click On The 'Details' Tab", async () => {
                await orderDetailsViewPage.detailsTabClick();
            });

            it("Verifying The Comments Tab Is Now COMMENTS (1)", async () => {
                await expect<any>(orderDetailsViewPage.commentsTab.getText()).toBe(data.commentsText);
            });

            it("Should Click On Create Load Button", async () => {
                await loadDetailsPage.clickOnCreateLoad();
            });

            it("Should Take Note Of The Load Number At The Top Of The Page", async () => {
                loadNumber = await loadDetailsPage.getLoadNumber();
                console.log("loadNumber:" + loadNumber);
                loadNumber = loadNumber.trim();
            });
        });
    }

    //TC 192191: EOM ICS Maritime Flat bed/Flat Rack Load Create
    async eomIcsMaritimeFlateBedRackLoadCreate(data) {

        describe("EOM ICS Maritime Flat bed/Flat Rack Load Create", function () {
            let loadNumber: string;

            it("Should open EOM url", async function () {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("Should enter KNJE1 in Bill To Code field", async function () {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
            });

            it("Should enter PIMC9 in Origin field", async function () {
                await enterpriseOrderManagementPage.setOrigin(data.origin);
            });

            it("Should enter BTBA46 in Destination Code", async () => {
                await enterpriseOrderManagementPage.setValueToDestination(data.destinationCode)
            });
            it("Should click on Search Skelton button", async () => {
                await enterpriseOrderManagementPage.clickSearchSkeletons();
            });

            it("Verifying that skeltons list will be displayed", async () => {
                await expect(skeletonListingPage.verifySkeltonList(data.zero)).toBeTruthy();
            });

            it("Should Click green 'BOOK ORDER' icon of chosen skeleton", async () => {
                await skeletonListingPage.bookOrderIconClick();
            });

            it("Verifying that skeltons pick screen will be displayed", async () => {
                await expect<any>(skeletonListingPage.getSkeletonPickScreenTitle()).toBe(data.skeletonPickScreenTitle);
            });

            it("Should click on Next Button in skelton pick screen", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });

            it('Should click on ICS Under Current Date', async () => {
                await skeletonListingPage.clickOnIcsUnderCurrentDate(data.mode);
            });

            it("Should click on dropdown tab next to Load DETAIL", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfLoadDetails();
            });

            it("Should change project code to DALT", async () => {
                await loadDetailsPage.changeProjectCode(data.projectCode);
            });

            it("Should select Flatbed under equipment details", async () => {
                await loadDetailsPage.setEquipmentDropdown(data.equipmentDetails);
            });

            it("Verifying NO monitor codes are selected", async () => {
                await expect<any>(orderDetailsViewPage.monitorValueCheck()).toBe("");
            });

            it("Should click on dropdown tab next to Bill To GEEC", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
            });

            it("Should select 'N' option from dropdown under Hazmat ", async () => {
                await loadDetailsPage.selectOptionFromHazmatDropDown(data.hazmatDropDownValue);
            });

            it("Verifying no classifications are selected.", async () => {
                await loadDetailsPage.verifyClassificationValue(data.empty);
            });

            it("Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
            });

            it("Should clear date and time in Scheduled Appointment Time for Stop 99", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTimeInStop99(data.stop99Date, data.stop99BeginTime, data.stop99EndTime);
            });

            it("Should Click On COMMENTS Tab", async () => {
                await orderDetailsViewPage.commentsTabClick()
            });

            it("Click the dropdown tab underneath Type, click GENERAL.", async () => {
                await commentsPage.commentsTypeValueSelection(data.commentType);
            });

            it("Should Add 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!' In The Comment Section", async () => {
                await commentsPage.setComments(data.comment);
                await commentsPage.setComments(data.comment);
            });

            it("Click On The 'Details' Tab", async () => {
                await orderDetailsViewPage.detailsTabClick();
            });

            it("Verifying The Comments Tab Is Now COMMENTS (1)", async () => {
                await expect<any>(orderDetailsViewPage.commentsTab.getText()).toBe(data.commentsText);
            });

            it("Should click on Create Load button", async () => {
                await loadDetailsPage.clickOnCreateLoad();
            });

            it("Should take note of the load number at the top of the page", async () => {
                loadNumber = await loadDetailsPage.getLoadNumber();
                console.log("loadNumber", loadNumber)
            });

        });
    }

    //TC 192165: EOM ICS Maritime High Value Load Create 
    async eomIcsMaritimeHighValueLoadCreate(data) {

        describe("EOM ICS Maritime High Value Load Create", function () {
            let loadNumber: string;

            it("Should open EOM url", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("should enter KNJE1 in Bill To Code field", async function () {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
            });

            it("should enter Origin and destination fields", async function () {
                await enterpriseOrderManagementPage.setValuesCustomerGeographicalSearch(data.origin, data.destination);
            });

            it("Should click on Search Skelton button", async () => {
                await enterpriseOrderManagementPage.clickSearchSkeletons();
            });

            it("Verifying that skeltons list will be displayed", async () => {
                await expect(skeletonListingPage.verifySkeltonList(data.zero)).toBeTruthy();
            });

            it("Should find an order that has HJBT JBVAN underneath Division, and TRAIN underneath Mode and click on skelton book load", async () => {
                await skeletonListingPage.clickOnBookLoadWithDivisionHJBTJBHAandTruckMode();
            });

            it("Verifying that skeltons pick screen will be displayed", async () => {
                await expect<any>(skeletonListingPage.getSkeletonPickScreenTitle()).toBe(data.skeletonPickScreenTitle);
            });

            it("Should click on Next Button in skelton pick screen", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });

            it("Should click on ICS", async () => {
                await loadDetailsPage.clickOnIcsUnderCurrentDate();
            });

            it("Verifying that New Load Deatils screen will be displayed", async () => {
                await expect<any>(loadDetailsPage.getNewLoadScreenTitle()).toBe(data.newLoadScreenTitle);
            });

            it("Should click on dropdown tab next to Load DETAIL", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfLoadDetails();
            });

            it("Should change project code to DALT", async () => {
                await loadDetailsPage.changeProjectCode(data.projectCode);
            });

            it("Should Select H In Monitor Dropdown", async () => {
                await loadDetailsPage.monitorsValueSelection(data.monitorValue);
            });

            it("Should click on dropdown tab next to Bill To KNJE1", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
            });

            it("Should click on the magnifying glass next to Classifications to Bill To GEEC", async () => {
                await loadDetailsPage.clickOnMagnifyingGlass();
            });

            it("Should click on the HIGHVALUE checkbox to select", async () => {
                await loadDetailsPage.clickOnOrderClassificationCheckBox(data.classificationsValue);
            });

            it("Should click on Close button", async () => {
                await loadDetailsPage.clickOnCloseButton();
            });

            it("Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop1", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
            });

            it("Should clear date and time in Scheduled Appointment Time for Stop 99", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTimeInStop99(data.stop99Date, data.stop99BeginTime, data.stop99EndTime);
            });
            it('Should Click On COMMENTS Tab', async () => {
                await orderDetailsViewPage.commentsTabClick()
            });

            it('Should Click On The Dropdown Tab Underneath Type, Click GENERAL.', async () => {
                await commentsPage.commentsTypeValueSelection(data.commentType);
            });

            it('Should Add THIS IS A TEST ORDER DO NOT PROCESS In The Comment Section', async () => {
                await commentsPage.setComments(data.comment);
            });

            it('Should click On The Details Tab', async () => {
                await orderDetailsViewPage.detailsTabClick();
            });

            it('Verifying that the Comments Tab Is Now COMMENTS (1)', async () => {
                await expect<any>(orderDetailsViewPage.commentsTab.getText()).toBe(data.commentsText);
            });

            it("Should click on Create Load button", async () => {
                await orderDetailsViewPage.clickOnCreateLoadButton();
            });

            it("Should take note of the load number at the top of the page", async () => {
                loadNumber = await loadDetailsPage.getLoadNumber();
                data.orderNumber = loadNumber.trim();
            });

        });

    }

    //191304 EOM DCS Food Safety Load Create
    async eomDcsFoodSafetyLoadCreate(data) {

        describe("EOM DCS Food Safety Load Create ", function () {

            let loadNumber:  string;

            it("Should open EOM url", () => {
                enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("should enter SIGR94  in Bill To Code field", async function () {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
            });

            it("should enter 'ONTCA' in Origin field", async function () {
                await enterpriseOrderManagementPage.setOrigin(data.originCode);
            });

            it("Should Check The Box Next To HJBT JBDCS, Make Sure The Boxes Next To HJBT JBHA And HJBT JBVAN Are UNCHECKED", async () => {
                await enterpriseOrderManagementPage.checkHjbtJbdcsCheckBox();
                await enterpriseOrderManagementPage.unCheckHjbtJbhaAndHjbtJbvanCheckBoxes();
            });

            it("Should click on Search Skelton button", async () => {
                await enterpriseOrderManagementPage.clickSearchSkeletons();
            });

            it("Verifying that skeltons list will be displayed", async () => {
                await expect(skeletonListingPage.verifySkeltonList(data.zero)).toBeTruthy();
            });

            it("Should Click the green mouse icon underneath the Actions column and Look for a skeleton that has TRAIN underneath the Mode column", async () => {
                await skeletonListingPage.clickOnBookIconHavingTruckMode();
            });

            it("Should Click Next button", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });

            it("Should select option for reason code", async () => {
                await skeletonListingPage.selectOptionFromChooseReasonCode(data.reasonCode);
            });

            it('Should click on book load with rate button', async () => {
                await skeletonListingPage.clickOnBookLoadWithoutRateButton();
            });

            it("Verifying That New Load Deatils Screen Will Be Displayed", async () => {
                await expect<any>(loadDetailsPage.getStandardNewLoadScreenTitle()).toBe(data.standardNewLoadScreenTitle);
            });

            it("Should Click Load details extension tab", async () => {
                await orderDetailsViewPage.loadDetailsClick();
            });

            it("Should select F in monitor dropdown ", async () => {
                await orderDetailsViewPage.monitorsValueSelection(data.monitorValue);
            });

            it("Should click on dropdown tab next to Bill To GEEC", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
            });

            it("Verifying no classifications are selected.", async () => {
                await loadDetailsPage.verifyClassificationValue(data.empty);
            });

            it("Should Enter Today Date And Begin Time As 19:00 And End Time As 23:00 In Scheduled Appointment Time For Stop 1", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.BeginTime, data.EndTime);
            });

            it("Should Enter Today Date And Begin Time As 19:00 And End Time As 23:00 In Scheduled Appointment Time For Stop 99", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTimeForStop99(data.BeginTime, data.EndTime);
            });

            it('Should Click On COMMENTS Tab', async () => {
                await orderDetailsViewPage.commentsTabClick()
            });

            it('Should Click On The Dropdown Tab Underneath Type, Click GENERAL.', async () => {
                await commentsPage.commentsTypeValueSelection(data.commentType);
            });

            it('Should Add THIS IS A TEST ORDER DO NOT PROCESS In The Comment Section', async () => {
                await commentsPage.setComments(data.comment);
            });

            it('Should click On The Details Tab', async () => {
                await orderDetailsViewPage.detailsTabClick();
            });

            it('Verifying that the Comments Tab Is Now COMMENTS (1)', async () => {
                await expect<any>(orderDetailsViewPage.commentsTab.getText()).toBe(data.commentsText);
            });

            it("Should click on create load button ", async () => {
                await orderDetailsViewPage.clickOnCreateLoadButton();
                await orderDetailsViewPage.clickContinueButton();
            });

            it("Should note the Load Number ", async () => {
                loadNumber = await loadDetailsPage.standardloadNumber();
                data.orderNumber = loadNumber.trim();
            });
    });
}

    //Tc 191437 : EOM DCS Food Safety LOad Create Verification
    async eomDcsFoodSafetyLoadCreateVerification (loadData,data) {
        describe("EOM DCS Food Safety Load Create Verification", async() => {

            it("Should open EOM url", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("Verifying that EOM page is displayed", async function () {
                await expect<any>(enterpriseOrderManagementPage.getPageTitle()).toBe(data.eomTitle);
            });

            it("Should Enter load number in the Search Value box", async function () {
                await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.searchOption,loadData.orderNumber);
            });

            it("Should Click the Search Loads button", async function () {
                await enterpriseOrderManagementPage.clickSearchLoadsButton();
            });

            it("Click on load hyperlink", async () => {
                await enterpriseOrderManagementPage.clickOnLoadHyperlink(loadData.orderNumber);
            });

            it("Should click on the 'Load Details' Arrow Icon", async () => {
                await loadDetailsPage.loadDetailsClick();
            });

            it('Should Ensure  Fleet is DCS SIGR94', async () => {
                await loadDetailsPage.verifyFleetinLoadDetail();
            });

            it('Should Ensure "F" shows as monitor code', async () => {
                await expect(enterpriseOrderManagementPage.verifyMonitorCode()).toBe(data.monitorValue);    
            });

            it('Should Ensure Mode is Truck', async () => {
                await loadDetailsPage.verifyModeTruckInLoadDetail();
            });
        });
    }

    //TC 190121: High Value ICS FlatBed EOM Load Create
    async highValueIcsFlatbedEomLoadCreate(data) {
        describe("High Value ICS FlatBed EOM Load Create", async () => {

            it("Should Launch EOM Search Page Application And Login If Required", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl)
            });

            it("Verifying That Enterprise Order Management Page Is Displayed", async function () {
                await expect<any>(browser.getTitle()).toBe(data.enterpriseOrderManagementTitle);
            });

            it("Should Enter Bill To Code", async () => {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode)
            });

            it("Should Enter Origin Code", async () => {
                await enterpriseOrderManagementPage.setOrigin(data.originCode)
            });

            it("Should Enter Destination Code", async () => {
                await enterpriseOrderManagementPage.setValueToDestination(data.destinationCode)
            });

            it("Should Click On Search Skeletons Button", async () => {
                await enterpriseOrderManagementPage.clickOnEOMButton(data.searchSkeletonButtonId)
            });

            it("Verifying That Skeltons List Will Be Displayed", async () => {
                await expect(skeletonListingPage.verifySkeltonList(data.zero)).toBeTruthy();
            });

            it("Should Click On Book Load Icon Having Mode As Train", async () => {
                await skeletonListingPage.clickOnBookLoadIconHavingTrainMode();
            });

            it("Verifying That Skeltons Pick Screen Will Be Displayed", async () => {
                await expect<any>(skeletonListingPage.getSkeletonPickScreenTitle()).toBe(data.skeletonPickScreenTitle);
            });

            it("Should Click On Next In Select Pick Up Date Screen", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });

            it("Should Click On ICS ", async () => {
                await skeletonListingPage.clickOnIcsUnderCurrentDate(data.mode);
            });

            it("Verifying That New Load Deatils Screen Will Be Displayed", async () => {
                await expect<any>(loadDetailsPage.getStandardNewLoadScreenTitle()).toBe(data.standardNewLoadScreenTitle);
            });

            it("Should Click Load Details Extension Tab", async () => {
                await orderDetailsViewPage.loadDetailsClick();
            });

            it("Should Click On Project And Change Project Code To 'DALT'", async () => {
                await loadDetailsPage.changeProjectCode(data.projectCode);
            });

            it("Should Change Equipment Type To FaltBed", async () => {
                await loadDetailsPage.changeEquipmentTypeToFlatBed(data.equipmentType)
            });

            it("Should Select H In Monitor Dropdown", async () => {
                await orderDetailsViewPage.monitorsValueSelection(data.monitorValue)
            })

            it("Should Click On Drop Down Tab Next To Bill To", async () => {
                await orderDetailsViewPage.billToClick();
            })

            it("Should Click On Classification Lens Icon", async () => {
                await orderDetailsViewPage.clickOnClassificationLensIcon();
            })

            it("Should Click On High Value", async () => {
                await orderDetailsViewPage.clickOnHighValueCheckbox();
            })

            it("Should Click On Close window Button", async () => {
                await orderDetailsViewPage.clickOncloseWindowButton();
            })

            it("Should Enter Today Date And Begin Time As 19:00 And End Time As 23:00 In Scheduled Appointment Time For Stop 1", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.BeginTime, data.EndTime);
            });

            it("Verifying STOP 99 Has NO Appointment Date And Time", async () => {
                await loadDetailsPage.receiverScheduledAppointmentEmptyCheck();
            });

            it("Should Click On COMMENTS Tab", async () => {
                await orderDetailsViewPage.commentsTabClick()

            });

            it("Should Click On The Dropdown Tab Underneath Type, Click GENERAL.", async () => {
                await commentsPage.commentsTypeValueSelection(data.commentType);
            });

            it("Should Add 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!' In The Comment Section", async () => {
                await commentsPage.setComments(data.comment);
                await commentsPage.setComments(data.comment);
            });

            it("Click On The 'Details' Tab", async () => {
                await orderDetailsViewPage.detailsTabClick();
            });

            it("Verifying The Comments Tab Is Now COMMENTS (1)", async () => {
                await expect<any>(orderDetailsViewPage.commentsTab.getText()).toBe(data.commentsText);
            });

            it("Should Click On Create Load Button", async () => {
                await orderDetailsViewPage.clickOnCreateLoadButton();
                await orderDetailsViewPage.clickOnOverRideSelectButton();
            });

            it("Should Take Note Of The Load Number At The Top Of The Page", async () => {
                data.loadNumber = await loadDetailsPage.getLoadNumber();
                data.loadNumber = data.loadNumber.trim();
            });

        });
    }

    //TC 190126: EOM Load Create Hazmat ICS Flatbed
    async eomLoadCreateHazmatIcsFlatbed(data) {

        describe("EOM Load Create Hazmat ICS Flatbed", async () => {

            it("Should Launch EOM Search Page Application And Login If Required", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl)
            });

            it("Verifying That Enterprise Order Management Page Is Displayed", async function () {
                await expect<any>(browser.getTitle()).toBe(data.enterpriseOrderManagementTitle);
            });

            it("Should Enter Bill To Code", async () => {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode)
            });

            it("Should Enter Origin Code", async () => {
                await enterpriseOrderManagementPage.setOrigin(data.originCode)
            });

            it("Should Enter Destination Code", async () => {
                await enterpriseOrderManagementPage.setValueToDestination(data.destinationCode)
            });

            it("Should Click On Search Skeletons Button", async () => {
                await enterpriseOrderManagementPage.clickOnEOMButton(data.searchSkeletonButtonId)
            });

            it("Verifying That Skeltons List Will Be Displayed", async () => {
                await expect(skeletonListingPage.verifySkeltonList(data.zero)).toBeTruthy();
            });

            it("Should Click On Book Load Icon Having Mode As Train", async () => {
                await skeletonListingPage.clickOnBookLoadIconHavingTrainMode();
            });

            it("Verifying That Skeltons Pick Screen Will Be Displayed", async () => {
                await expect<any>(skeletonListingPage.getSkeletonPickScreenTitle()).toBe(data.skeletonPickScreenTitle);
            });

            it("Should Click On Next In Select Pick Up Date Screen", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });

            it("Should Click On ICS ", async () => {
                await skeletonListingPage.clickOnIcsUnderCurrentDate(data.mode);
            });

            it("Verifying That New Load Deatils Screen Will Be Displayed", async () => {
                await expect<any>(loadDetailsPage.getStandardNewLoadScreenTitle()).toBe(data.standardNewLoadScreenTitle);
            });

            it("Should Click Load Details Extension Tab", async () => {
                await orderDetailsViewPage.loadDetailsClick();
            });

            it("Should Click On Project And Change Project Code To 'DALT'", async () => {
                await loadDetailsPage.changeProjectCode(data.projectCode);
            });

            it("Should Change Equipment Type To FaltBed", async () => {
                await loadDetailsPage.changeEquipmentTypeToFlatBed(data.equipmentType)
            });

            it("Verifying No Monitor Codes Are Selected", async () => {
                await orderDetailsViewPage.monitorsValueSelection(data.monitorValue)
            })

            it("Should Click On Drop Down Tab Next To Bill To KNDA3", async () => {
                await orderDetailsViewPage.billToClick();
            })

            it("Should Click On Classification Lens Icon", async () => {
                await orderDetailsViewPage.clickOnClassificationLensIcon();
            })

            it("Should Click On The HAZMAT Checkbox To Select", async () => {
                await loadDetailsPage.clickOnOrderClassificationCheckBox(data.classificationCheckboxValue);
            });

            it("Should Click On Close window Button", async () => {
                await loadDetailsPage.clickOnCloseButton();
            })

            it("Should Enter Today Date And Begin Time As 19:00 And End Time As 23:00 In Scheduled Appointment Time For Stop 1", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.BeginTime, data.EndTime);
            });

            it("Verifying STOP 99 Has NO Appointment Date And Time", async () => {
                await loadDetailsPage.receiverScheduledAppointmentEmptyCheck();
            });

            it("Should Select 'Y' Option From Dropdown Under Hazmat ", async () => {
                await loadDetailsPage.selectOptionFromHazmatDropDown(data.hazmatDropDownValue);
            });

            it("Should Click On COMMENTS Tab", async () => {
                await orderDetailsViewPage.commentsTabClick()

            });

            it("Should Click On The Dropdown Tab Underneath Type, Click GENERAL.", async () => {
                await commentsPage.commentsTypeValueSelection(data.commentType);
            });

            it("Should Add 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!' In The Comment Section", async () => {
                await commentsPage.setComments(data.comment);
                await commentsPage.setComments(data.comment);
            });

            it("Click On The 'Details' Tab", async () => {
                await orderDetailsViewPage.detailsTabClick();
            });

            it("Verifying The Comments Tab Is Now COMMENTS (1)", async () => {
                await expect<any>(orderDetailsViewPage.commentsTab.getText()).toBe(data.commentsText);
            });

            it("Should Click On Create Load Button", async () => {
                await orderDetailsViewPage.clickOnCreateLoadButton();
                await orderDetailsViewPage.clickOnOverRideSelectButton();
            });

            it("Should Take Note Of The Load Number At The Top Of The Page", async () => {
                data.loadNumber = await loadDetailsPage.getLoadNumber();
                data.loadNumber = data.loadNumber.trim();
            });

        });

    }

    //TC 187920: Brokerage-Multi-Pick/Multi-Drop Load Create EOM
    async eomBrokerageMultiPickorMultiDropLoadCreateEOM(data) {

        describe("Brokerage-Multi-Pick/Multi-Drop Load Create EOM", function () {
            let loadNumber: string;
            let originRamp: string;

            it("Should open EOM url", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("should enter KNDA3 in Bill To Code field", async function () {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
            });

            it("should enter Origin and destination fields", async function () {
                await enterpriseOrderManagementPage.setValuesCustomerGeographicalSearch(data.origin, data.destination);
            });

            it("Should click on Search Skelton button", async () => {
                await enterpriseOrderManagementPage.clickSearchSkeletons();
            });

            it("Verifying that skeltons list will be displayed", async () => {
                await expect(skeletonListingPage.verifySkeltonList(data.zero)).toBeTruthy();
            });

            it("Should find an order that has HJBT JBVAN underneath Division, and TRAIN underneath Mode and click on skelton book load", async () => {
                await skeletonListingPage.clickOnBookLoadWithDivisionHjbtJbvanAndTrainMode();
            });

            it("Verifying that skeltons pick screen will be displayed", async () => {
                await expect<any>(skeletonListingPage.getSkeletonPickScreenTitle()).toBe(data.skeletonPickScreenTitle);
            });

            it("Should click on Next Button in skelton pick screen", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });

            it("Should click on ICS", async () => {
                await loadDetailsPage.clickOnIcsUnderCurrentDate();
            });

            it("Verifying that New Load Deatils screen will be displayed", async () => {
                await expect<any>(loadDetailsPage.getStandardNewLoadScreenTitle()).toBe(data.standardNewLoadScreenTitle);
            });

            it("Should click on dropdown tab next to Load DETAIL", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfLoadDetails();
            });

            it("Should change project code to DALT", async () => {
                await loadDetailsPage.changeProjectCode(data.projectCode);
            });

            it("Verifying NO monitor codes are selected", async () => {
                await expect<any>(orderDetailsViewPage.monitorValueCheck()).toBe("");
            })

            it("Should click on dropdown tab next to Bill To GEEC", async () => {
                await loadDetailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
            });

            it("Verifying no classifications are selected.", async () => {
                await loadDetailsPage.verifyClassificationValue(data.empty);
            });

            it("Should click on add stop button", async () => {
                await loadDetailsPage.clickOnAddStopButton();
            });

            it("Should click on add stop button", async () => {
                await loadDetailsPage.clickOnAddStopButton();
            });

            it("Should select Shipper from the drop down to stop2", async () => {
                await loadDetailsPage.setStop2DropDown(data.shipperDropDown)
            });

            it("Should enter the Shipper Code", async () => {
                await loadDetailsPage.enterShipperCode(data.shipperCode);
            });

            it("Should select RECEIVER from the drop down to stop3", async () => {
                await loadDetailsPage.setStop3DropDown(data.receiverDropDown)
            });

            it("Should enter the RECEIVER Code", async () => {
                await loadDetailsPage.enterStop3Code(data.receiverCode);
            });

            it("Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop1", async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
            });

            it("Should enter the date 5 days after current date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop2", async () => {
                await loadDetailsPage.setStop2ScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
            });

            it("Click the dropdown tab underneath LOAD/UNLOADED BY, click to select CUSTOMER", async () => {
                await loadDetailsPage.setStop2LoadAndUnloadedByDropdown(data.loadUnlodedByDropDownOption);
            });

            it("Should enter the date 5 days after the date on STOP 3 date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop2", async () => {
                await loadDetailsPage.setStop3ScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
            });

            it("Click the dropdown tab underneath LOAD/UNLOADED BY, click to select CUSTOMER", async () => {
                await loadDetailsPage.setStop3LoadAndUnloadedByDropdown(data.loadUnlodedByDropDownOption);
            });

            it("Click the dropdown tab underneath DRIVER COUNT, click to select N", async () => {
                await loadDetailsPage.setStop3DriverCountDropdown(data.driverCountDropDownOption);
            });

            it("Should enter the date 5 days after the date on STOP 99 date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop2", async () => {
                await loadDetailsPage.setLastStopScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
            });

            it("Click the dropdown tab underneath DRIVER COUNT, click to select N", async () => {
                await loadDetailsPage.setLastStopDriverCountDropdown(data.driverCountDropDownOption);
            });

            it('Should Click On COMMENTS Tab', async () => {
                await orderDetailsViewPage.commentsTabClick()
            });

            it('Should Click On The Dropdown Tab Underneath Type, Click GENERAL.', async () => {
                await commentsPage.commentsTypeValueSelection(data.commentType);
            });

            it('Should Add THIS IS A TEST ORDER DO NOT PROCESS In The Comment Section', async () => {
                await commentsPage.setComments(data.comment);
            });

            it("Should Click the Details Tab", async () => {
                await loadDetailsPage.detailsTabClick();
            });

            it('Verifying that the Comments Tab Is Now COMMENTS (1)', async () => {
                await expect<any>(orderDetailsViewPage.commentsTab.getText()).toBe(data.commentsText);
            });

            it("Should click on Create Load button", async () => {
                await orderDetailsViewPage.clickOnCreateLoadButton();
            });

            it("Should take note of the load number at the top of the page", async () => {
                loadNumber = await loadDetailsPage.getLoadNumber();
                data.orderNumber = loadNumber.trim();
            });

        });

    }

    //TC 188232: EOM 1019 Food safety Load Create
    async eomFoodSafetyLoadCreate(data) {
        describe("1019 EOM Load Create", () => {

            let loadNumber: string;
            let destination:string;
            let origin:string
    
            it('Should open Eom url', async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl)
            });
    
            it('Change Search Options to PROJECT CODE', async () => {
                await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.searchOption, data.searchValue);
            });
    
            it("Should click on Search Skelton button", async () => {
                await enterpriseOrderManagementPage.clickSearchSkeletons();
            });
    
            it('Select the last skeleton by clicking on the green button', async () => {
                await skeletonListingPage.clickOnBookIconHavingRequiredBillTo(data.billToCode);
            });
    
            it("should Click Next button", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });
    
            it("Should select option for reason code", async () => {
                await skeletonListingPage.selectOptionFromChooseReasonCode(data.reasonCode);
            });
    
            it("Should click on book load with rate button", async () => {
                await skeletonListingPage.clickOnBookLoadWithoutRateButton();
            });
    
            it("Should click on LTL tab", async () => {
                await loadDetailsPage.clickOnLtlTab();
            });
    
            it("Enter values into another line items on EOM page", async () => {
                let arr: string[] = [data.productDescription, data.hdlQuantity, data.boxesOption, data.hdlQuantity, data.totalWeight];
                await lTLInformationPage.setValuesIntoNewLineItems(arr);
            });
    
            it("Click on details tab", async () => {
                await loadDetailsPage.clickOnEOMTabs(data.detailsTab);
            });
    
            it('Should click on Load Detail Dropdown Tab', async () => {
                await orderDetailsViewPage.loadDetailsClick();
            });
    
            it('Should not contain any data in Monitor Dropdown', async () => {
                await orderDetailsViewPage.monitorsValueSelection(data.monitorValue)
            });
    
            it('Should enter today date and begin time as 08:00 and end time as 23:00 in Scheduled Appointment Time', async () => {
                await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.startTime, data.endTime);
            });
    
            it('Should enter 5 days later date and begin time as 08:00 and end time as 23:00 in Scheduled Appointment Time', async () => {
                await loadDetailsPage.setStop99ScheduledAppointmentFiveDaysLaterDateAndTime(data.startTime, data.endTime);
            });
    
            it('Should click on Create Load button', async () => {
                await loadDetailsPage.clickOnCreateLoad();
            });
    
            it('Should Note Load Number', async () => {
                loadNumber = await loadDetailsPage.getLoadNumber();
                console.log(loadNumber);
                data.orderNumber= loadNumber
            });

            it("Should take note of the destination details at bottom of the page", async () => {
                origin = await loadDetailsPage.getOrigin();
                data.origin = origin
            });

            it("Should take note of the destination details at bottom of the page", async () => {
                destination=await loadDetailsPage.getDestination();
                data.destination = destination
            });
    
        });
    }

}
