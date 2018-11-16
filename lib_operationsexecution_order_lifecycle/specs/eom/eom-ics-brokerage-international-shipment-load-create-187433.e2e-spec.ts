import { BasePage } from '../../pages/base.po';
import { DataProvider } from '../../data/dataProvider';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { FleetDecisionPage } from '../../pages/eom/fleet-decision.po';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';
import { DetailsPage } from '../../pages/eom/details.po';
import { browser } from 'protractor';


let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let using = require('jasmine-data-provider');
let orderDetailsViewPage = new OrderDetailsViewPage();
let detailsPage = new DetailsPage();


// TC #187433: ICS (Brokerage) International Shipment- Load Create
using(DataProvider.Tc_187433, async function (data) {

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
            await detailsPage.clickOnICS();
        });
        
        it("Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop1", async () => {
            await detailsPage.setScheduledAppointmentTodayDateAndTime(data.startTime, data.endTime);
        });

        it("Should check receiver scheduled appointment date fields are empty", async () => {
            await orderDetailsViewPage.receiverScheduledAppointmentEmptyCheck();
        });

        it("should Click Load details extension tab", async () => {
            await orderDetailsViewPage.loadDetailsClick();
        })

        it("Should change project code to DALT", async () => {
            await detailsPage.changeProjectCode(data.projectCode);
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

        it("Should enter 'CCBDA' to solictor ", async () => {
            await detailsPage.setSolictor(data.solictor);              
        });

        it("Should enter Broker ", async () => {
            await detailsPage.setBroker(data.broker);            
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