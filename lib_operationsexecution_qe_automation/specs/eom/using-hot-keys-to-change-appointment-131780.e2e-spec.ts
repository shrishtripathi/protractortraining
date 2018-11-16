import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { DataProvider } from "../../data/dataProvider";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { browser, protractor, ActionSequence } from "protractor";
import { DetailsPage } from "../../pages/eom/details.po";
import { CommentsPage } from "../../pages/eom/comments.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let detailsPage = new DetailsPage();
let commentsPage = new CommentsPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let using = require('jasmine-data-provider');

//TC #131780: EOM_Regression_33 Using Hot Keys to Change Appointment
using(DataProvider.Tc_131787, async function (data) {

    describe("Using Hot Keys to Change Appointment", () => {
        let loadNumber1: string;
        let loadNumber2: string;

        //TC #85215:EOM_Regression_17 Searching for skeletons

        it("Should open My JBHunt url", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("Should enter 'LGFO18' in 'ORIGIN'' field", async () => {
            await enterpriseOrderManagementPage.setOrigin(data.origin);
        });

        it("Should click ''SEARCH SKELETON'' BUTTON", async () => {
            await enterpriseOrderManagementPage.clickOnEOMButton(data.searchSkeltonButton);
        });

        //TC #80537: EOM_Regression_15 Using Hot Keys to navigate and select skeletons
        it("Should click on 'HJBT JBVAN' division", async () => {
            await enterpriseOrderManagementPage.skeletonListingTable();
        });

        it("Verifying that skeltons pick screen will be displayed", async () => {
            await expect<any>(skeletonListingPage.getSkeltonPickScreenTitle()).toBe(data.skeltonPickUpDateScreen);
        });

        it("Should type 2 to number of copies", async () => {
            await skeletonListingPage.setNumberOfCopies(data.numberOfCopies);
        });

        it("Should press tab key", async () => {
            await browser.actions().sendKeys(protractor.Key.TAB).perform();
        });

        it("Should Select exact", async () => {
            await skeletonListingPage.setDropDownBesideNumberOfCopies(data.dropdownOption);
        });

        it("Should press ALT 5 key", async () => {
            new ActionSequence(browser.driver).keyDown(protractor.Key.ALT).sendKeys("5").keyUp(protractor.Key.ALT).perform();
        });

        it("Verifying fleet decision page", async () => {
            await expect<any>(detailsPage.setReasonCode(data.reasonCodeValue)).toBe(data.fleetdecisionTitle);
        });

        it("Should click on TRUCK", async () => {
            await detailsPage.clickOnModeTypeUnderCurrentDate();
        });

        //TC #131775: EOM_Regression_29 Using Hot Keys to Comment 
        it("Should press ALT 9 key", async () => {
            new ActionSequence(browser.driver).keyDown(protractor.Key.ALT).sendKeys("9").keyUp(protractor.Key.ALT).perform();
        });

        it("Verifying comments tab", async () => {
            await expect<any>(commentsPage.verifyCommentsTab()).toContain(data.commentsText);
        });

        it("Click the dropdown tab underneath Type, click GENERAL.", async () => {
            await commentsPage.commentsTypeValueSelection(data.commentType);
        });

        it("Under LOCATION type LOWAR", async () => {
            await commentsPage.setLocation(data.location);
        });

        it("Should hit tab", async () => {
            await browser.actions().sendKeys(protractor.Key.TAB).perform();
        });

        it("In the COMMENT box type, 'Hello From Other Side' ", async () => {
            await commentsPage.setComments(data.comment1);
        });

        //TC #131804: Using Hot Keys for Reference Numbers
        it("Should press ALT 8 key", async () => {
            new ActionSequence(browser.driver).keyDown(protractor.Key.ALT).sendKeys("8").keyUp(protractor.Key.ALT).perform();
        });

        it("Verifying reference tab", async () => {
            await expect<any>(orderDetailsViewPage.verifyReferenceTab()).toContain(data.referenceText);
        });

        it("Select select any  code from the STOP CODE drop down box", async () => {
            await orderDetailsViewPage.selectAnyValueFromStopCodeDropDown(data.stopCodeOne);
        });

        it("Should select SHIPID from TYPE  dropdown ", async () => {
            await orderDetailsViewPage.typeValueSelection(data.shippingID);
        });

        it(" Should set New referenc Fields", async () => {
            await orderDetailsViewPage.setNewreferencFields(data.referenceNumber, data.quantity, data.weight, data.volume);
        });

        it("Should press ALT 6 key", async () => {
            new ActionSequence(browser.driver).keyDown(protractor.Key.ALT).sendKeys("6").keyUp(protractor.Key.ALT).perform();
        });

        //TC #131779 : EOM_Regression_31 Using Hot Keys to Search Loads
        it("Should Set shipper scheduled appointment time to 19:00-23:00", async () => {
            await orderDetailsViewPage.scheduledAppointmentTimeSet(data.scheduledAppointmentBeginTime, data.scheduledAppointmentEndTime);
        });

        it("Should check receiver scheduled appointment date fields are empty", async () => {
            await orderDetailsViewPage.receiverScheduledAppointmentEmptyCheck();
        });

        it("Should press ALT 3 key", async () => {
            new ActionSequence(browser.driver).keyDown(protractor.Key.ALT).sendKeys("3").keyUp(protractor.Key.ALT).perform();
            await orderDetailsViewPage.acceptingAlert();
        });

        it("Should make a note of first load number", async () => {
            await orderDetailsViewPage.switchToFrameLoadNumber();
            loadNumber1 = await orderDetailsViewPage.copyingLoadNumbers("1");
            console.log("loadNumber1", loadNumber1)
        });

        it("Should make a note of second load number", async () => {
            loadNumber2 = await orderDetailsViewPage.copyingLoadNumbers("2");
            console.log("loadNumber2", loadNumber2)
        });

        it("Should click on close button", async () => {
            await orderDetailsViewPage.switchToDefalutContent();
            await orderDetailsViewPage.clickOnClose();
        });

        it("Should click on search tab", async () => {
            await orderDetailsViewPage.clickOnSearchTab();
        });

        it("Should enter load number ", async () => {
            await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.search_value, loadNumber1.trim());
        });

        it("Should press ALT 6 key", async () => {
            new ActionSequence(browser.driver).keyDown(protractor.Key.ALT).sendKeys("6").keyUp(protractor.Key.ALT).perform();
        });

        //131780
        it("Should press ALT 7 key", async () => {
            new ActionSequence(browser.driver).keyDown(protractor.Key.ALT).sendKeys("7").keyUp(protractor.Key.ALT).perform();
        });

        it("Should click on hyperlink that is highlighted bluer", async () => {
            await enterpriseOrderManagementPage.clickOnStopCode();
        });

        it("Should enter Appoint Date", async () => {
            await enterpriseOrderManagementPage.setAppointmentTime(data.beginId, data.beginTime);
            await enterpriseOrderManagementPage.setAppointmentTime(data.endId, data.endTime);
        });

        it("Should select group dropdown as 'OTHER'", async () => {
            await enterpriseOrderManagementPage.selectGroup(data.groupDropDownName, data.groupDropDownOptionName);
        });

        it("Should select Reason Code dropdown as '80-WEATHER OR NATURAL DISASTER'", async () => {
            await enterpriseOrderManagementPage.selectGroup(data.reasonDropDownName, data.reasonDropDownOptionName);
        });

        it("Should enter name as 'EMMA'", async () => {
            await enterpriseOrderManagementPage.setContactName(data.contactText, data.contactName);
        });

        it("Should enter comment as 'J.B.HUNT'", async () => {
            await enterpriseOrderManagementPage.setContactName(data.commentText, data.comment);
        });

        it("Should press ALT 3 key", async () => {
            new ActionSequence(browser.driver).keyDown(protractor.Key.ALT).sendKeys("3").keyUp(protractor.Key.ALT).perform();
        });

        it("Should click on ok button", async () => {
            await enterpriseOrderManagementPage.clickOnOkButton();
        });

        it("Verifying sucess message", async () => {
            await expect<any>(enterpriseOrderManagementPage.verifySucessMessage()).toBe(data.sucessMessage);
        });

    });
    
});