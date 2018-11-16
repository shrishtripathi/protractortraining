import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { CompanyAdminPage } from "../../pages/cdrap/company-admin.po";

let cdrapHomePage = new CdrapHomePage();
let companyAdminPage = new CompanyAdminPage();
let using = require('jasmine-data-provider');

//TC #141386: CDRAP_Regression_17 Company admin, other employers
using(DataProvider.Tc_141386, async function (data) {

    describe("CDRAP_Regression_19 Company admin, criminal admin", () => {

         //TC #157971
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

        //TC 141386

        it("Click the Company Admin hyperlink", async () => {
            await cdrapHomePage.clickOnLink(data.companyAdminLink);
        });

        it("Click the Other Employers tab. ", async () => {
            await companyAdminPage.click(await companyAdminPage.spanText(data.otherEmployers));
        });

        it("Select 'Delivery Type' option from Type dropdown ", async () => {
            await companyAdminPage.selectOptionFromDropdown(data.companyViewid, data.dedicatedTransporttaionSolutionInc)
            
            expect(await companyAdminPage.getTextBoxValue(data.name)).not.toEqual(''),
            expect(await companyAdminPage.getTextBoxValue(data.address1)).not.toEqual(''),
            expect(await companyAdminPage.getTextBoxValue(data.city)).not.toEqual(''),
            expect(await companyAdminPage.getselectedDropdownValueText(data.state)).not.toEqual(''),
            expect(await companyAdminPage.getTextBoxValue(data.zip)).not.toEqual(''),
            expect(await companyAdminPage.getselectedDropdownValueText(data.country)).not.toEqual(''),
            expect(await companyAdminPage.getTextBoxValue(data.phone)).not.toEqual(''),
            expect(await companyAdminPage.getTextBoxValue(data.empVerContact)).not.toEqual('')
        });        
    });

});
