import { by, element, ExpectedConditions, ElementFinder, ElementArrayFinder, protractor, browser } from 'protractor';
import { BasePage } from '../base.po';

let EC = ExpectedConditions;

export class DeliveryPage extends BasePage {

    readonly dateBeginningDate = "//input[@id='form:beginDate']";
    readonly dateEndDate = "//input[@id='form:endDate']";
    firstRowSearchResult: string;
    verifyOutput: ElementArrayFinder;
    object_DriverNote: ElementFinder;
    readonly searchResultLoading = element(by.xpath("(//table[contains(@id,'form:')]/child::tbody//td[contains(@class,'iceDatTbl')]/ancestor :: tr[contains(@id,'form:r')])[1]"));
    readonly linkheaderTab_Planning = element(by.xpath("//span[text()='Planning']"));
    readonly linkDeliveryDropDownOption = element(by.xpath("//span[text()='Delivery']"));
    readonly buttonSearch = element(by.xpath("//button[contains(text(),'Search')]"));
    readonly buttonSavePrefs = element(by.xpath("//button[contains(text(),'Save Prefs')]"));
    readonly textDeliverySite = element(by.xpath("//table[@id='form:deliverCus']//input[@class='iceInpTxt']"));
    readonly dropDownType = element.all(by.xpath("//select[@id='form:selectType']//option"));
    readonly textDivision = element(by.xpath("//table[@id='form:division']//input"));
    readonly textAreaType = element(by.xpath("//table[@id='form:areaType']//input"));
    readonly textArea = element(by.xpath("//table[@id='form:area1']//input"));
    readonly textFleetType = element(by.xpath("//table[@id='form:fleetType']//td[1]/input"));
    readonly tableSearch = element.all(by.xpath("//table[@id='form:r']/tbody/child :: tr[contains(@class,'iceDatTbl')]"));
    readonly tableSearchResults = element(by.xpath("(//table[@id='form:r']/tbody/child :: tr)[1]"));
    readonly buttonNext = element(by.xpath("//a[contains(text(),'Next')]"));
    readonly recordsCount = element.all(by.xpath("//input[@class='iceInpTxt notesInputText']//ancestor :: tr//ancestor :: tbody//tr[contains(@class,'iceDatTblRow')]"));
    readonly buttonNotes = element(by.xpath("//button[contains(text(),'Notes')]"));
    readonly alertMessage = element(by.xpath("//div[@id='contentHolder']//li/span[contains(@class,'iceMsgs')]"));
    readonly optionList: string = "//select[@id='form:selectType']//option";
    readonly typeDropDown: ElementFinder = element(by.xpath("//select[@id='form:selectType']"))
    readonly fleetTypeTextBoxes: ElementArrayFinder = element.all(by.xpath("(//table[@id='form:fleetType']//td/input)"));
    readonly savePreferencesButton: ElementFinder = element(by.buttonText("Save Prefs"));
    readonly preferenceUpdatedMessage: ElementFinder = element(by.xpath("//span[@class='iceMsgsInfo']"));

    public async clickOnSavePreferencesButton() {
        await this.actions.click(this.savePreferencesButton,"Click on Save Preferences Button");
    }

    public async setSearchParameters(strType: string, strDivison: string, strAreaType: string, strArea: string, strFleetType? : string) {
        if (strType.length >= 1) {
            await this.actions.selectByValue("(//select[@id='form:selectType']//option)", strType, "Type");
        }

        if (strDivison.length >= 1) {
            await this.actions.clearText(this.textDivision, "Divison");
            await this.actions.setText(this.textDivision, strDivison, "Divison");
        }
        
        if (strAreaType.length >= 1) {
            try {
                if (! await this.textAreaType.isPresent()) {
                    await this.buttonSearch.click();
                    await this.waitForPageLoad();
                    await this.actions.waitUntilElementVisible(this.textAreaType, "");
                }
            } catch (e) { }
            await this.actions.clearText(this.textAreaType, "AreaType");
            await this.actions.setText(this.textAreaType, strAreaType, "AreaType");
        }
        
        if (strArea.length >= 1) {
            await this.actions.clearText(this.textArea, "Areas");
            await this.actions.setText(this.textArea, strArea, "Areas");
        }

       if(strFleetType!== undefined) {  
        if (strFleetType.length >= 1) {
            await this.actions.clearText(this.textFleetType, "Fleet Type");
            await this.actions.setText(this.textFleetType, strFleetType, "Fleet Type");
        }
    }
        
        await this.textDeliverySite.sendKeys(protractor.Key.TAB);
        await this.actions.waitUntilElementVisible(this.buttonSearch, "Search button");
    }


