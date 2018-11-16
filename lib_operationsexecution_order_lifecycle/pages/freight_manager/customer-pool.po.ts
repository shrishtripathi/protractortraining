import { browser, by, element, ElementFinder, protractor  } from 'protractor';
import { CommonFunctions } from "../../utilities/common-functions";
import { BasePage } from '../base.po';

let commonFunctions = new CommonFunctions();
export class CustomerPoolPage extends BasePage {

    selectDivisionType: ElementFinder;
    custCode: ElementFinder;
    equipmentClass: ElementFinder;
    equipmentType: ElementFinder;
    readonly trlCode: ElementFinder = element(by.xpath("(//td[text()='Trlr/Cntr']/../td[2]//input[1])[1]"));
    readonly trlNumber: ElementFinder = element(by.xpath("(//td[text()='Trlr/Cntr']/../td[2]//input[1])[2]"));
    readonly customerNumber: ElementFinder = element(by.xpath("//td[text()='Customer']/..//input[1]"));
    readonly locationNumber: ElementFinder = element(by.xpath("(//td[text()='Location']/..//input[1])[1]"));
    readonly customerLocation: ElementFinder = element(by.xpath("(//td[text()='Location']/..//input[1])[2]"));
    readonly searchButton: ElementFinder = element(by.id(("form:searchButton")));

    

    public async selectDivision(val_Divison: string) {
        console.log(val_Divison);
        this.selectDivisionType = element(by.xpath("//select[@id='form:division']/option[contains(., '" + val_Divison + "')]"));
        await this.actions.waitUntilElementVisible(this.selectDivisionType,"");
        await this.actions.click(this.selectDivisionType, "Select the Division Type")
    }

    public async xpathInput(val_Field: string) {
        let xpath: string = "//input[@id='form:" + val_Field + "']";
        return xpath;
    }

    public async enterCustCode(val_cutCode: string) {
        await this.actions.clearText(element(by.xpath(await this.xpathInput("customerCode"))), "Clear cust Code");
        await this.actions.setText(element(by.xpath(await this.xpathInput("customerCode"))), val_cutCode, "Enter the cust Code");
    }

    public async enterEquipmentClass(val_EquipClass: string) {
        await this.actions.clearText(element(by.xpath(await this.xpathInput("equipmentClass"))), "Clear equipment class");
        await this.actions.setText(element(by.xpath(await this.xpathInput("equipmentClass"))), val_EquipClass, "Enter equipment class");
    }

    public async enterEquipmentType(val_EquipType: string) {
        await this.actions.clearText(element(by.xpath(await this.xpathInput("equipmentType"))), "Clear equipment type");
        await this.actions.setText(element(by.xpath(await this.xpathInput("equipmentType"))), val_EquipType, "Enter equipment type");
    }

    public async setValuesInEquipmentPoolLookup(val_Divison: string, val_CustDoce: string, val_EquipClass: string, val_EquipType: string) {
        await this.waitUntilLoading();
        await this.selectDivision(val_Divison);
        await this.enterCustCode(val_CustDoce);
        await this.enterEquipmentClass(val_EquipClass);
        await this.enterEquipmentType(val_EquipType);
    }

    public async getEquipmentNumberFromCustomerPoolTable(columnHeader1: string, columnValue1: string, columnHeader2: string, columnValue2: string, requiredColumn: string) {
        await this.actions.waitUntilElementInVisible(element(by.xpath("//div[contains(@id,'connection-working') and @style='visibility: visible;']")), "waiting");
        let column1Index = await commonFunctions.getTableIndex('equipmentPoolTable', columnHeader1);
        console.log("column1Index: " + column1Index);
        let column2Index = await commonFunctions.getTableIndex('equipmentPoolTable', columnHeader2);
        console.log("column2Index: " + column2Index);
        let column3Index = await commonFunctions.getTableIndex('equipmentPoolTable', requiredColumn);

        let xpath = "//*[@id='form:equipmentPoolTable']/tbody/tr[contains(@id,'form:equipmentPoolTable')]";
        await this.actions.waitUntilElementVisible(element(by.xpath(xpath)), "waiting");
        do {
            let rowCount = await element.all(by.xpath(xpath)).count();
            console.log("tr count " + rowCount);
            for (let i = 1; i <= rowCount; i++) {
                let ele_Prefix = element(by.xpath(`//*[@id='form:equipmentPoolTable']/tbody/tr[contains(@id,'form:equipmentPoolTable')][${i}]/td[${column1Index}]`));
                let ele_LTSt = element(by.xpath(`//*[@id='form:equipmentPoolTable']/tbody/tr[contains(@id,'form:equipmentPoolTable')][${i}]/td[${column2Index}]`));
                if ((await ele_Prefix.getText() === columnValue1) && (await ele_LTSt.getText() === columnValue2)) {
                    let ele_Equipment = element(by.xpath(`//*[@id='form:equipmentPoolTable']/tbody/tr[contains(@id,'form:equipmentPoolTable')][${i}]/td[${column3Index}]`));
                    console.log("Equipment Number: ", await ele_Equipment.getText());
                    return await ele_Equipment.getText();
                }
            }

        } while (await commonFunctions.pagination()); {

        }
    }

