import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { CheckCallDetailsPage } from "../../pages/freight_manager/check-call-details.po";
import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { DetailsPage } from "../../pages/eom/details.po";
import { CommentsPage } from "../../pages/eom/comments.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";

let freightManager2Page = new FreightManager2Page();
let orderSegmentPage = new OrderSegmentPage();
let checkCallDetailsPage = new CheckCallDetailsPage();
let myJbHuntHomePage = new MyJbHuntHomePage();
let skeletonListingPage = new SkeletonListingPage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let detailsPage = new DetailsPage();
let commentsPage = new CommentsPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let unitViewPage = new UnitViewPage();
let using = require('jasmine-data-provider');

//TC-184310 :Generic Dispatch
using(DataProvider.Tc_184311, async function (data) {
    describe("Generic Dispatch", async function () {
        let loadNumber: string;
        let unitNumber: string;
        let originRamp: string;
        using(DataProvider.Tc_184948, async function (data) {
            describe("EOM 1Pick/1Drop Load Create", () => {

                it("Should Launch EOM Search Page Application And Login If Required", async () => {
                    await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.eomUrl)
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

                it("Should click on IM", async () => {
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

                it("Should take note of the load number at the top of the page", async () => {
                    loadNumber = await detailsPage.focusLoadNumber();
                    console.log("loadNumber:" + loadNumber);
                    loadNumber = loadNumber.trim();
                });

                it("Should take note of the destination details at bottom of the page", async () => {
                    originRamp = await detailsPage.getOriginRamp();
                    originRamp = originRamp.trim();
                });
            });
        });

        using(DataProvider.Tc_187034, async (data) => {
            describe("FM2 Finding JBC Driver", () => {
                it('Should Launch Freight Manager Application And Login If Required', async () => {
                    await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
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
                    unitNumber = await unitViewPage.getAvailableTractor(data.dSPSTT, data.oBCError);
                    unitNumber = unitNumber.trim();
                    console.log("tractorNumber:" + unitNumber);
                });

                it("Verify the other columns data from Serach results", async () => {
                    await expect<any>(unitViewPage.validateBarCodeSearchResults(unitNumber)).toBeTruthy();
                });
            });
        });

        using(DataProvider.Tc_185221, async function (data) {
            describe("FM2 1Pick/1Drop Preplan", () => {
                it("Should Navigate Back To Freight Manager Application And Login If Required", async () => {
                    await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
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

                it("Should Click The Radial Button Next To Tractor", async () => {
                    await orderSegmentPage.selectRadioPreplanType(data.radialValue);
                });

                it("Should Enter Earlier Noted Driver Number  in the White Text Box Underneath Tractor", async () => {
                    await orderSegmentPage.enterTractorNumber(unitNumber);
                });

                it("Should Click On All The Check Boxes.", async () => {
                    await orderSegmentPage.clickcheckbox();
                });

                it("Should Enter Origin Ramp (For This Example My Origin Ramp Is D?) In The White Text Box Underneath TCall Location", async () => {
                    await orderSegmentPage.EnterTcall(originRamp, " Origin Ramp value");
                });

                it("Should Click ON Create Preplan Button. If Required, Click On Continue Button", async () => {
                    await orderSegmentPage.clickOnCreatePreplanButton();
                });

            });
        });
        
        describe("Generic Dispatch", async function () {
            it("Should Navigate Back To Freight Manager Application And Login If Required", async function () {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
            });

            it("Verifying That Freight Manager Page Is Displayed", async function () {
                await expect<any>(browser.getTitle()).toBe(data.freightManagerPagetitle);
            });

            it("Should Hover Over The Planning Tab, Click Order Segment To Select", async function () {
                await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.tabOption);
            });

            it("Should Enter Load Number In The White Text Box Underneath Order#", async function () {
                await orderSegmentPage.enterOrderNumber(loadNumber, 'Order #');
            });

            it("Should Click On Search Button", async function () {
                await orderSegmentPage.clickOnSearchButton();
            });

            it("Should Click On Driver Number Hyperlink Underneath Power Drive", async function () {
                await orderSegmentPage.clickTractorNumberUnderPowerDriverColumn(unitNumber);
            });

            it("Verifying Check Calls Details Is Displayed", async function () {
                await checkCallDetailsPage.verifyCheckCallDetailsPage();
            });

            it("Should Hover Over Status Option From Header", async function () {
                await freightManager2Page.hoverOverFM2PageHeaderOption(data.headerOptionStatus);
            });

            it("Should Click On Dispatch Option", async function () {
                await freightManager2Page.clickHeaderDropDownOption(data.headerDropDownOptionDispatch);
            });

            it("Should Wait Till Dispatch Window Opens", async function () {
                await checkCallDetailsPage.waitTillDispatchWindowLoad();
            });

            it("Should Click On Update Button In Dispatch Window", async function () {
                await checkCallDetailsPage.clickOnUpdateOnPopup();
            });

            it("Verifying Dispatch Is Completed", async function () {
                let result: boolean = await checkCallDetailsPage.verifyCheckCallHistorySuccessful(data.transactionValue);
                await expect(result).toBeTruthy();
            });
        });
    });
});