    public async clickOnSearch() {
        await this.actions.longWait("waiting till object loads");
        await this.actions.click(this.buttonSearch, "Search");
        await this.actions.waitUntilElementInVisible(this.searchResultLoading, "loading");
        await this.actions.longWait("waiting till object loads");
    }

    public async verifySearchResults(strArea: string) {
        this.verifyOutput = element.all(by.xpath("//td[text()='" + strArea + "        ']"));
        let resultRowCount = await this.verifyOutput.count();
        if (resultRowCount !== 0) {
            return true;
        } else {
            let check_spn: ElementFinder = element(by.xpath("//span[contains(text(),'NO ROWS FOUND')]"));
            if (await check_spn.isPresent()) {
                return true;
            } else {
                return false;
            }
        }
    }

    public async getEmptyBoxForDriverNotes() {
        do {
            await this.actions.waitUntilElementVisible(element(by.xpath("(//input[@class='iceInpTxt notesInputText']//ancestor :: tr//ancestor :: tbody//tr[contains(@class,'iceDatTblRow')])[1]")), "");
        } while (! await element(by.xpath("(//input[@class='iceInpTxt notesInputText']//ancestor :: tr//ancestor :: tbody//tr[contains(@class,'iceDatTblRow')])[1]")).isPresent())

        let rowCount = await this.recordsCount.count();
        console.log("tr count " + rowCount);
        for (let i = 1; i <= rowCount; i++) {
            console.log("enter into for loop");
            console.log(i);
            let checkElement: boolean = await element(by.xpath("(//input[@class='iceInpTxt notesInputText']//ancestor :: tr//ancestor :: table[@id='form:r']/tbody//tr[contains(@class,'iceDatTblRow')]//td[3]//input)[" + i + "]")).isPresent();
            console.log(checkElement);
            if (!checkElement) {
                console.log("enter into if loop");
                continue;
            }
            let driverNotes = await element(by.xpath("(//input[@class='iceInpTxt notesInputText']//ancestor :: tr//ancestor :: table[@id='form:r']/tbody//tr[contains(@class,'iceDatTblRow')]//td[3]//input)[" + i + "]"));
            let drvrNoteText: any = await driverNotes.getAttribute('value');
            console.log("driver note value :" + drvrNoteText);
            if (drvrNoteText === "") {
                this.object_DriverNote = driverNotes;
                return;
            }
        }
        await this.actions.shortWait("waiting..");
        let nextButtonEnabled: ElementFinder = await element(by.xpath("//td/a[text()='Next']"));
        let nextButtonIsDisable: boolean = await element(by.xpath("//a[text()='Next' and contains(@onclick,'return false')]")).isPresent();
        if (!nextButtonIsDisable) {
            await console.log("inside next button enabled");
            let nextButton: ElementFinder = await element(by.xpath("//td/a[text()='Next']"));
            await nextButton.click();
            await this.actions.longWait("waiting till object loads");
            await this.getEmptyBoxForDriverNotes();
        }
        else {
            return await console.log("completed pagination, next button is disabled no data is found with given criteria");
        }
    }

    public async clickOnNotes() {
        await this.actions.mediumWait("waiting till object loads");
        await this.actions.click(this.buttonNotes, "Notes");
        await this.actions.longWait("waiting till object loads");
    }

    public async VerifyDriverNotesMsg(strValidateMsg: string) {
        await this.actions.verifyText(this.alertMessage, strValidateMsg, "Verify message");
    }

    public async setValuesIntoDriverNotes(strValue: any) {
        await this.getEmptyBoxForDriverNotes();
        if (this.object_DriverNote != undefined) {
            console.log("object : " + this.object_DriverNote.getAttribute('class'));
            await this.actions.setText(this.object_DriverNote, strValue, "Driver Notes");
            return await this.object_DriverNote;
        } else {
            console.log("object is undefined");
        }
    }

    public async checkNewlySavedDriverNote(obj_driverNote: ElementFinder, value_Note: string) {
        let verify_Notes: string = await obj_driverNote.getAttribute('value');
        expect(verify_Notes).toBe(value_Note);

    }

    public async setTextToFleetTypeInputFields(value1, value2, value3, value4) {
        let size = await this.fleetTypeTextBoxes.count();
        let arr: string[] = [value1, value2, value3, value4];
        for (let index = 0; index < size; index++) {
            await this.fleetTypeTextBoxes.get(index).clear();
            await this.fleetTypeTextBoxes.get(index).sendKeys(arr[index]);
        }

    }
}