    public async enterDetailsInCommentPopup(val_PickUp_Trl: string, val_Equipmentnumber: string) {
        await this.waitUntilLoading();
        await this.actions.setText(this.trlCode, val_PickUp_Trl, "trl Code");
        await this.actions.setText(this.trlNumber, val_Equipmentnumber, "Equipent Number");
        let customerNumber: string = await this.fetchCustomerNumberFromLoad();
        //let locationNumber: string = await this.fetchLocationNumberFromLoad();        
        //await console.log("loc text is "+ locationNumber);
        await this.actions.setText(this.customerNumber, customerNumber, "customer Number");
        await browser.actions().sendKeys(protractor.Key.TAB).perform();

        await browser.sleep(2000);
        let loctext: string = await this.locationNumber.getAttribute('value');
        await console.log("loc text is "+ loctext);
        await this.actions.clearText(this.customerLocation,"clear text");
        await this.actions.setText(this.customerLocation, loctext, "location text")


        //await this.actions.clearText(this.customerLocation, "customerLocation");
        //await this.actions.setText(this.customerLocation, locationNumber, "Customer location");
    }

    public async fetchLocationNumberFromLoad() {
        let ele_Location: ElementFinder = element(by.xpath("//label[text()='Orig']/ancestor :: table/tbody/tr/td[3]//table//label[text()='Orig']/../../following-sibling :: td[4]//input"));
        return await ele_Location.getAttribute("value");
    }

    public async fetchCustomerNumberFromLoad() {
        let ele_CustNO: ElementFinder = element(by.xpath("(//label[text()='Orig']/ancestor :: table/tbody/tr/td[3]//span[@class='iceOutTxt'])[1]"));
        return await ele_CustNO.getText();
    }

    public async closeCurrentWindow() {
        let handle: string[] = await browser.getAllWindowHandles();
        await browser.driver.switchTo().window(handle[handle.length - 1]);
        await browser.driver.close();
        await browser.driver.switchTo().window(handle[handle.length - 2]);
    }

    public async clickOnSearchButton() {
        await this.actions.click(this.searchButton, "Search Button");
    }

    public async equipmentNumberWithEmptyLoadStausAndPreFix(prefix:string){
        let loadStatuscolumnIndex = await commonFunctions.getTableIndex('equipmentPoolTable', 'LT St');
        console.log("column1Index: " + loadStatuscolumnIndex);
        let equipmentColumnIndex = await commonFunctions.getTableIndex('equipmentPoolTable', 'Equipment');
        console.log("column2Index: " + equipmentColumnIndex);
       
        let xpath:string=`//span[text()='${prefix}']/ancestor::td/following-sibling::td[${loadStatuscolumnIndex-2}][span[text()='EMPTY']]/ancestor::tr/td[${equipmentColumnIndex}]`
        console.log('xpath: '+xpath)
        let equipmentNumberXpath:ElementFinder=element(by.xpath(xpath));

        do {
            await this.actions.waitUntilElementInVisible(element(by.xpath("//div[contains(@id,'connection-working') and @style='visibility: visible;']")), "waiting");
            if (await equipmentNumberXpath.isPresent()) {
                return await equipmentNumberXpath.getText();
            }
            
        } while (await commonFunctions.pagination());{

        }
    }


    public async getEquipmentNumberActiveFromCustomerPoolTable(columnHeader1: string, columnValue1: string, columnHeader2: string, columnValue2: string, requiredColumn: string) {
        await this.actions.waitUntilElementInVisible(element(by.xpath("//div[contains(@id,'connection-working') and @style='visibility: visible;']")), "waiting");
        let column1Index = await commonFunctions.getTableIndex('equipmentPoolTable', columnHeader1);
        console.log("column1Index: " + column1Index);
        let column2Index = await commonFunctions.getTableIndex('equipmentPoolTable', columnHeader2);
        console.log("column2Index: " + column2Index);
        let column3Index = await commonFunctions.getTableIndex('equipmentPoolTable', requiredColumn);
        console.log("column3Index: " + column3Index);
        let column4Index = await commonFunctions.getTableIndex('equipmentPoolTable', "Tracking");
        console.log("column3Index: " + column4Index);

        let xpath = "//*[@id='form:equipmentPoolTable']/tbody/tr[contains(@id,'form:equipmentPoolTable')]";
        await this.actions.waitUntilElementVisible(element(by.xpath(xpath)), "waiting");
        do {
            let rowCount = await element.all(by.xpath(xpath)).count();
            console.log("tr count " + rowCount);
            for (let i = 1; i <= rowCount; i++) {
                let ele_Prefix = element(by.xpath(`//*[@id='form:equipmentPoolTable']/tbody/tr[contains(@id,'form:equipmentPoolTable')][${i}]/td[${column1Index}]`));
                let ele_LTSt = element(by.xpath(`//*[@id='form:equipmentPoolTable']/tbody/tr[contains(@id,'form:equipmentPoolTable')][${i}]/td[${column2Index}]`));
                
                let tarcking_ele = element(by.xpath(`//*[@id='form:equipmentPoolTable']/tbody/tr[contains(@id,'form:equipmentPoolTable')][${i}]/td[${column4Index}]`));
                if ((await ele_Prefix.getText() === columnValue1) && (await ele_LTSt.getText() === columnValue2) && (await tarcking_ele.getText() === 'Active')) {
                    let ele_Equipment = element(by.xpath(`//*[@id='form:equipmentPoolTable']/tbody/tr[contains(@id,'form:equipmentPoolTable')][${i}]/td[${column3Index}]`));
                    return await ele_Equipment.getText();
                }
            }

        } while (await commonFunctions.pagination()); {

        }
    }


}