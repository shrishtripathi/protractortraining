import { ElementFinder, ElementArrayFinder } from "../../node_modules/protractor/built/element";
import { element, by } from "../../node_modules/protractor";
import { BasePage } from "../../pages/base.po";
import { AppointmentsPage } from "./appointments-tab-po";

let appointmentsPage = new AppointmentsPage();
export class MonitorPage extends BasePage {

    readonly monitorViewDropDownBox:ElementFinder = element(by.xpath("//div[@id='combobox-1024-trigger-picker']"));
    readonly loadResults : ElementArrayFinder = element.all(by.xpath("//table[contains(@id, 'tableview-1090-record')]"));
    
    public async clickOnMonitorViewDropDownBox() {
        await this.actions.click(this.monitorViewDropDownBox,"Clicking on ViewDropDownBox")  
    }

    public async selectUserFromMonitorViewDropDownBox(user:string) {
        let usersMonitorViewDropDownBox: ElementFinder = element(by.xpath("//div[text()='"+user+"']"));
        await this.actions.click(usersMonitorViewDropDownBox,"Selection User From ViewDropDownBox")
        await appointmentsPage.loading();
    }
    
    public async verifyingLoadResultsUnderOrder() {        
        return await this.loadResults.count();        
    }
}