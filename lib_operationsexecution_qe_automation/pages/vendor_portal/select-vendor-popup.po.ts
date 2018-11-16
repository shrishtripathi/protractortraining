import { BasePage } from '../base.po';
import { ElementFinder, element, by, protractor, browser } from 'protractor';
import { VendorInformationPage } from "../../pages/vendor_portal/my-account.po";

let vendorInformationPage = new VendorInformationPage();

export class SelectVendorPopupPage extends BasePage {

    readonly userIconXpath: ElementFinder = element(by.xpath("//*[contains(@class,'header-user-icon')]"));
    readonly headerUserName1Xpath: ElementFinder = element(by.xpath("//*[contains(@class,'header-user-icon')]/following-sibling::div//div[contains(@id,'component')][1]"));
    readonly headerUserName2Xpath: ElementFinder = element(by.xpath("//*[contains(@class,'header-user-icon')]/following-sibling::div//div[contains(@id,'component')][2]"));
    readonly dialogBoxXpath: ElementFinder = element(by.xpath("//*[@role='dialog']//div[contains(@class,'title-text') and not(contains(@id,'ghost'))]"));
    readonly popUpXpath = element(by.xpath("//*[contains(@id,'vendorsearch') and @aria-hidden='false' and @aria-disabled='false']"));
    readonly loadingXpath: ElementFinder = element(by.xpath("//*[@aria-valuetext='Loading...' and not(@style='display: none;')]"));
    public async verifySelectVendorPopUpPage() {
        await this.actions.waitUntilElementPresenceOf(this.dialogBoxXpath, "wait for element");
        let tableHeaderText = await this.dialogBoxXpath.getText()
        console.log("text: " + tableHeaderText)
        return tableHeaderText
    };

    /* prerequsite test steps TC_135695 */
    public async preTestCase_135695() {
        await this.navigateToAppHome(this.vendorPortalUrl);
        await this.actions.waitBrowserTitleEqualsTo("Vendor Portal");
        let vendorPortalPopUp = await this.verifySelectVendorPopUpPage();

        for (let index = 0; await vendorPortalPopUp == "An error has occurred" && index <= 10; index++) {
            await this.openUrl(this.vendorPortalUrl);
            await this.actions.waitBrowserTitleEqualsTo("Vendor Portal");
            vendorPortalPopUp = await this.verifySelectVendorPopUpPage();
        }
    };

    public async enterTextOnTextBox(textBoxIndex: number, text: string) {

        let textBoxXpath: ElementFinder = element(by.xpath("(//*[contains(@id,'vendorsearch') and @aria-hidden='false' and @aria-disabled='false']//input)[" + textBoxIndex + "]"));
        let vendorCodeXpath: ElementFinder = element(by.xpath("//tr/td[contains(.,'" + text + "')]/ancestor::tr/td[1]"));
        let vendorNameXpath: ElementFinder = element(by.xpath("//tr/td[contains(.,'" + text + "')]/ancestor::tr/td[2]"));


        let vendorCode: string;
        let vendorName: string;
        await this.actions.waitUntilElementPresenceOf(this.popUpXpath);
        await this.actions.waitUntilElementPresenceOf(textBoxXpath);

        await this.clearText(textBoxXpath);
        await textBoxXpath.sendKeys(text, protractor.Key.chord(await protractor.Key.ENTER));

        try {
            if (await this.loadingXpath.isPresent()) {
                await this.actions.waitUntilElementInVisible(this.loadingXpath, "");
            }
        } catch (error) {
            console.log(error)
        }

        await this.actions.waitUntilElementVisible(vendorCodeXpath, "")
        vendorCode = await this.getElementText(vendorCodeXpath);
        vendorName = await this.getElementText(vendorNameXpath)
        console.log(vendorCode, '1aw\n', vendorName)
        return { vendorCode, vendorName };
    };

    public async verifyFillterCodeResult(text: string) {
        let rowXpath: ElementFinder = element(by.xpath("//tr[contains(@class,'grid-row')]/td[.//text()='" + text + "']"));
        await this.actions.waitUntilElementPresenceOf(rowXpath)
        let code = await rowXpath.getText();
        console.log("code: " + code)
        return { code, rowXpath }
    };

    public async clickVendor(text) {
        let rowXpath: ElementFinder = element(by.xpath("//tr[contains(@class,'grid-row')]/td[.//text()='" + text + "']"));
        await this.actions.waitUntilElementVisible(rowXpath, "")
        console.log("test: " + await rowXpath.isPresent())
        let elementText = await this.getElementText(rowXpath)
        await rowXpath.click();
        return elementText;
    }

    public async clickOnVendorRecord(vendorCode: string) {

        let vendorRowXpath = await (await this.verifyFillterCodeResult(vendorCode)).rowXpath;
        let xpath = element(by.xpath("//tr[contains(@class,'grid-row')]/td[.//text()='" + vendorCode + "']"));
        await this.actions.click(await xpath, "")
        if (await this.loadingXpath.isPresent()) {
            await this.actions.waitUntilElementPresenceOf(this.loadingXpath)
        } else {
            console.log('test');

        }
    };

    /* prerequsite test steps TC_136046 */
    public async preTestCase_136046(vendorCode: string, nameTextBoxLabel: string, zipCodeTextBoxLabel: string) {
        let vendorInformation: {};
        await this.preTestCase_135695();
        let vendor = await this.enterTextOnTextBox(1, vendorCode)
        vendorInformation = vendor.vendorName
        await this.clickVendor(vendorCode)
        let vendorName = await vendorInformationPage.validateVendorInformation(nameTextBoxLabel);
        let vendorZipCode = await vendorInformationPage.validateVendorInformation(zipCodeTextBoxLabel);
        console.log("pre1 " + vendorName + vendorZipCode)
    };

    public async clickOnUserIcon() {
        await this.actions.click(this.userIconXpath, "Click On UserIcon")
        let dropDownMenuXpath: ElementFinder = await element(by.xpath("//div[contains(@id,'usermenu') and @aria-expanded='true']"));
        return (await dropDownMenuXpath.isPresent())
    };

    public async clickOnDropDownOption(OptionText: string) {
        let dropDownOptionXpath: ElementFinder = await element(by.xpath("//div[contains(@id,'usermenu') and @aria-expanded='true']//a[.//text()='" + OptionText + "']"));
        await this.actions.click(dropDownOptionXpath, "click on element")
    };


}