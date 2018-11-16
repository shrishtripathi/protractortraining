import { browser, by, element, ExpectedConditions, ElementFinder, ElementArrayFinder } from 'protractor';
import { By } from "selenium-webdriver";
import { BasePage } from '../base.po';
import { CommonFunctions } from '../../utilities/common-functions';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

export class Shipper360HomePage extends BasePage {

    readonly homeMenu: ElementFinder = element(By.xpath("//span[text()='Home']"));
    readonly termAndConditionLink: ElementFinder = element(by.xpath("//a[text()='Terms of Service']"))

    public async clickOnCarrierTabs(tabElement: ElementFinder) {
        await this.actions.click(tabElement, "Click Tab");
    }

    public async clickOnNavigationPinIcon() {
        let navigationPin: ElementFinder = element(by.xpath("//*[contains(@class,'pushpin-svg ng-star-inserted')]"));

        await this.actions.waitUntilElementVisible(navigationPin, "");
        await this.actions.moveMouseToElement(element(by.xpath("//*[contains(@class,'pushpin-svg ng-star-inserted')]")), "");
        await this.actions.shortWait("waiting");
    }

    public async clickOnTermAndConditionLink() {
        await this.actions.click(this.termAndConditionLink, "");
        let popupTermCondition: ElementFinder = element(by.xpath("//body/div[@role='dialog']"))
        await this.actions.waitUntilElementVisible(popupTermCondition, "");
        try {
            if (await popupTermCondition.isDisplayed()) {
                let popupTitle: ElementFinder = element(by.xpath("//span[text()='J.B. HUNT 360 SHIPPER TERMS AND CONDITIONS']"));
                if (await popupTitle.isPresent()) {
                    return true;
                }
            }
        } catch (e) { }
        return false;
    }

}