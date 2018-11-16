import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, ElementHelper, protractor } from "protractor";
import { CommonFunctions } from "../../utilities/common-functions";

export class Persongroups extends CommonFunctions {

    readonly personGroups = element(by.xpath("//input[@id='m6a7dfd2f_tfrow_[C:1]_txt-tb']"));
    readonly newRowButton = element(by.buttonText("New Row"));
    readonly doubleArrowImage = element(by.xpath("//img[@id='mf4c5183e-img']"));
    readonly selectValue = element(by.xpath("//span[contains(text(),'Select Value')]"));
    readonly saveImage = element(by.id("toolactions_SAVE-tbb_image"));
    readonly sequence = element(by.xpath("//input[@id='m354e0792-tb']"));
    readonly nextPage = element(by.xpath("//img[contains(@title,'Next Page')]"));
    readonly persons = element.all(by.xpath("//input[contains(@id,'m43a7253b_tdrow_[C:2]')]"));
    readonly namesXpath = element.all(by.xpath("//span[contains(@id,'lookup_page1_tdrow_[C:1]')]"));
    readonly xpath = element.all(by.xpath("//input[contains(@id,'m43a7253b_tdrow_[C:8]')]"));
    readonly successMessage = element(by.xpath("//*[contains(text(),'Record has been saved')]"));

    public async getAllPersonsName() {
        let personNames: string[] = [];
        let count = 0;

        do {

            await this.actions.waitUntilElementVisible(this.persons.get(0), "");
            let size = await this.persons.count();
            console.log("size is " + size)
            while (size > 0) {
                console.log("inside while")
                personNames[count] = await this.persons.get(size - 1).getAttribute('value');
                count++;
                size--;
            }

        } while (await this.clickNextPage());

        return await personNames;
    }
    public async clickNextPage() {
        let flag: boolean = false;

        try {
            flag = await this.nextPage.isDisplayed();
            if (flag) {
                await this.nextPage.click();
                await this.actions.waitUntilElementVisible(this.persons.get(0), "");
            }
        } catch (error) {

        }
        return await flag;

    }
    public async selectPersonName(personNames: string[]) {

        let names: string[] = [];
        await this.actions.waitUntilElementVisible(this.namesXpath.get(0), "");
        let size = await this.namesXpath.count();
        console.log("initial count is " + size)
        for (let index = 0; index < size; index++) {
            names[index] = await this.namesXpath.get(index).getText();
        }
        for (let i = 0; i < personNames.length; i++) {
            let index = names.indexOf(personNames[i]);
            if (index >= 0) {
                names.splice(index, 1);
            }
        }
        console.log("final count is " + names.length);
        return await names;
    }

    public async clickLink(text) {
        await this.actions.shortWait("wait");
        await this.actions.click(element(by.xpath("//span[contains(text(),'" + text + "')]")), "");
    }

    public async clickPerson(person) {
        let xpath = element(by.xpath("//span[contains(text(),'" + person + "')]"))
        await this.actions.click((xpath), "");
        await this.actions.waitUntilElementInVisible(xpath, "")
    }

    public async addSequenceNumberToPerson() {
        await this.actions.waitUntilElementVisible(this.xpath.get(0), "")
        let size: number = await this.xpath.count();
        let value: number = parseInt(await this.xpath.get(size - 2).getAttribute('value'));
        console.log("value is " + value);
        await this.actions.waitUntilElementVisible(this.sequence, "sequence");
        let actualNumber = value + 1;
        await this.actions.setText(this.sequence, actualNumber.toString(), "")
    }

    public async verifySaveStatus() {
        await this.actions.click(this.saveImage, "click on save image");
        let flag: boolean = false;
        try {
            await this.actions.waitUntilElementVisible(this.successMessage, "");
            flag = await this.actions.isElementDisplayed(this.successMessage, "sucessMessage");
        } catch (error) {
            console.log("save status " + error)
        }
        return await flag;
    }

}