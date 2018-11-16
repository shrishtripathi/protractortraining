
import { DataProvider } from "../../data/dataProvider";
import { SelectVendorPopupPage } from "../../pages/vendor_portal/select-vendor-popup.po";
import { VendorInformationPage } from "../../pages/vendor_portal/my-account.po";

let selectVendorPopupPage = new SelectVendorPopupPage();
let vendorInformationPage = new VendorInformationPage();
let using = require('jasmine-data-provider');

//#136078-VendorPortal_6_Display Contact Information

//Pre condition: TC 136046-VendorPortal_4_Validate Vendor Information
using(DataProvider.TC_136046, async function (data) {
    describe("Validate Vendor Information", () => {
        let vendorInformation: {};
        let vendorName;
        let vendorZipCode;

        it("Navigating to Vendor Portal: Pre condition TestCase 135695", async () => {
            await selectVendorPopupPage.preTestCase_135695();
        });

        it("Type in a Vendor code ", async () => {
            vendorInformation = (await selectVendorPopupPage.enterTextOnTextBox(data.textBoxIndex, data.vendorCode)).vendorName
        });

        it('Click On Vendor Record', async () => {
            await selectVendorPopupPage.clickOnVendorRecord(data.vendorCode)
        });

        it('Validate that the Vendor Information page ', async () => {
            vendorName = await vendorInformationPage.validateVendorInformation(data.nameTextBox);
            vendorZipCode = await vendorInformationPage.validateVendorInformation(data.zipCodeTextBox);
            expect(vendorInformation).toEqual(vendorName);
            expect(vendorZipCode).not.toEqual('');
        });
    });
})
using(DataProvider.TC_136078, async function (data) {

    describe("Display Contact Information", () => {

        it('Click on User Profile Icon', async () => {
            let dropDownmenuIsDisplayed = await selectVendorPopupPage.clickOnUserIcon();
            expect(dropDownmenuIsDisplayed).toBe(true);
        });

        it('Click on "Contact Us" from the options.', async () => {
            await selectVendorPopupPage.clickOnDropDownOption(data.contactUs)
        });

        it('Verify information detail', async () => {
            let contactDetails = await vendorInformationPage.getContactInformationFromPopUpPage()
            try {
                expect(contactDetails).toBe(data.noContact)
            } catch (error) {
                expect(contactDetails).toBe(data.contactDetails)
            }
        });

    });
})