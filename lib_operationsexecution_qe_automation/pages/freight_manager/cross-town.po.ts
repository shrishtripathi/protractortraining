import { browser, by, element, ElementFinder, ExpectedConditions, protractor } from 'protractor';
import { BasePage } from "./base.po";
import { By } from 'selenium-webdriver';
import { CommonFunctions } from '../../utilities/common-functions';


let commonFunctions = new CommonFunctions();
let EC = protractor.ExpectedConditions;

export class CrossTownPage extends BasePage {

    readonly divCodeTextBox = element(by.id("form:divisionInput"));
    readonly areaTypeCodeTextBox = element(by.xpath("//table[@id='form:areaType']//input"));
    readonly areaCodeTextBox = element(by.xpath("//table[@id='form:area1']//input"));
    readonly fleetTypeTextBox = element(by.xpath("//table[@id='form:fleetType']//input"));
    readonly projectCodeTextBox = element(by.id("form:j_id888"));
    readonly loadingIcon = element(by.xpath("//*[contains(@id,'connection-working') and @style='visibility: hidden;']"));
    readonly networkConnectionInterruptedIcon = element(by.id("form:j_id714:connection-lost"));
    button: ElementFinder;

    public async enterDivisionCode() {
        await this.divCodeTextBox.clear();
        await this.actions.setText(this.divCodeTextBox, "HJBT JBVAN", "Enter Division Code");
    };

    public async enterAreaType() {
        await this.areaTypeCodeTextBox.clear();
        await this.actions.setText(this.areaTypeCodeTextBox, "MKT", "Enter Area Type Code");
    };

    public async enterArea() {
        await this.areaCodeTextBox.clear();
        await this.actions.setText(this.areaCodeTextBox, "CH", "Enter Area Code");
    };

    public async enterFleetCode() {
        await this.fleetTypeTextBox.clear();
        await this.actions.setText(this.fleetTypeTextBox, "I", "Enter Fleet Code");
    };

    public async enterProjectCode() {
        await this.projectCodeTextBox.clear();
        await this.actions.setText(this.projectCodeTextBox, "+C01", "Enter Project Code")
    };

    public async clickOnButton(buttonTextValue: string) {
        this.button = element(by.buttonText(buttonTextValue));
        await this.actions.click(this.button, "Click On " + buttonTextValue + " Button ");
    };

    public async waitForSearchResult() {
        return await browser.wait(EC.presenceOf(this.loadingIcon), 6000000);
    }

    public async clickOnReloadButton() {

        try {
            var handles: any = await browser.getAllWindowHandles();
            console.log(handles.length);
            await browser.driver.switchTo().window(handles[handles.length - 1]);
            var reloadButton: ElementFinder = await element(by.xpath("//input[@value='Reload' and @type='button']"))
            var reLoadIcon: boolean = await reloadButton.isPresent();

            switch (reLoadIcon) {
                case true: {
                    await reloadButton.click();
                    await browser.switchTo().defaultContent();
                }
                case false: {
                    console.log("Search Result is displayed")
                }
            }
        } catch (error) {
            console.log("Reload Popup is not displayed \n" + error)
        }

    }

    public async clickOnColorBox() {

        let pageCount = 1;
        let disabledNextLink: ElementFinder = element(by.xpath("//*/a[@class='iceCmdLnk iceCmdLnk-dis' and @id='form:j_id1826next']"));
        let nextButton: ElementFinder = await element(by.xpath("//td/a[text()='Next']"));
        let clickedOnColorBox: boolean = false;

        var abort = false;
        for (let textBoxCount = 1; textBoxCount > 0 && !abort; textBoxCount++) {

            let textBoxXpath = element(by.xpath("(//*/input[@class='iceInpTxt notesInputText'])[" + textBoxCount + "]")); //Xpath of TextBox
            let ispresent: boolean = await textBoxXpath.isPresent();
            if (ispresent) {

                await textBoxXpath.getAttribute("value").then(async (textBoxValue) => {
                    if (textBoxValue == "") {
                        await textBoxXpath.getAttribute("id").then(async (idOfTextBox) => {
                            console.log(idOfTextBox)

                            let ir = element(by.xpath("//*[@id='" + idOfTextBox + "']/parent::td/following-sibling::td[6]"));
                            await ir.getText().then(async (text) => {
                                if (text == "IR") {
                                    var colorBox = element(by.xpath("//*[@id='" + idOfTextBox + "']/parent::td/preceding-sibling::td[1]")); //Creating xpath for adjacent color box
                                    await this.actions.waitUntilElementVisible(colorBox, "color Box is visible")
                                    await colorBox.click();
                                    return clickedOnColorBox = true;
                                }

                                return;
                            })
                        })
                    }
                    console.log(textBoxValue + " " + textBoxCount + "\ntest")

                });

            }
            else if (clickedOnColorBox || (await nextButton.isPresent()) === false) {
                break;
            }
            else {
                console.log("next Button Enabled");
                console.log("Clicked on Next link for page No. " + (pageCount + 1)); pageCount++;
                await nextButton.click();
                textBoxCount = 0;
            }
        }
    };

    public async waitForLoading() {
        console.log("loading....")
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.visibilityOf(await element(by.xpath("//*[@class='iceOutConStatInactv']"))), 50000);
    };


    public async clickColorBoxWithEmptyTextBox() {
        let orderNumber: string;
        let colorBoxColumnIndex = await commonFunctions.getColumnIndexForSingleHeaderText("r", "WOF\nO/S");
        let pwrDrvrNotesColumnIndex = await commonFunctions.getColumnIndexForSingleHeaderText("r", "PWR/DRVR\nNOTES");

        let colorBox = "//td[" + pwrDrvrNotesColumnIndex + "]/input[@value='']/ancestor::tr/td[" + colorBoxColumnIndex + "]/div[contains(@class,'icePnlGrp')]"
        console.log(colorBox)
        await this.waitForLoading();
        do {
            let colorBoxXpath: ElementFinder = element(by.xpath(colorBox));
            if (await colorBoxXpath.isPresent()) {
                await colorBoxXpath.click();
                let orderNumberXpath: ElementFinder = element(by.xpath("//input[@id='form:orderNumber']"));
                await browser.wait(EC.presenceOf(orderNumberXpath), 50000);
                orderNumber = await orderNumberXpath.getAttribute("value")
                console.log(orderNumber);
                return orderNumber;
            }

        } while (await commonFunctions.pagination());
        return "";
    };

};

