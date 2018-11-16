import { PrecallHomePage } from "../../pages/precall/precall-homepage.po";
import { TemplateManagementPage } from "../../pages/precall/template_management.po";
import { DataProvider } from '../../data/dataProvider';

let precallHomePage = new PrecallHomePage();
let templateManagementPage = new TemplateManagementPage();

let using = require('jasmine-data-provider');

//TC_86419: Precall_Regression_7 Edit template
describe("Edit template Precall Regression", function () {

    let newLocation: string

    using(DataProvider.Tc_86419, async function (data) {

        it("Open Pre Plan url", async () => {
            await precallHomePage.navigateToAppHome(precallHomePage.precallUrl);
        });

        it('Click the Template Management tab. ',async () => {
            await precallHomePage.clickOnTab(data.templateManagement)
        });

        it('Click the dropdown next to LDC.',async () => {
            await templateManagementPage.click(templateManagementPage.ldcDropDown)
        });

        it('Scroll down and select L833. ',async () => {
           await templateManagementPage.clickOnDropDownOptions(data.l833) 
        });
        
        it('Click the magnifying glass next to the LDC dropdown. ',async () => {
            await templateManagementPage.click(templateManagementPage.magnifingGlassIcon)
            await templateManagementPage.waitForElementIsVisible(templateManagementPage.inactiveProgressIcon)
        });
        it('Click the pencil icon connected the TEMPLATE_EDIT_TEST template or any available template. ',async () => {
            await templateManagementPage.click(templateManagementPage.templateEditTestPencilIcon)
        });
        it('Click any location. ',async () => {           
            await templateManagementPage.click(templateManagementPage.availableLocation)
            newLocation= await templateManagementPage.getElementText(templateManagementPage.availableLocation)
        });
        it('Click the >> button on the right of the locations. ',async () => {
            await templateManagementPage.clickOnButtonOnPopupWindow(data.locations,data.incerssion)
        });
        it('Click the Save button. ',async () => {
            await templateManagementPage.click(templateManagementPage.saveButton)
        });
        it('Verify the location on the template has changed. ',async () => {
            console.log(`newLocation: `+newLocation)
            let locationText=await templateManagementPage.getTextFromLocationColumn(newLocation);
            expect(locationText).toContain(newLocation)
        });
    })
})