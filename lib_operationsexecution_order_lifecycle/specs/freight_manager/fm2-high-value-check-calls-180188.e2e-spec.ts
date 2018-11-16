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
import { CommentsPage } from "../../pages/eom/comments.po";

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
let commentsPage = new CommentsPage();

// #180188 - FM2 High Value Check Calls
describe('FM2 High Value Check Calls', async () => {
    let loadNumber: string = "M541356";
    let unitNumber: string = "333667";
    let originRamp: string = "D?";
    let equipmentNumber: string = "271135";
    let customerCode: string = "LGFO18";

    using(DataProvider.Tc_184961, async function (data) {

        describe("EOM High Value Load Create ", () => {
            customerCode = data.origin;
            it("Should open EOM Search page url ", async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            });

            it("Should enter the Bill of Code Text ", async () => {
                await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
            });

            it("Should enter the origin Text ", async () => {
                await enterpriseOrderManagementPage.setOrigin(data.origin);
            });

            it("Should click search skeleton button ", async () => {
                await enterpriseOrderManagementPage.clickSearchSkeletons();
            });

            it("Should Click the Book load order that contains division as HJBT JBVAN and TRAIN asw mode", async () => {
                await skeletonListingPage.clickOnBookLoadWithDivisionHjbtJbvanAndTrainMode();
            });

            it("should Click Next button", async () => {
                await skeletonListingPage.clickOnSkeletonNextButton();
            });;

            it("Should Click IM ", async () => {
                await fleetDecisionPage.pickTruckOrIMBasedOnMode(data.mode);
            })

            it("should Click Load details extension tab", async () => {
                await orderDetailsViewPage.loadDetailsClick();
            });

            it("Should select H in monitor dropdown ", async () => {
                await orderDetailsViewPage.monitorsValueSelection(data.monitorValue);
            });

            it("Should click Bill to GEEC extension tab ", async () => {
                await orderDetailsViewPage.billToClick();
            });

            it("should click On Classification Lens Icon ", async () => {
                await orderDetailsViewPage.clickOnClassificationLensIcon();
            });

            it("Should click On High Value ", async () => {
                await orderDetailsViewPage.clickOnHighValueCheckbox();
            });

            it("Should click On Close window button ", async () => {
                await orderDetailsViewPage.clickOncloseWindowButton();
            })

            it("Should set Start time and End Time for Stop 1 ", async () => {
                await orderDetailsViewPage.scheduledAppointmentTimeSet(data.startTime, data.endTime);
            });

            it("Should clear appoinment date Time for Stop 99 ", async () => {
                await orderDetailsViewPage.clearScheduleAppointmentDateTimeForStop99();
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

            it("Verify comment is added", async () => {
                await expect(orderDetailsViewPage.verifyTestComment()).toBe(data.commentsText);
            });

            it("Should click on create load button ", async () => {
                await orderDetailsViewPage.clickOnCreateLoadButton();
            });

            it("Should note the Load Number ", async () => {
                loadNumber = await orderDetailsViewPage.loadNumberCreateLoad();
                console.log(loadNumber);
            });

            it("Should note the Destination details ", async () => {
                originRamp = await detailsPage.getOriginRamp();
                console.log("Origin Ramp", originRamp);
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
                unitNumber = await unitViewPage.getAvailableTractor(data.dSPSTT, data.oBCError);
            });

            it("Verify the other columns data from Serach results", async () => {
                await expect<any>(unitViewPage.validateBarCodeSearchResults(unitNumber)).toBeTruthy();
            });

        });

    });

    using(DataProvider.Tc_185245, async function (data) {

        describe("FM2 High Value Preplan", function () {

            it("Should Launch Freight Manager Application And Login If Required", async () => {
                await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.freightManager2);
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

            it("Should Enter Earlier Noted Driver Number in the White Text Box Underneath Tractor", async () => {
                await orderSegmentPage.enterTractorNumber(unitNumber);
            });

            it("Should Click On All The Check Boxes.", async () => {                
                await orderSegmentPage.clickAllCheckbox();                
            });

            it("Should Enter Origin Ramp (For This Example My Origin Ramp Is D?) In The White Text Box Underneath TCall Location", async () => {
                await orderSegmentPage.EnterTcall(originRamp, " Origin Ramp value");
            });

            it("Should Click ON Create Preplan Button. If Required, Click On Continue Button", async () => {
                await orderSegmentPage.clickOnCreatePreplanButton();
            });

        });

    });

    using(DataProvider.Tc_180988, async function (data) {

        describe("FM2 High Value Dispatch", function () {

            it("open browser and enter url' ", async () => {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
            });

            it("Hover over the Equipment tab, click Customer Pool to select.", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.tabOption);
            });

            it("Click the dropdown tab next to Division, click to select HJBT JBVAN", async () => {
                await customerPoolPage.selectDivision(data.division);
            });

            it("In the white text box next to Cust Code, enter LGFO18.", async () => {
                await customerPoolPage.enterCustCode(data.Cust_code);
            });

            it("Click on Search button", async () => {
                await customerPoolPage.clickOnSearchButton();
            });

            it("Find a piece of equipment that is has JBHU underneath the Prefix column, and EMPTY underneath LT St. and has equipment attached to it. Take note of the equipment number.", async () => {
                equipmentNumber = await customerPoolPage.getEquipmentNumberFromCustomerPoolTable(data.headerprefix, data.prefixcolvalue, data.headerLT_St, data.LT_StColvalue, data.Equipmen);
            });

            it(" Hover over the Planning tab, click to select Order Segment. ", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.planingTab, data.Orderseg);
            });

            it(" In the text box underneath Order#, enter your order number", async () => {
                await orderSegmentPage.enterOrderId(loadNumber);
            });

            it(" click the Search button. ", async () => {
                await orderSegmentPage.clickOnSearchButton();
            });

            it("  Click the driver number hyperlink underneath Power Driver. ", async () => {
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

            it("In the white text box next to Trlr/Cntr, enter JBHU. Next to JBHU enter the equipment number. In the white text box next to Customer, enter LGFO18, press the TAB key on your keyboard to auto fill Location. ", async () => {               
                await customerPoolPage.enterDetailsInCommentPopup(data.tcode, equipmentNumber);
            });

            it(" Click the Update button", async () => {
                await checkCallDetailsPage.clickOnUpdateOnPopup();
            });

            it("Hover status Option from header", async () => {
                await freightManager2Page.hoverOverFM2PageHeaderOption(data.headerOptionStatus);
            });

            it("Click on Dispatch option", async () => {
                await freightManager2Page.clickHeaderDropDownOption(data.headerDropDownOptionDispatch);
            });

            it("Wait till Dispatch window opens", async () => {
                await checkCallDetailsPage.waitTillDispatchWindowLoad();
            });

            it(" Click the Update button, twice if necessary.", async () => {
                await checkCallDetailsPage.clickOnUpdateOnPopup();
            });

        })
    });

    using(DataProvider.Tc_185292, async function (data) {

        describe("Safety Briefing High Value and Verification ", () => {

            it("Should open Safety Briefing url ", async () => {
                await safetyHomePage.navigateToAppHome(safetyHomePage.safetyBriefingUrl);
                await hazmatVerificationPage.waitForLoadingMask();
            });

            it("Should over the Safety Briefing tab, and click Create New Briefing ", async () => {
                await safetyHomePage.mouseOverTab(data.tabName);
                await safetyHomePage.clickDropDownValue(data.dropDownOptions);
            });

            it("Should enter order number ", async () => {
                await safetyHomePage.enterOrderNumber(loadNumber);
            });

            it("Should select briefing type, click to select High value, click OK button ", async () => {
                await safetyHomePage.selectBriefingType(data.briefingType);
                await safetyHomePage.clickOKButton();
            });

            // they forget to add these 2 steps on the VSTS
            it("Should enter Trailer Prefix ", async () => {
                await highValueBriefingPage.enterTrailerPrefix(data.trailerPrefix);
                await highValueBriefingPage.enterTrailer(data.trailer)
            });

            it("Should click the next button", async () => {
                await highValueBriefingPage.clickNextButton();
            });

            it("Should click the checkbox, this is a test and click Save button ", async () => {
                await highValueBriefingPage.clickTestCheckBox();
                await highValueBriefingPage.clickSaveButton();
            });

            it("Should click OK button", async () => {
                await highValueBriefingPage.clickOKButton();
            });

            it("Should be able to see your load number in the list", async () => {
                let ordernumbertable = await highValueBriefingPage.getOrderNumber();
                await expect(ordernumbertable).toBe(data.orderNumber);
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
                await orderSegmentPage.enterOrderNumber(loadNumber, 'Order #');
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
