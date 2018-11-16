import { BasePage } from '../../pages/base.po';
import { DataProvider } from '../../data/dataProvider';
import { browser } from 'protractor';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { OrderSegmentPage } from '../../pages/freight_manager/order-segment.po';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';
import { FleetDecisionPage } from '../../pages/eom/fleet-decision.po';
import { DetailsPage } from '../../pages/eom/details.po';

let basePage = new BasePage();
let using = require('jasmine-data-provider');
let freightManager2Page = new FreightManager2Page();
let orderSegmentPage = new OrderSegmentPage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let fleetDecisionPage = new FleetDecisionPage();
let detailsPage = new DetailsPage();
let loadDetailsPage = new DetailsPage();

describe('FM2 1Pick/1Drop & Multi Pick/Drop & High Value & Hazmat Dispatch', async () => {
    let loadNumber: string;
    let tractorNumber: string;
    let equipmentNo: string;
    let chassisNo: string;

    using(DataProvider.Tc_184948, async (data) => {

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
            await skeletonListingPage.clickOnIcsUnderCurrentDate(data.mode);
        });

        it('Should Set Time under Scheduled Appointmnet', async () => {
            await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.beginTime, data.endTime)
        });

        it('Should set Stop99 Scheduled Appointment Date And Time', async () => {
            await loadDetailsPage.setStop99ScheduledAppointmentTommorowDateAndTime(data.startTime, data.endingTime);
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

        it('Should Click on Create Load Button', async () => {
            await orderDetailsViewPage.clickOnCreateLoadButton()
        });

        it('Should Note Load Number', async () => {
            loadNumber = await loadDetailsPage.focusLoadNumber();
            loadNumber = loadNumber.trim();
            console.log("data.loadNumber:" + loadNumber);
        });
    });

    
    


using(DataProvider.Tc_181906, async function (data) {
    
    
                   
        it("Should Launch Freight Manager Application And Login If Required", async () => {
            await basePage.navigateToAppHome(basePage.freightManager2);
        });

        it("Should Hover Over The Planning Tab, Click Order Segment To Select", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.tabOption);
        });

        it("Should Enter Load Number In The White Text Box Underneath Order#", async () => {
            await orderSegmentPage.enterOrderNumber(loadNumber, 'Order #');
        });

        it("Should Click On Search Button", async () => {
            await orderSegmentPage.clickOnSearchButton();
            
        });

        it("Verifying that Tender Stat SENT is displayed", async function () {
            //await browser.sleep(9000);
            await expect<any>(orderSegmentPage.verifyPreplannedOrder(data.tableId, data.power, data.stat)).toBe(data.tenderStat);
        });

    })
})


