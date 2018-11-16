import { browser, by, element, ElementFinder, ExpectedConditions, protractor } from 'protractor';
import { BasePage } from "./base.po";
import { CommonFunctions } from "../../utilities/common-functions";
import { AreaPoolPage } from "../freight_manager/area-pool.po";

let EC = protractor.ExpectedConditions;
let commonFunctions = new CommonFunctions();
let areaPoolPage = new AreaPoolPage();
let basePage = new BasePage();

export class CustomerLookUpPage extends BasePage {

    public async getEquipmentAndPrefix() {

        let prefixCoulmnIndex = await commonFunctions.getColumnIndexForSingleHeaderText("equipmentPoolTable", "Prefix")
        let lTStCoulmnIndex = await commonFunctions.getColumnIndexForSingleHeaderText("equipmentPoolTable", "LT St")
        let equipmentCoulmnIndex = await commonFunctions.getColumnIndexForSingleHeaderText("equipmentPoolTable", "Equipment")
        let equipxpath: string = "//td[" + lTStCoulmnIndex + "][.//text()='EMPTY']/ancestor::tr/td[" + equipmentCoulmnIndex + "]"
        let prefixXpath: string = "//td[" + lTStCoulmnIndex + "][.//text()='EMPTY']/ancestor::tr/td[" + prefixCoulmnIndex + "]"

        await this.actions.waitUntilElementVisible(await element(by.buttonText('Exit')), "wait for element")

        do {
            let equipmentXpath: ElementFinder = element(by.xpath(equipxpath));
            let preFix: ElementFinder = element(by.xpath(prefixXpath));
            if (await equipmentXpath.isPresent()) {
                let equipmentNumber = await basePage.actions.getText(equipmentXpath, "")
                let prefix = await basePage.actions.getText(preFix, "")
                return [equipmentNumber, prefix]
            }

        } while (await commonFunctions.pagination());
        return;
    }

}