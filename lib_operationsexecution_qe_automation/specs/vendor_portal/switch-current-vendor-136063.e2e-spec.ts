
import { DataProvider } from "../../data/dataProvider";
import { SelectVendorPopupPage } from "../../pages/vendor_portal/select-vendor-popup.po";
import { VendorInformationPage } from "../../pages/vendor_portal/my-account.po";

let selectVendorPopupPage = new SelectVendorPopupPage();
let vendorInformationPage = new VendorInformationPage();
let using = require('jasmine-data-provider');

//#136063-VendorPortal_5_Switch Current Vendor
using(DataProvider.TC_136063, async function (data) {
    describe("Switch Current Vendor", () => {
        let vendorInformation;
        let vendorName;
        let vendorZipCode;

        it("Validate Vendor Information: Pre condition TestCase 136046", async () => {
            await selectVendorPopupPage.preTestCase_136046(data.vendorCode, data.nameTextBox, data.zipCodeTextBox)
        });

        it('Click on User Profile Icon', async () => {
            let dropDownmenuIsDisplayed = await selectVendorPopupPage.clickOnUserIcon();
            expect(dropDownmenuIsDisplayed).toBe(true);
        });

        it('Click on "Switch Current Vendor" from the options.', async () => {
            await selectVendorPopupPage.clickOnDropDownOption(data.switchCurrentVendor)
        });

        it('Click on another different Vendor ', async () => {
            let information =  (await selectVendorPopupPage.enterTextOnTextBox(1, data.vendorCode2));
            vendorInformation= await information.vendorName
            await selectVendorPopupPage.clickVendor(data.vendorCode2)
        });

        it('Validate Vendor Information Page', async () => {
            vendorName = await vendorInformationPage.validateVendorInformation(data.nameTextBox);
            vendorZipCode = await vendorInformationPage.validateVendorInformation(data.zipCodeTextBox);
            console.log(vendorInformation+" = "+ vendorName+"\n"+ vendorZipCode+" = ")
            await expect(vendorInformation).toEqual(vendorName);
            await expect(vendorZipCode).not.toEqual('');
        });

    });

});
