import { EnterpriseDashBoardHomePage } from "../../pages/enterprise_dashboard/enterprise-dashboard-homepage.po";
import { AppointmentsPage } from "../../pages/enterprise_dashboard/appointments-tab-po";
import { NewViewPage } from "../../pages/enterprise_dashboard/new-view-tab-po";
import { MonitorPage } from "../../pages/enterprise_dashboard/monitor-tab-po";
import { CommonFunctions } from "../../utilities/common-functions";

let enterpriseDashBoardHomePage = new EnterpriseDashBoardHomePage();
let appointmentsPage = new AppointmentsPage();
let newViewPage = new NewViewPage();
let monitorPage = new MonitorPage();
let commonFunctions=new CommonFunctions();

export class ENTE2EComponents {

    async preplanVerification(loadData, data) {

        describe("ENT Load Create Verification", () => {
            let viewName: string;
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
                viewName = data.viewname + await commonFunctions.randomNumberGenarator(3);
                await newViewPage.fillViewNameTextBox(viewName);
            });

            it("Should Enter The Order's Initials Under User Input (Initials Will Be Found Under The Load Details Tab Of EOM's Order Screen)", async () => {
                await newViewPage.fillUserInputTextBox(loadData.initials);
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
                await expect<any>(appointmentsPage.verifyingPresenceOfLoadUnderOrder(data.orderNumber)).toBe(data.orderNumber);
            });

        });

    }

}