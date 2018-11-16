import { BasePage } from "../base.po";
import { ElementFinder, element, by } from "protractor";
import { CommonFunctions } from "../../utilities/common-functions";


let commonFunctions = new CommonFunctions();
export class SchedulerWorkQueue extends BasePage {

    readonly workQueueNameLink: ElementFinder = element(by.xpath("//table[@class='striped hoverHighlight']/tbody//tr//td[1]//a"));
    readonly callBackCOnfirmation:ElementFinder =  element(by.xpath("//td[text()='Call Back Confirmation']"))

    public async selectAnyApplicationSpecialist() {
        await this.actions.waitUntilElementVisible(element(by.xpath("//select[@id='schedulerSelectBox']")),"");
        await this.actions.selectByIndex(element.all(by.xpath("(//select[@id='schedulerSelectBox']/option)")), 3, "specialist");
        await this.waitForPageLoad();
    }

    public async selectQueueValue(text: string) {
        await this.actions.click(element(by.xpath("(//select[@id='queueSelectBox']/option[text()='" + text + "'])")), "queue");
    }

    public async verifyWorkListDisplayedForSelectedQueueValue() {
        try {
            await this.actions.waitUntilElementVisible(this.workQueueNameLink, "");
            if (await this.workQueueNameLink.isPresent()) {
                return true;
            }

        } catch (e) { }
        return false;
    }

}