import { browser, by, element, ExpectedConditions, ElementFinder, ElementArrayFinder } from 'protractor';
import { protractor } from 'protractor';
import { By } from "selenium-webdriver";
import { BasePage } from './base.po';

export class NextRecommendPage extends BasePage {

    readonly searchInputText = element(by.id("form:searchText"));
    readonly selectableAlphaButton = element.all(by.xpath("//button[not(@disabled='disabled') and (text()='Alpha')]"));
    readonly selectableTractorButton = element.all(by.xpath("//button[not(@disabled='disabled') and (text()='Tractor')]"));
    readonly unSelectableAlphaButton = element.all(by.xpath("//button[(@disabled='disabled') and (text()='Alpha')]"));
    readonly unSelectableTractorButton = element.all(by.xpath("//button[(@disabled='disabled') and (text()='Tractor')]"));

    public getRadioButton(text: string): ElementFinder {
        let radioButton = element(by.xpath("//*[text()='" + text + "']/parent::td/input"));
        return radioButton;
    }
}