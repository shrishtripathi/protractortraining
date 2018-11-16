
import { DataProvider } from "../../data/dataProvider";
import { SelectVendorPopupPage } from "../../pages/vendor_portal/select-vendor-popup.po";
import { VendorInformationPage } from "../../pages/vendor_portal/my-account.po";
import { AdminPage } from "../../pages/vendor_portal/admin.po";

let selectVendorPopupPage = new SelectVendorPopupPage();
let vendorInformationPage = new VendorInformationPage();
let adminPage = new AdminPage();
let using = require('jasmine-data-provider');

//#136084-VendorPortal_7_User Admin
using(DataProvider.TC_136084, async function (data) {

    describe("User Admin: Display User Information ", () => {

        it('Validate Vendor Information: Pre condition TestCase 136046', async () => {
            await selectVendorPopupPage.preTestCase_136046(data.vendorCode, data.nameTextBox, data.zipCodeTextBox)
        });

        it('Click on User Profile Icon', async () => {
            let dropDownmenuIsDisplayed = await selectVendorPopupPage.clickOnUserIcon();
            expect(dropDownmenuIsDisplayed).toBe(true);
        });

        it('Click on "Contact Us" from the options.', async () => {
            await selectVendorPopupPage.clickOnDropDownOption(data.userAdmin)
        });

        it('Enter User Id in Admin Page', async () => {
            await adminPage.actions.setText(adminPage.userIdXpath, data.userId, 'Enter UserId');
        });

        it('Click on search button', async () => {
            await adminPage.actions.click(adminPage.searchButtonXpath, 'Click on Search Button');
        });

        it('Validate details like Name, Email, Company ', async () => {
            let name = await adminPage.getTextFronInputBox("Name");
            let email = await adminPage.getTextFronInputBox("Email");
            let company = await adminPage.getTextFronInputBox("Company");
            await console.log(name, "\n", email, "\n", company)
        });

    });

});
