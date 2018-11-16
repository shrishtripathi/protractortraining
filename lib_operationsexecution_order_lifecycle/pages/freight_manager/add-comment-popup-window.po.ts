import { by, element, ExpectedConditions, ElementFinder, ElementArrayFinder, protractor } from 'protractor';
import { BasePage } from '../base.po';

export class AddCommentsPage extends BasePage {

    readonly selectDropDown: ElementFinder = element(by.xpath("//select[@class='toolTipClass']/option[@value='A']"));
    readonly enterLocation: ElementFinder = element(by.xpath("//table[@id='frmOrderCommentsListing:dtNewCommentTable']//input[@type='text']"));
    readonly enterAnyComment: ElementFinder = element(by.xpath("//table[@id='frmOrderCommentsListing:dtNewCommentTable']//textarea"));
    readonly clickSaveComments: ElementFinder = element(by.xpath("//input[@value='Save Comments']"));

    verifyMessage: ElementFinder;

    public randomeStringGenrator(stringLength: number) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (var i = 0; i < stringLength; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };

    public async selectTypeDropDown() {
        await this.actions.click(this.selectDropDown, "Click on option from the type drop down");
    };

    public async enterLocationName(location: string) {
        await this.actions.click(this.enterLocation, "click on location textbox to reload");
        await this.actions.setText(this.enterLocation, location, "Enter Location");
    };

    public async enterComment(comment: string) {
        await this.actions.setText(this.enterAnyComment, comment, "Enter any Comment")
    };

    public async clickOnSaveCommentsButton() {
        await this.actions.click(this.clickSaveComments, "Click on Save Comments Button")
    };

    public async validateSuccessMessage() {
        let message: string;
        this.verifyMessage = await element(by.xpath("//table[@class='successMsg']"));
        this.actions.waitUntilElementVisible(this.verifyMessage, "Wait for element");
        return message = await this.actions.getText(this.verifyMessage, "getting the success message");
    };

}