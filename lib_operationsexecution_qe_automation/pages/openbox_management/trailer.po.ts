import { protractor, ElementFinder, element, by, ElementArrayFinder, browser } from 'protractor';
import { BasePage } from '../base.po';

export class TrailerPage extends BasePage {
    readonly assignedToRadioButton: ElementFinder = element(by.xpath("//label[text()='Assigned To']//parent::span/input"));
    readonly publication: ElementFinder = element(by.xpath("//table[@id='form:summaryTable']/tbody/tr[1]/td[3]"));
    readonly action: ElementFinder = element(by.xpath("//div[@class='icePnlDvrHorSnd']//table[@id='form:loadDetailsPrenotesTable']/tbody/tr[1]//td[1]"));
    readonly closeButton: ElementFinder = element(by.xpath("//button[contains(text(),'CLOSE')]"));
    readonly billToCode: string = "//select[@id='form:billTo']//option";
    readonly receiverCode: string = "//select[@id='form:rcvrCd']//option";
    readonly recieverStateCity: string = "//select[@id='form:rcvrCtySt']//option";
    readonly transitMode: string = "//select[@id='form:tranMode']//option";
    readonly clearFilter: ElementFinder = element(by.xpath("//button[text()='Clear Filter']"));
    readonly loadNumber: ElementFinder = element(by.xpath("//table[@id='form:loadDetailsPrenotesTable']//tbody//tr[1]//td[3]/span"));
    readonly searchLoadRadioButton: ElementFinder = element(by.xpath("//input[@name='form:typeOfSummarySelection' and @value='SRCHLOAD']"));
    readonly searchLoadInputBox: ElementFinder = element(by.xpath("//input[@id='form:orderNbrChClass']"));
    readonly magnifyingGlass: ElementFinder = element(by.xpath("//label[text()='Search Load #']//parent::span//parent::td//parent::tr//td[6]/a"));
    readonly publicationSecondRow: ElementFinder = element(by.xpath("//table[@id='form:summaryTable']/tbody/tr[2]/td[3]"));
    readonly publicationFirstRow: ElementFinder = element(by.xpath("//table[@id='form:summaryTable']/tbody/tr[1]/td[3]"));
    readonly searchLoadInputField: ElementFinder = element(by.xpath("//input[@id='form:orderNbrChClass']"));
    readonly searchLoadLink: ElementFinder = element(by.xpath("//a[@id='form:j_id445']"));
    readonly workActionSubLink: ElementFinder = element(by.xpath("//div/a/span[text()='Work Action']/parent::a"));
    readonly ActionLink: ElementFinder = element(by.xpath("//th/div//a/span[text()='Action']/parent::a"));
    readonly loadNumberCheckBox: ElementFinder = element(by.xpath("//table[@id='form:loadDetailsPrenotesTable']//tbody//tr[1]//td[2]//input[@type='checkbox']"));

    public async click(elementRequired: ElementFinder) {
        await this.actions.waitUntilElementVisible(elementRequired, "Waiting");
        await this.actions.click(elementRequired, "Click on reuired element");
        await this.waitForActionToComplete();
    }

    public async setAssignedToDropdown(valueToSelect: string) {
        let assignedToDropdown = "//select[@name='form:userId']//option";
        await this.waitForElementIsVisible(browser.element(by.xpath(assignedToDropdown)));
        await this.actions.selectByValue(assignedToDropdown, valueToSelect, "Selecting option to assigned to dropdown");
    }

    public async verifyPageDisplayed(popupTitle: string) {
        let xpath = element(by.xpath("//span[contains(text(),'" + popupTitle + "')]"));
        return await this.actions.getText(xpath, "text");
    }

    public async hoverOnActionAndSelectOption(hoverOptionName: string) {
        let xpath = element(by.xpath("//ancestor::tr[@id='form:loadDetailsPrenotesTable:0']//span[text()='" + hoverOptionName + "']//parent::a"))
        await this.actions.moveMouseToElement(this.action, "Hover on action");
        await this.actions.click(xpath, "Click on reuired element");
        await this.waitForActionToComplete();
    }

    public async setDropDownOption(elementToSelect: string, valueToSelect: string) {
        await this.actions.selectByValue(elementToSelect, valueToSelect, "Selecting option")
    }

    public async verifyBillToCodeText() {
        let billToCode = element.all(by.xpath("//table[@id='form:loadDetailsPrenotesTable']//tbody//tr"));
        let size = await billToCode.count();
        let flag = false;
        for (let i = 1; i <= size; i++) {
            let text = await this.actions.getText(element(by.xpath("(//table[@id='form:loadDetailsPrenotesTable']//tbody//td[7]//span//span)[" + i + "]")), "");
            if (text == 'PEIR20') {
                flag = true;
                break;
            }
        }
        return flag;
    }

