import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { SchedulerWorkQueue } from "../../pages/cdrap/scheduler-work-queue.po";

let cdrapHomePage = new CdrapHomePage();
let schedulerWorkQueue = new SchedulerWorkQueue();

let using = require('jasmine-data-provider');

//TC #139854: CDRAP_Regression_10 Scheduling work queue
describe("Scheduling work queue", () => {
    using(DataProvider.Tc_157971, async function (data) {
        it("Should open CDRAP url", async () => {
            await cdrapHomePage.openUrl(cdrapHomePage.cdrapUrl);
        });

        it("Verifying that CDRAP page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toBe(data.loginTitle);
        });

        it("Login into CDRAP application ", async () => {
            await cdrapHomePage.loginIntoCdrap(data.username, data.password, data.submit);
        });

        it("Verifying that CDRAP Logged in Home page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toContain(data.cdrapHomeTitle);
        });

    });

    using(DataProvider.Tc_139854, async function (data) {
        it("Click on Scheduling Work Queue hyperlink", async () => {
            await cdrapHomePage.clickOnLink(data.schedulingWorkQuesueLink);
        });

        it("Select application specialist", async () => {
            await schedulerWorkQueue.selectAnyApplicationSpecialist();
        });

        it("Select Queue value -Confirm", async () => {
            await schedulerWorkQueue.selectQueueValue(data.confirmValue);
        });

        it("Verify result displayed for queue value - Confirm", async () => {
            let result: boolean = await schedulerWorkQueue.verifyWorkListDisplayedForSelectedQueueValue();
            expect(result).toBeTruthy();
        });

        it("Select Queue value -No Show", async () => {
            await schedulerWorkQueue.selectQueueValue(data.noShowValue);
        });

        it("Verify result displayed for queue value - No Show", async () => {
            let result: boolean = await schedulerWorkQueue.verifyWorkListDisplayedForSelectedQueueValue();
            expect(result).toBeTruthy();
        });

        it("Select Queue value -Requiring Contract", async () => {
            await schedulerWorkQueue.selectQueueValue(data.requiringContractValue);
        });

        it("Verify result displayed for queue value - Requiring Contract", async () => {
            let result: boolean = await schedulerWorkQueue.verifyWorkListDisplayedForSelectedQueueValue();
            expect(result).toBeTruthy();
        });

        it("Select Queue value -V-Release Required", async () => {
            await schedulerWorkQueue.selectQueueValue(data.vReleaseRequiredValue);
        });

        it("Verify result displayed for queue value - V-Release Required", async () => {
            let result: boolean = await schedulerWorkQueue.verifyWorkListDisplayedForSelectedQueueValue();
            expect(result).toBeTruthy();
        });

        it("Click on any named hyperlink", async () => {
            await schedulerWorkQueue.clickOnAnyElement(schedulerWorkQueue.workQueueNameLink);
        });

        it("Verify call back confrimation page", async () => {
            let result: boolean = await schedulerWorkQueue.actions.isElementDisplayed(schedulerWorkQueue.callBackCOnfirmation, "call back Confirmation page");
            expect(result).toBeTruthy();
        });

    });
});