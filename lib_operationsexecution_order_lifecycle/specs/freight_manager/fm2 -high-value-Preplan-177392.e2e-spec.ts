import { BasePage } from '../../pages/base.po';
import { DataProvider } from '../../data/dataProvider';
import { browser } from 'protractor';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { FleetDecisionPage } from '../../pages/eom/fleet-decision.po';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';
import { UnitViewPage } from '../../pages/freight_manager/unit-view.po';
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { OrderSegmentPage } from '../../pages/freight_manager/order-segment.po';
import { DetailsPage } from '../../pages/eom/details.po';
import { CommentsPage } from '../../pages/eom/comments.po';
let basePage = new BasePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let using = require('jasmine-data-provider');
let fleetDecisionPage = new FleetDecisionPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let unitViewPage = new UnitViewPage();
let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let orderSegmentPage = new OrderSegmentPage();
let detailsPage = new DetailsPage();
let commentsPage = new CommentsPage();
let loadDetailsPage = new DetailsPage();

using(DataProvider.Tc_184961, async function (data) {
    let loadNumber: string;
    let unitNumber: string;
    let originRamp: string;

    describe("FM2 hign value preplan ", () => {
        it("Should open EOM Search page url ", async () => {
            await basePage.navigateToAppHome(basePage.eomUrl);
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
        });

        it("Should Click IM ", async () => {
            await fleetDecisionPage.pickTruckOrIMBasedOnMode(data.mode);
        });

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
        });

        it("Should set Start time and End Time for Stop 1 ", async () => {
            await orderDetailsViewPage.scheduledAppointmentTimeSet(data.startTime, data.endTime);
        });

        it("Should clear appoinment date Time for Stop 99 ", async () => {
            await orderDetailsViewPage.clearScheduleAppointmentDateTimeForStop99();
        });

        it("Click on the COMMENTS tab  ", async () => {
            await orderDetailsViewPage.commentsTabClick();
        });

        it("Click the dropdown tab underneath Type, click GENERAL.", async () => {
            await commentsPage.commentsTypeValueSelection(data.commentType);
        });

        it("In the COMMENT box type, 'THIS IS A TEST ORDER ONLY. DO NOT PROCESS!' and Click on 'SAVE COMMENTS' IF SAVE COMMENTS BUTTON IS AVAILABLE,", async () => {
            await commentsPage.setComments(data.comment);
            await commentsPage.clickonSaveCommentsIfSaveButtonExists();

        });

        it("Click on the details tab", async () => {
            await orderDetailsViewPage.detailsTabClick();
        });

        it("Should click on create load button ", async () => {
            await orderDetailsViewPage.clickOnCreateLoadButton();
        });

        it("Should note the Load Number ", async () => {
            loadNumber = await orderDetailsViewPage.loadNumberCreateLoad();
        });

        it("Should take note of the destination details at bottom of the page", async () => {
            await detailsPage.getDestinationDetails();
            originRamp = await loadDetailsPage.getOriginRamp();
        });


        using(DataProvider.Tc_187034, async function (data) {

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

            using(DataProvider.Tc_185245, async function (data) {

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
                    await basePage.waitForPageLoad();
                    await basePage.waitForActionToComplete();
                });
                it("Should Click The Radial Button Next To Tractor", async () => {
                    await orderSegmentPage.selectRadioPreplanType(data.radialValue);
                });
                it("Should Enter Earlier Noted Driver Number  in the White Text Box Underneath Tractor", async () => {
                    await orderSegmentPage.enterTractorNumber(unitNumber);
                });
                it("Should Click On All The Check Boxes.", async () => {
                    await orderSegmentPage.selectAllCheckBox();
                });
                it("Should Enter Origin Ramp (For This Example My Origin Ramp Is D?) In The White Text Box Underneath TCall Location", async () => {
                    await orderSegmentPage.EnterTcall(originRamp, " Origin Ramp value");
                });
                it("Should Click ON Create Preplan Button. If Required, Click On Continue Button", async () => {
                    await orderSegmentPage.clickOnCreatePreplanButton();
                });

            });
        });

    });

});