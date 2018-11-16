import { BasePage } from "../base.po";
import { ElementFinder, element, by, browser, } from "protractor";

export class CompanyAdminPage extends BasePage {

    public async clickOnMenuLink(linkName: string) {
        await this.actions.click(await this.aspanText(linkName), "");
        await this.waitForPageLoad();
    }

    public async verifyAppQuestions(questions: string[]) {
        if (! await element(by.xpath("//*[@name='qualifyQuestionsAdminForm']//table//td//a")).isPresent()) {
            if (await questions.length === 0) {
                return true
            }
        }
        let questionCount: number = await element.all(by.xpath("//*[@name='qualifyQuestionsAdminForm']//table//td//a")).count();
        let matchQuestionCounter: number = 0;
        let displayedQuestionsCount = 0;
        await this.waitForElementIsVisible(element(by.xpath("//*[@name='qualifyQuestionsAdminForm']//table//td//a")));
        for (let i = 0; i < questions.length; i++) {
            for (let j = 1; i <= questionCount; i++) {
                let questionsLinks: ElementFinder = element(by.xpath("(//*[@name='qualifyQuestionsAdminForm']//table//td//a)[" + j + "]"));
                if ((await questionsLinks.getText()).trim() !== "") {
                    displayedQuestionsCount = displayedQuestionsCount++;
                    if ((await questionsLinks.getText()).includes(questions[i])) {
                        matchQuestionCounter = matchQuestionCounter++;
                        break;
                    }
                }
            }
        }
        if (displayedQuestionsCount === matchQuestionCounter) {
            return true;
        }
        return false;
    }

    public async selectQuestionSetDropDownValue(questionType: string) {
        let questionSet: ElementFinder = element(by.xpath("//select[@name='selectedQuestionType']/option[text()='" + questionType + "']"));
        await this.actions.click(questionSet, "");
    }

    public async selectOptionFromDropdown(nameAttribute: string, optionString: string) {
        let xpath = await this.fieldXpath(nameAttribute);
        let dropdownOptionXpath = xpath + "//option[text()='" + optionString + "']";
        await this.actions.waitUntilElementPresenceOf(element(by.xpath(xpath)))
        await this.actions.click(element(by.xpath(xpath)), "click on drpodown");
        await this.actions.waitUntilElementPresenceOf(element(by.xpath(dropdownOptionXpath)));
        await this.actions.click(element(by.xpath(dropdownOptionXpath)), 'click on option')
    }

    public async fieldXpath(nameAttribute: string) {
        return ("//*[@name='" + nameAttribute + "']")
    }

    public async getTextBoxValue(nameAttribute) {
        let xpath: ElementFinder = element(by.xpath(`//input[@name='`+nameAttribute+`']`));
        await browser.wait(function () {
            return xpath.getAttribute('value').then(function (value) {
                return value !== '';
            });
        }, 5000);
        let value: string = await xpath.getAttribute('value');
        return value;
    }
    public async getselectedDropdownValueText(nameAttribute) {
        let xpath: ElementFinder = element(by.xpath(`//select[@name='`+nameAttribute+`' ]/option[@selected='selected']`));
        await browser.wait(function () {
            return xpath.getAttribute('value').then(function (value) {
                return value !== '';
            });
        }, 5000);
        let value: string = await xpath.getAttribute('value');
        return value;
    }

}