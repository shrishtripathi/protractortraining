import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { DetailsPage } from "../../pages/eom/details.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { CommentsPage } from "../../pages/eom/comments.po";
import { DataDemo } from "../../data/datademo";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let loadDetailsPage = new DetailsPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let skeletonListingPage = new SkeletonListingPage();
let commentsPage = new CommentsPage();
let using = require('jasmine-data-provider');

//export class EOME2EComponents {

    using(DataDemo.Suite_demo, async function(data){
    //async EoMLoadCreate(data) {
        let loadNumber: string;
        console.log(data);

        describe("EOM Hazmat Load Create", function () {
            let loadNumber: string;
            console.log(data);
            it("Should open EOM url", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
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
                data.orderNumber = loadNumber.trim();
            });

            it("Should take note of the destination details at bottom of the page", async () => {
                await loadDetailsPage.getDestinationDetails();
            });

        });

    });