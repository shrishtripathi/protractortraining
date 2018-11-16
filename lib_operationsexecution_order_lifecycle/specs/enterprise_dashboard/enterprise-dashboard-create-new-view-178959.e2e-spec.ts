import { DataProvider } from "../../data/dataProvider";
import { EnterpriseDashBoardHomePage } from "../../pages/enterprise_dashboard/enterprise-dashboard-homepage.po";
import { CommonFunctions } from "../../utilities/common-functions";
import { ManageViewsPage } from "../../pages/enterprise_dashboard/manage-views.po";
let enterpriseDashBoardHomePage=new EnterpriseDashBoardHomePage();
let manageViewsPage=new ManageViewsPage();
let using = require('jasmine-data-provider');
let commonFunctions=new CommonFunctions();
//TC #178959: Enterprise Dashboard Create New View
using(DataProvider.Tc_178959, async function (data) {

    describe("Enterprise Dashboard Create New View ", () => {
        let viewName:string;

        it("Should open enterprise dashoboard page url ", async () => {
            await enterpriseDashBoardHomePage.openEnterpriseDashboardUrl();          
            //await enterpriseDashBoardHomePage.waitForLoading();
        });

        it("Verifying That Enterprise dashboard Page Is Displayed", async function () {
            await expect<any>(enterpriseDashBoardHomePage.getPageTitle()).toBe(data.enterpriseDashboardTitle);
        });

        it("Should click on manage views", async () => {
            await enterpriseDashBoardHomePage.clickOnManageViews();          
        });

        it("Should click on create new view", async () => {
            await manageViewsPage.clickOnCreateNewView();          
        });

        it("Should enter name to 'View Name' field", async () => {
            viewName=data.viewName+await commonFunctions.randomNumberGenarator(3);
            await manageViewsPage.setViewName(viewName);          
        });

        it("Should enter 'Personal' to 'Visibility' field", async () => {
            await manageViewsPage.setVisibility(data.visibility);          
        });

        it("Should enter 'Create User Id' to 'View Option' field", async () => {
            await manageViewsPage.setViewOption(data.viewOption);          
        });

        it("Should enter 'JISQJB4' to 'User id' field", async () => {
            await manageViewsPage.setUserId(data.userId);          
        });

        it("Should click on save button", async () => {
            await manageViewsPage.clickOnSaveButton();          
        });

        it("Verifying view is created", async () => {
            await expect<any>(manageViewsPage.getViewText(viewName)).toBe(viewName);          
        });
    });
});