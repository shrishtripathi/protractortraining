import { DataProvider } from "../../data/dataProvider";
import { EnterpriseDashBoardHomePage } from "../../pages/enterprise_dashboard/enterprise-dashboard-homepage.po";
import { AppointmentsPage } from "../../pages/enterprise_dashboard/appointments-tab-po";


let enterpriseDashBoardHomePage=new EnterpriseDashBoardHomePage();
let appointmentsPage  = new AppointmentsPage();
let using = require('jasmine-data-provider');
//TC #186749: ENT Dispatch Verification
using(DataProvider.Tc_186749, async function (data) {

    describe("ENT CC Verification", () => {

        it("Should Launch Enterprise Dashboard Application And Login If Required", async () => {
            await enterpriseDashBoardHomePage.actions.get(enterpriseDashBoardHomePage.enterpriseDashoboardUrl, "Enterprise Dashboard")
            await appointmentsPage.loading()               
        });

        it("Verifying That Enterprise Dashboard Page Is Displayed", async function () {
            await expect<any>(enterpriseDashBoardHomePage.getPageTitle()).toBe(data.enterpriseDashboardTitle);
        });

        it("Should Click Appointments From The Menu Bar On The Left Side Of The Screen", async () => {
            await enterpriseDashBoardHomePage.clickOnAppointmentsTab();          
        });

        it("Should Click On View Drop Down Box", async () => {
            await appointmentsPage.clickOnViewDropDownBox();          
        });

        it("Should Select User That Created Load From View Drop Down Box", async () => {
            await appointmentsPage.selectUserFromViewDropDownBox(data.user);          
        });

        it("Verifying That There Are Load Results Under Order", async () => {
             await expect<any>(appointmentsPage.verifyingLoadResultsUnderOrder()).toBeGreaterThan(0);
        });

        it("Verifying That It Reads Dispatched Under Order Status", async () => {
            await expect<any>(appointmentsPage.verifyingDispatchedUnderOderStatus()).toBe(data.dispatchText);          
        });

       
    });
});