
import { DataProvider } from "../../data/dataProvider";
import { SelectVendorPopupPage } from "../../pages/vendor_portal/select-vendor-popup.po";
import { VendorInformationPage } from "../../pages/vendor_portal/my-account.po";

let selectVendorPopupPage = new SelectVendorPopupPage();
let vendorInformationPage = new VendorInformationPage();
let using = require('jasmine-data-provider');

//#136335-VendorPortal_9_Logging Out
using(DataProvider.TC_136335, async function (data) {
    describe("Logging Out", () => {

        using(DataProvider.TC_136046, async function (data) {
            let vendorInformation: {};
            let vendorName;
            let vendorZipCode;
            //136406
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
        it('Click on User Profile Icon', async () => {
            let dropDownmenuIsDisplayed = await selectVendorPopupPage.clickOnUserIcon();
            expect(dropDownmenuIsDisplayed).toBe(true);
        });

        it('Click on "Log Out" from the options.', async () => {
            await selectVendorPopupPage.clickOnDropDownOption(data.logOut)
        });

        it('Validate Select Vendor popUp page is displayed', async () => {
            try {
                if (await selectVendorPopupPage.dialogBoxXpath.isPresent())
                    expect(await selectVendorPopupPage.dialogBoxXpath.isPresent()).toBe(true);
            } catch (error) {
                expect(await selectVendorPopupPage.getPageTitle()).toBe(data.title);
            }

        });

    });

});
