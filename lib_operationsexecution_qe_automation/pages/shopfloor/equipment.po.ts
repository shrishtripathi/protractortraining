
import { BasePage } from '../../pages/base.po';
import { ElementFinder, by, element } from 'protractor';
export class EquipmentPage extends BasePage {

    readonly paginationFirst: ElementFinder = element(by.xpath("(//*[contains(text(),'First')])[1]"));

    public async selectUnitType(option: string) {
        let unitType: ElementFinder = element(by.xpath("//select[@id='unitType']/option[text()='" + option + "']"));
        await this.actions.click(unitType, "");
    }
}
