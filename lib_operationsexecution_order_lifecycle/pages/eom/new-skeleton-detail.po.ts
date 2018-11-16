import { browser, ElementFinder, element, by, ProtractorBrowser, ElementArrayFinder } from "protractor";
import { BasePage } from "../base.po";
import { protractor } from "protractor";


export class NewSkeletonDetailPage extends BasePage {

    readonly text_INITS: ElementFinder = element(by.xpath("//input[@id='eomSkeletonDetail:userInits']"));
    readonly text_BillTo: ElementFinder = element(by.xpath("//input[@id='eomSkeletonDetail:billto']"));
    readonly text_SOlicitor: ElementFinder = element(by.xpath("//input[@id='eomSkeletonDetail:solicitor']"));
    readonly text_Commodity: ElementFinder = element(by.xpath("//input[@class='commodityInputTextFmt']"));
    readonly text_ShipperCode: ElementFinder = element(by.xpath("//input[@id='eomSkeletonDetail:stopsList:0:Code']"));
    readonly text_ReceiverCode: ElementFinder = element(by.xpath("//input[@id='eomSkeletonDetail:stopsList:1:Code']"));
    readonly text_Location: ElementFinder = element(by.xpath("//input[@id='frmOrderCommentsListing:dtNewCommentTable:0:itxtCommentLocation']"));
    readonly text_Comment: ElementFinder = element(by.xpath("//textarea[@id='frmOrderCommentsListing:dtNewCommentTable:0:itaCommentText']"));

    public async setNewSkeletonDetailsSection1(val_INITS: string, val_Fleet: string, val_TransitLevel: string, val_RateLevel: string) {
        await this.actions.setText(this.text_INITS, val_INITS, val_INITS);
        await this.actions.shortWait("waiting");
        if (val_Fleet !== "") {
            await this.actions.selectByValue("(//select[@id='eomSkeletonDetail:fleetList']/option)", val_Fleet, "");
        }
        await this.actions.shortWait("waiting");
        await this.actions.selectByValue("(//select[@id='eomSkeletonDetail:transitMode']/option)", val_TransitLevel, val_TransitLevel);
        await this.actions.shortWait("waiting");
        await this.actions.selectByValue("(//select[@id='eomSkeletonDetail:serviceLevel']/option)", val_RateLevel, val_RateLevel);
        await this.actions.shortWait("waiting");
    }

    public async setNewSkeletonDetailsSection2(val_BillTo: string, val_SolicitorCode: string) {
        await this.actions.setText(this.text_BillTo, val_BillTo, val_BillTo);
        await this.actions.shortWait("waiting")
        await this.text_BillTo.sendKeys(protractor.Key.TAB);
        await this.actions.shortWait("waiting")
        await this.actions.setText(this.text_SOlicitor, val_SolicitorCode, val_SolicitorCode);
        await this.actions.shortWait("waiting")
        await this.text_SOlicitor.sendKeys(protractor.Key.TAB);
        await this.actions.shortWait("waiting")
        await this.selectPhoneNumberNewSkeleton(2);
        await this.actions.shortWait("waiting")
    }

    public async setNewSkeletonDetailsSection3(val_Commodity: string, val_LoadedUnloadedBy_Shipper: string, val_LoadedOn: string, val_LoadedUnloadedBy_Receiver: string, val_ShipperCode: string, val_ReceiverCode: string) {
        await this.actions.setText(this.text_Commodity, val_Commodity, val_Commodity);
        await this.actions.mediumWait("waiting")
        await this.actions.selectByValue("(//select[@id='eomSkeletonDetail:stopsList:0:loadedBy']/option)", val_LoadedUnloadedBy_Shipper, val_LoadedUnloadedBy_Shipper);
        await this.actions.mediumWait("waiting")
        await this.actions.selectByValue("(//select[@id='eomSkeletonDetail:stopsList:0:loadedOn']/option)", val_LoadedOn, val_LoadedOn);
        await this.actions.mediumWait("waiting")
        await this.actions.selectByValue("(//select[@id='eomSkeletonDetail:stopsList:1:loadedBy']/option)", val_LoadedUnloadedBy_Receiver, val_LoadedUnloadedBy_Receiver);
        await this.actions.mediumWait("waiting")
        try {
            await this.actions.mediumWait("waiting")
            await this.actions.clearText(this.text_ShipperCode, "ShipperCode");
            await this.actions.setText(this.text_ShipperCode, val_ShipperCode, val_ShipperCode);
            await this.actions.mediumWait("waiting")
            await browser.executeScript("document.getElementById('eomSkeletonDetail:stopsList:1:Code').setAttribute('value', 'LGFO18')");
            await this.actions.mediumWait("waiting")
        } catch (error) {
            console.log("error in " + error);
        }

    }

