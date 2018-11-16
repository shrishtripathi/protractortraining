import { by, element } from 'protractor';
import { BasePage } from "./base.po";

export class TourPage extends BasePage {

  readonly orderNumberTextBox = element(by.xpath("//td[contains(., 'Add Segment')]/preceding-sibling::td[2]/input"))

  public async enterOrderNumber(orderNumber: string) {
    await this.actions.clearText(this.orderNumberTextBox, "Clear Order Number TextBox");
    await this.actions.setText(this.orderNumberTextBox, orderNumber, "Enter Order Number");
  };

}