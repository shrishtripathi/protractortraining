import { ElementFinder, ElementArrayFinder } from "../../node_modules/protractor/built/element";
import { element, by } from "protractor";
import { BasePage } from "../../pages/base.po";

export class AppointmentsPage extends BasePage {

    readonly viewDropDownBox:ElementFinder = element(by.id("combobox-1204-trigger-picker"));
    readonly loadResults : ElementArrayFinder = element.all(by.xpath("//table[contains(@id, 'tableview-1090-record')]"));
    
    public async loading() {
        let loadingText: ElementFinder = element(by.xpath("//div[contains(@id,'loadmask') and text()='Loading...']/ancestor::div[@style='']"));
        await this.actions.waitUntilElementInVisible(loadingText, "Waiting For Load Results");
    }

    public async clickOnViewDropDownBox() {
        await this.actions.click(this.viewDropDownBox,"Clicking on ViewDropDownBox")  
    }

    public async selectUserFromViewDropDownBox(user:string) {
        let usersViewDropDownBox: ElementFinder = element(by.xpath("//div[text()='"+user+"']"));
        await this.actions.click(usersViewDropDownBox,"Selection User From ViewDropDownBox")
        await this.loading();
    }
    public async verifyingLoadResultsUnderOrder() {        
        return await this.loadResults.count();        
    }

    public async verifyingDispatchedUnderOderStatus() {
        let dispatchedText:string;
        let dispatchedXPath : ElementFinder = element(by.xpath("//*[@id='jbAppointmentGrid-body']//div[text()='Dispatched']"));
        dispatchedText = await dispatchedXPath.getText()
        return await dispatchedText;
    }
    
    public async verifyingDateAndTimeUnderTrainEta() {
        let trainEtaText:string;
        let trainEtaXPath : ElementFinder = element(by.xpath("//*[@id='jbAppointmentGrid-body']//div[text()='Dispatched']/../following-sibling::td[10]"));
        await trainEtaXPath.getText();
        return await trainEtaText;
    }

    public async verifyingPresenceOfLoadUnderOrder(load:string) {
        let loadNumber:string;
        let loadNumberXpath : ElementFinder = element(by.xpath("//table[contains(@id, 'tableview')]//a[text()='"+load+"']"));
        try {
            if (await loadNumberXpath.isPresent()) {
                loadNumber = await loadNumberXpath.getText();
            }
        } catch (error) {
            console.log("Error In verifyingPresenceOfLoadUnderOrde" + error);
        }
        return await loadNumber;
    }
    
}