    public async verifyRecieverCodeText() {
        let billToCode = element.all(by.xpath("//table[@id='form:loadDetailsPrenotesTable']//tbody//tr"));
        let size = await billToCode.count();
        console.log("size", size)
        let flag = false;
        for (let i = 1; i <= size; i++) {
            let text = await this.actions.getText(element(by.xpath("(//table[@id='form:loadDetailsPrenotesTable']//tbody//td[8]//span//span)[" + i + "]")), "");
            console.log("text", text)
            if (text == 'P1GR5') {
                console.log("inside if")
                flag = true;
                break;
            }
        }
        return flag;
    }

    public async verifyRecieverCityStateText() {
        let billToCode = element.all(by.xpath("//table[@id='form:loadDetailsPrenotesTable']//tbody//tr"));
        let size = await billToCode.count();
        let flag = false;
        for (let i = 1; i <= size; i++) {
            let text = await this.actions.getText(element(by.xpath("(//table[@id='form:loadDetailsPrenotesTable']//tbody//td[10]//span)[" + i + "]")), "");
            if (text == 'GRV CY, OH') {
                flag = true;
                break;
            }
        }
        return flag;
    }

    public async verifyTransitModeText() {
        let billToCode = element.all(by.xpath("//table[@id='form:loadDetailsPrenotesTable']//tbody//tr"));
        let size = await billToCode.count();
        let flag = false;
        for (let i = 1; i <= size; i++) {
            let text = await this.actions.getText(element(by.xpath("(//table[@id='form:loadDetailsPrenotesTable']//tbody//td[13]//span)[" + i + "]")), "");
            if (text == 'TRAIN') {
                flag = true;
                break;
            }
        }
        return flag;
    }

    public async verifyLoadNumberActionOptions() {
        await this.actions.moveMouseToElement(this.action, "Hover on action");
        let xpath: ElementArrayFinder = element.all(by.xpath("//ancestor::tr[@id='form:loadDetailsPrenotesTable:0']//td//div[@class='iceMnuBarVrtSubMenu']//div"));
        let options = await xpath.count();
        return await options;
    }

    public async verifyActionOptions() {
        let action = element(by.xpath("//div[@class='icePnlDvrHorSnd']//table[@id='form:loadDetailsPrenotesTable']/thead//tr//span[text()='Action']"));
        await this.actions.moveMouseToElement(action, "Hover on action");
        let xpath = element.all(by.xpath("//table[@id='form:loadDetailsPrenotesTable']//th//div[@class='iceMnuBarVrt']//div[2]//div"));
        let options = await xpath.count();
        return options;

    }


    public async getLoadNumber() {
        await this.actions.waitUntilElementVisible(this.loadNumber, "Waiting");
        return await this.loadNumber.getText();
    }

    public async searchLoadNumber(loadNumber: string) {
        await this.setTextInInputField(this.searchLoadInputField, loadNumber);
        await this.click(this.searchLoadLink);
        let numberOfRows: ElementArrayFinder = element.all(by.xpath("//table[@id = 'form:loadDetailsPrenotesTable']/tbody/tr"));
        let size: number = await numberOfRows.count();
        return await size;
    }

    public async clickHeaderActionButton() {
        let loadActive = false;
        let subMenuArray = ['Update Status', 'Work Action', 'Send Prenote', 'Add Comments'];
        let headerActionButtonXPath: ElementFinder = element(by.xpath("//div[@id='form:loadDetailsPrenotesTable:j_id488:j_id489']/a"));
        await this.actions.click(headerActionButtonXPath, "Header Action Clicked");
        let subMenuXPath: ElementArrayFinder = element.all(by.xpath("//div[@id='form:loadDetailsPrenotesTable:j_id488:j_id489_sub']/div/a/span"));
        let size: number = await subMenuXPath.count();
        let subMenuTexts = await subMenuXPath.getText();

        for (let i = 0; i < size; i++) {
            if (subMenuTexts[i] == subMenuArray[i]) {
                loadActive = true;
            }
            else {
                loadActive = false;
            }
        }
        return await loadActive;
    }

    public async clickBodyActionButton() {
        let loadActive = false;
        let subMenuArray = ['View Simon Rules', 'View Reference #', 'View Appt Changes', 'View Order Comments'];
        let bodyActionButtonXPath: ElementFinder = element(by.xpath("//div[@id='form:loadDetailsPrenotesTable:0:j_id494:j_id495']/a"));
        await this.actions.click(bodyActionButtonXPath, "Body Action Clicked");
        let subMenuXPath: ElementArrayFinder = element.all(by.xpath("//div[@id='form:loadDetailsPrenotesTable:0:j_id494:j_id495_sub']/div/a/span"));
        let size: number = await subMenuXPath.count();
        let subMenuTexts = await subMenuXPath.getText();

        for (let i = 0; i < size; i++) {
            if (subMenuTexts[i] == subMenuArray[i]) {
                loadActive = true;
            }
            else {
                loadActive = false;
            }
        }
        return await loadActive;
    }
}


