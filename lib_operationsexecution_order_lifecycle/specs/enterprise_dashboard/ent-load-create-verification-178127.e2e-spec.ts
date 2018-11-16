import { DataProvider } from "../../data/dataProvider";
import { EnterpriseDashBoardHomePage } from "../../pages/enterprise_dashboard/enterprise-dashboard-homepage.po";
import { AppointmentsPage } from "../../pages/enterprise_dashboard/appointments-tab-po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { DetailsPage } from "../../pages/eom/details.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { CommentsPage } from "../../pages/eom/comments.po";
import { browser } from "protractor";
import { NewViewPage } from "../../pages/enterprise_dashboard/new-view-tab-po";
import { MonitorPage } from "../../pages/enterprise_dashboard/monitor-tab-po";
import { CommonFunctions } from "../../utilities/common-functions";


let enterpriseDashBoardHomePage = new EnterpriseDashBoardHomePage();
let appointmentsPage = new AppointmentsPage();
let newViewPage = new NewViewPage();
let monitorPage = new MonitorPage();
let skeletonListingPage = new SkeletonListingPage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let detailsPage = new DetailsPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let commentsPage = new CommentsPage();
let commonFunctions=new CommonFunctions();
let using = require('jasmine-data-provider');
//TC #178127: ENT Load Create Verification
using(DataProvider.Tc_178127, async function (data) {
    describe("ENT Load Create Verification", () => {    
        let loadNumber: string;
        let originRamp: string;
        let initials: string;
        let viewName: string;
        using(DataProvider.Tc_184948, async function (data) {
            describe("EOM 1Pick/1Drop Load Create", () => {

                it("Should Launch EOM Search Page Application And Login If Required", async () => {
                    await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl)
                });

                it("Verifying That Enterprise Order Management Page Is Displayed", async function () {
                    await expect<any>(browser.getTitle()).toBe(data.enterpriseOrderManagementTitle);
                });

                it("Should Enter Bill To Code", async () => {
                    await enterpriseOrderManagementPage.enterBillToCode(data.code)
                });

                it("Should Enter Origin Code", async () => {
                    await enterpriseOrderManagementPage.setOrigin(data.originCode)
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
                    await skeletonListingPage.clickNextONSelectPickUpDateScreen()
                });

                it("Should Click On IM", async () => {
                    await skeletonListingPage.clickOnIM();
                });

                it("Verifying that New Load Deatils screen will be displayed", async () => {
                    await expect<any>(detailsPage.getStandardNewLoadScreenTitle()).toBe(data.standardNewLoadScreenTitle);
                });

                it("Should Enter Today Date And Begin Time As 19:00 And End Time As 23:00 In Scheduled Appointment Time", async () => {
                    await detailsPage.setScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
                });

                it("Should Clear Date And Time In Scheduled Appointment Time For Stop 99", async () => {
                    await detailsPage.setScheduledAppointmentTodayDateAndTimeInStop99(data.stop99Date, data.stop99BeginTime, data.stop99EndTime);
                });

                it("Should Click On Load Detail Dropdown Tab", async () => {
                    await orderDetailsViewPage.loadDetailsClick();
                });

                it("Should Not Contain Any Data In Monitor Dropdown", async () => {
                    await orderDetailsViewPage.monitorsValueSelection(data.monitorValue)
                });

                it("Should Click On Bill To Dropdown Tab", async () => {
                    await orderDetailsViewPage.billToClick();
                });

                it("Should Verify Text In Classification Tab", async () => {
                    await orderDetailsViewPage.verifyClassificationText();
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
                    await detailsPage.clickOnCreateLoad();
                });

                it("Should Take Note Of The Load Number At The Top Of The Page", async () => {
                    loadNumber = await detailsPage.focusLoadNumber();
                    console.log("loadNumber:" + loadNumber);
                    loadNumber = loadNumber.trim();
                });

                it("Should Take Note Of The Destination Details At Bottom Of The Page", async () => {
                    originRamp = await detailsPage.getOriginRamp();
                    originRamp = originRamp.trim();
                });

                it("Should Click On Load Detail Dropdown Tab", async () => {
                    await orderDetailsViewPage.loadDetailsClick();
                });

                it("Should Take Note Of Initials Under Load Details Tab Of EOM Screen", async () => {
                    initials = await detailsPage.getInitials();
                    console.log("Initials:"+initials);
                    initials = initials.trim();
                });
            });
        });


        describe("ENT Load Create Verification", () => {

            it("Should Navigate Back To Enterprise Dashboard Application And Login If Required", async () => {
                await enterpriseDashBoardHomePage.actions.get(enterpriseDashBoardHomePage.enterpriseDashoboardUrl, "Enterprise Dashboard")
                await appointmentsPage.loading();
            });

            it("Verifying That Enterprise Dashboard Page Is Displayed", async function () {
                await expect<any>(enterpriseDashBoardHomePage.getPageTitle()).toBe(data.enterpriseDashboardTitle);
            });

            it("Should Click On 'New View Tab' On The Left Side Of The Page ", async () => {
                await enterpriseDashBoardHomePage.clickOnNewVieweTab();
            });

            it("Should Enter Anything For The View Name. Ex 'Scott'", async () => {
                viewName = data.viewname+await commonFunctions.randomNumberGenarator(3);
                await newViewPage.fillViewNameTextBox(viewName);
            });

            it("Should Enter The Order's Initials Under User Input (Initials Will Be Found Under The Load Details Tab Of EOM's Order Screen)", async () => {
                await newViewPage.fillUserInputTextBox(initials);
            });

            it("Should Click On Save Button", async () => {
                await newViewPage.clickOnSaveButton();
            });

            it("Should Click On 'Monitor Tab' On The Left Side Of The Page", async () => {
                await enterpriseDashBoardHomePage.clickOnMonitorTab();
            });

            it("Should Click On View Drop Down Box", async () => {
                await monitorPage.clickOnMonitorViewDropDownBox();
            });

            it("Should Select 'Nasty Nate McLovin' View Drop Down Box", async () => {
                await monitorPage.selectUserFromMonitorViewDropDownBox(data.user);
            });

            it("Verifying That Load Displays Under The Order Column And Relevant Information Matches EOM", async () => {
                await expect<any>(appointmentsPage.verifyingPresenceOfLoadUnderOrder(loadNumber)).toBe(loadNumber);
            });
        });
    });
});