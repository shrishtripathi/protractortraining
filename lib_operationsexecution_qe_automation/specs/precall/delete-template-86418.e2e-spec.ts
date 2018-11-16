import { DataProvider } from "../../data/dataProvider";
import { PrecallHomePage } from "../../pages/precall/precall-homepage.po";
import { TemplateManagementPage } from "../../pages/precall/template_management.po";
import { CommonFunctions } from "../../utilities/common-functions";
let precallHomePage = new PrecallHomePage();
let templateManagementPage=new TemplateManagementPage();
let commonFunctions = new CommonFunctions();
let using = require('jasmine-data-provider');
//#86418_Precall_Regression_5 Delete template
using(DataProvider.TC_86418, async function (data) {
    describe("Delete template", () => {
        let randomName;
        it("Should Open precall url", async () => {
            await precallHomePage.openPrecallUrl()
        });

        it("Verifying that redirected to precall Page", async () => {
            await expect<any>(precallHomePage.getPageTitle()).toBe(data.precallPageTitle);
        });

        it("Should click on template management tab", async () => {
            await precallHomePage.clickOnTab(data.templateManagementTab);
        });

        it("Should click on Add template button", async () => {
            await templateManagementPage.click(templateManagementPage.addTemplate);
        });

        it("Should Enter a name for your template", async () => {
             randomName=await commonFunctions.randomNameGenarator(4);
            await templateManagementPage.setText(templateManagementPage.nameInputField,randomName);
        });

        it("Should Next to Locations scroll down and select L833", async () => {
            await templateManagementPage.clickOnLocation();
        });

        it("Should click the >> button to add", async () => {
            await templateManagementPage.click(templateManagementPage.addLocation);
        });

        it("Should Click the checkbox next to Customers, to select ALL customers", async () => {
            await templateManagementPage.click(templateManagementPage.customerCheckBox);
        });

        it("Should Click the checkbox next to Markets, to select ALL markets", async () => {
            await templateManagementPage.click(templateManagementPage.marketCheckBox);
        });

        it("Should Click the Save button to create a new template", async () => {
            await templateManagementPage.click(templateManagementPage.saveButton);
            await templateManagementPage.waitForActionToComplete();;
        });

        it("Should Click the drop box next to LDC", async () => {
            await templateManagementPage.setLdcDropdown();
        });

        it("Should Click on mangnifying Glass", async () => {
            await templateManagementPage.click(templateManagementPage.mangnifyingGlass);
            await templateManagementPage.waitForActionToComplete();
        });

        it("Should Click the checkbox next to the template you just created.", async () => {
            await templateManagementPage.clickOnNameCheckBox(randomName);
        });

        it("Should Click the trash connected to your template. ", async () => {
            await templateManagementPage.deleteTemplate(randomName);
        });



    });
});
