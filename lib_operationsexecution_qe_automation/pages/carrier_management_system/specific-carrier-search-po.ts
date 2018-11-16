import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { By } from "selenium-webdriver";
import { BasePage } from '../base.po';

export class SpecificCarrierSearchPage extends BasePage {

    readonly searchStringInput: ElementFinder = element(By.id("searchString"));
    readonly exportToExcelIcon: ElementFinder = element(By.xpath("//table//td[@nowrap='nowrap']/a/img"));
    readonly logOutLink: ElementFinder = element(By.xpath("//a[@class='banLink' and @title='Logout']"));

    public async selectOptionFromSearchType(option: string) {
        let optionValue: ElementFinder = element(By.xpath("//select[@name='searchType']/option[text()='" + option + "']"));
        await this.actions.click(optionValue, "Click on option");
    }

    public async setTextInSearchInput(text: string) {
        await this.actions.clearText(this.searchStringInput, text);
        await this.actions.setText(this.searchStringInput, text, text);
    }

    public async clickOnExportToExcel() {
        await this.actions.click(this.exportToExcelIcon, "Click on Export To Excel ");
        await this.actions.longWait("waiting to download");
    }

    public async clickOnLogOutLink() {
        await this.actions.click(this.logOutLink, "Click on Logout link");
    }

    public async verifyDownloadedExcel(userName: string) {
        let resultFlag: boolean = false;
        let excelPath = process.env.USERPROFILE + "\\Downloads\\carriers.xls";
        console.log("Excel path:" + excelPath);
        let fs = require('fs');
        if (fs.existsSync(excelPath)) {
            resultFlag = true;
            console.log("excel existed");
        } else {
            console.log("inside else");
        }
        return await resultFlag;
    }

}
