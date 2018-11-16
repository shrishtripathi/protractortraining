import { browser, by, element, ElementFinder } from 'protractor';
import { DataProvider } from '../../data/dataProvider';
import { BasePage } from '../base.po';

export class MileageWebService extends BasePage {


    public async webServiceUrl(URL) {
        try {
            await this.actions.get(URL, "Testing Url " + URL);
            let valueXpath: ElementFinder = element(by.tagName("pre"));
            let value = await valueXpath.getText();
            return value;
        } catch (error) {
            console.log(error)
        }
    }

};