    public async selectPhoneNumberNewSkeleton(index: number) {
        await this.actions.click(element(by.xpath("//select[@name='eomSkeletonDetail:solicitorPhones']")), "load phone");
        let check_element: ElementFinder = element(by.xpath("//select[@name='eomSkeletonDetail:solicitorPhones']/option[contains(text(),'PHONE LIST')]"));
        let check_elements: ElementArrayFinder = element.all(by.xpath("//select[@name='eomSkeletonDetail:solicitorPhones']/option"));
        await this.actions.waitUntilElementVisible(check_element, "phone list");
        await this.actions.selectByIndex(check_elements, index, "phone")
    }

    public async setDetailsInSkeletonCommentScreen(val_Type: string, val_Location: string, val_Comment: string) {
        await this.actions.waitUntilElementVisible(this.text_Location,"");
        await this.actions.selectByValue("(//select[@id='frmOrderCommentsListing:dtNewCommentTable:0:somCommType']/option)", val_Type, val_Type);
        await this.actions.mediumWait("waiting")
        await this.actions.click(this.text_Location, "location");
        await this.actions.setText(this.text_Location, val_Location, val_Location);
        await this.actions.mediumWait("waiting")
        await this.text_Location.sendKeys(protractor.Key.TAB);
        await this.actions.mediumWait("waiting")
        await this.actions.setText(this.text_Comment, val_Comment, val_Comment);
        await this.actions.mediumWait("waiting")
    }

    public async VerifySkeletonInSkeletonList(val_Bill: string, val_Division: string) {
        let check_element: ElementFinder = element(by.xpath("//tbody[@id='frmSkeletonListing:lSkeletonListingTableBody']//tr//td[4]/span[contains(text(),'" + val_Division + "')]/../following-sibling :: td/span[contains(text(),'" + val_Bill + "')]"));
        if (await check_element.isPresent()) {
            await check_element.click();
        }
    }

    public async openSkeletonDetails(val_Bill: string, val_Division: string) {
        let check_element: ElementFinder = element(by.xpath("(//tbody[@id='frmSkeletonListing:lSkeletonListingTableBody']//tr//td[4]/span[contains(text(),'" + val_Division + "')]/../following-sibling :: td/span[contains(text(),'" + val_Bill + "')]/../preceding-sibling :: td)[2]/a[3]"));
        if (await check_element.isPresent()) {
            await check_element.click();
            await this.actions.waitUntilElementVisible(element(by.xpath("//div[@id='eomSkeletonDetail:skeletonDetailMain']")), "skeleton details");
        } else {
            console.log("update button not found");
        }
    }

    public async verifySkeletonExistance(val_division: string, val_NewSkeletonDetails: any) {
        let check_element: ElementFinder = element(by.xpath("//table[@class='warnSearchMsg']//td[contains(text(),'No Skeleton found')]"));
        await this.actions.shortWait("waiting");
        if (await check_element.isPresent()) {
            let result: boolean = await this.createNewSkeleton(val_NewSkeletonDetails);
            await expect(result).toBeTruthy();
        } else {
            await this.VerifySkeletonInSkeletonList(val_NewSkeletonDetails.receiverCode, val_division);
            await this.openSkeletonDetails(val_NewSkeletonDetails.receiverCode, val_division);
            await this.actions.longWait("waiting");
        }
    }

    public async createNewSkeleton(newSkeletonDetails: any) {
        // await this.clickOnEOMButton("eomSearchMain:cbtnNewSkl");
        await this.waitTillProcessing("Navigating to Skeleton Details");
        await this.setNewSkeletonDetailsSection1(newSkeletonDetails.inits, newSkeletonDetails.fleet, newSkeletonDetails.transitMode, newSkeletonDetails.rateLevel);
        await this.setNewSkeletonDetailsSection2(newSkeletonDetails.billTo, newSkeletonDetails.solicitorCode);
        await this.setNewSkeletonDetailsSection3(newSkeletonDetails.commodity, newSkeletonDetails.loadedUnloadedBy, newSkeletonDetails.loadedOn, newSkeletonDetails.loadedUnloadedBy, newSkeletonDetails.shipperCode, newSkeletonDetails.receiverCode);
        // await this.clickOnEOMButton("eomSkeletonDetail:saveSkeleton");
        let check_Element: ElementFinder = element(by.xpath("//label[contains(text(),'Skeleton ID#')]"));
        try {
            if (await check_Element.isDisplayed()) {
                // let message: string = await this.verifySuccessMessageOnPage("Skeleton ID#");
                // await expect(message).toContain("Skeleton ID#");
                return true;
            }
        } catch{
            return false;
        }
    }
   
    public async clickOnEOMTabs(type_Tab: string) {
        let tab_Value: ElementFinder = element(by.xpath("//a[@id='" + type_Tab + "']"));
        await this.actions.waitUntilElementVisible(tab_Value,"");
        await tab_Value.click();
        await this.actions.longWait('waiting..');
    }
    
    public async verifySuccessMessageOnSave(val_message: string) {
        let check_success: ElementFinder = element(by.xpath("//td[contains(text(),'" + val_message + "')]"));
        if (await check_success.isPresent()) {
            return true;
        }
        return false;
    }

}