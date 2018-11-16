import { by, element, ExpectedConditions, ElementFinder, ElementArrayFinder } from 'protractor';
import { BasePage } from '../base.po';

export class ChasisBeamPage extends BasePage {

    readonly tractorNumberInputField = element(by.id("form:tractorNbr"));
    readonly chasisToBeAttachedPrefixInputField = element(by.id("form:eqpUnitPrefixId"));
    readonly chasisToBeAttachedNumberInputField = element(by.id("form:eqpUnitId"));
    readonly reattachedDriverPrefix = element(by.xpath("//*[text()='Currently attached chassis']/parent::td/parent::tr/td[2]/span"));
    readonly reattachedDriverNumber = element(by.xpath("//*[text()='Currently attached chassis']/parent::td/parent::tr/td[3]/span"));

    constructor() {
        super();
    }

}
