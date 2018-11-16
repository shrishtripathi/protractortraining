import { BasePage } from '../../pages/base.po';
import { DataProvider } from '../../data/dataProvider';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { FleetDecisionPage } from '../../pages/eom/fleet-decision.po';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';
import { DetailsPage } from '../../pages/eom/details.po';
import { browser } from 'protractor';
import { CommentsPage } from "../../pages/eom/comments.po";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let using = require('jasmine-data-provider');
let orderDetailsViewPage = new OrderDetailsViewPage();
let detailsPage = new DetailsPage();
let commentsPage = new CommentsPage();
let loadDetailsPage = new DetailsPage();


// TC #190120: Multi-Pick/Multi-Drop Load Create EOM ICS Flatbed
using(DataProvider.Tc_190120, async function (data) {

    describe("Multi Pick or Multi-Drop Load Create EOM ICS Flatbed", () => {
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
            await detailsPage.clickOnICS();
        });

        /*
        
        it("Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop1", async () => {
            await detailsPage.setScheduledAppointmentTodayDateAndTime(data.startTime, data.endTime);
        });

        it("Should check receiver scheduled appointment date fields are empty", async () => {
            await orderDetailsViewPage.receiverScheduledAppointmentEmptyCheck();
        });

        it("Click on Add Stop button", async () => {
            await detailsPage.clickAddStop();
        });

        it("Click on Add Stop button", async () => {
            await detailsPage.clickAddStop();
        });

        it("Select Department and Code under STOP2 section", async () => {
            await detailsPage.fillStop2Details(data.stop2Dept,data.stop2DeptCode,data.startTime,data.endTime,"CUSTOMER");
        });

        it("Select Department and Code under STOP3 section", async () => {
            await detailsPage.fillStop3Details(data.stop3Dept,data.stop3DeptCode,data.startTime,data.endTime,"CUSTOMER");
        });



        it("should Click Load details extension tab", async () => {
            await orderDetailsViewPage.loadDetailsClick();
        })

        it("Should change project code to DALT", async () => {
            await detailsPage.changeProjectCode(data.projectCode);
        });

        it("Should select Equipment type", async () => {
            await detailsPage.selectEquipmentType(data.equipmentType);
        });

        it("Verifying NO monitor codes are selected", async () => {
            await expect<any>(orderDetailsViewPage.monitorValueCheck()).toBe("");
        });      

        it("Should click on dropdown tab next to Bill To GEEC", async () => {
            await detailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
        });

        it("Verifying no classifications are selected.", async () => {
            await detailsPage.verifyClassificationValue(data.empty);
        });

       

        it("Should Click On Create Load Button", async () => {
            await detailsPage.clickOnCreateLoad();
        });

        it("Should Take Note Of The Load Number At The Top Of The Page", async () => {
            loadNumber = await detailsPage.getLoadNumber();
            console.log("loadNumber:" + loadNumber);
            loadNumber = loadNumber.trim();
        });
         */
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

        it("Should change project code to DALT", async () => {
            await detailsPage.changeProjectCode(data.projectCode);
        });

        it("Should select Equipment type", async () => {
            await detailsPage.selectEquipmentType(data.equipmentType);
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
/*
        it("Should Click the dropdown tab underneath LOADED ON, click to select FLOOR", async () => {
            await loadDetailsPage.setStop2LoadedOnDropdown(data.loadedOnDropDownOption);
        });*/

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

        it("Should Click On Create Load Button", async () => {
            await detailsPage.clickOnCreateLoad();
        });

        it("Should Take Note Of The Load Number At The Top Of The Page", async () => {
            loadNumber = await detailsPage.getLoadNumber();
            console.log("loadNumber:" + loadNumber);
            loadNumber = loadNumber.trim();
        });

        
    });
      
    });