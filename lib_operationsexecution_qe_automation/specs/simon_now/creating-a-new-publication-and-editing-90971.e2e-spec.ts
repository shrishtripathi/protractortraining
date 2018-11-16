import { SimonNowHomePage } from "../../pages/simon_now/simon-now-home.po";
import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { CommonFunctions } from "../../utilities/common-functions";

let simonNowHomePage = new SimonNowHomePage();
let commonFunctions = new CommonFunctions();
let using = require('jasmine-data-provider');

//TC_90971: Creating a new Publication and editing
using(DataProvider.TC_90971, async function (data) {
    describe('Creating a new Publication and editing', () => {
        let randomNumber:string;
        let randomName:string;
        it('Should open simon now application', async () => {
            await simonNowHomePage.navigateToAppHome(simonNowHomePage.simonNowUrl);            
        });

        it("Verifying that redirected to Simon Now Page", async () => {
            await expect<any>(simonNowHomePage.getPageTitle()).toBe(data.simonNowPageTitle);
        });

        it('Shouls click the New Publication button.', async () => {
            await simonNowHomePage.clickOnButton(data.newPublicatioButton);
        });

        it('Should enter code', async () => {
            randomNumber = await commonFunctions.randomNumberGenarator(8);
            await simonNowHomePage.setText(simonNowHomePage.codeInputField,randomNumber);
        });

        it('Should enter name', async () => {
            randomName=await commonFunctions.randomNameGenarator(4);
            await simonNowHomePage.setText(simonNowHomePage.nameInputField,randomName);
        });

        it('Should select Type as "carrier"', async () => {
            await simonNowHomePage.setOptionFromDropDown(data.typeDropDownOption, simonNowHomePage.typeDropdown);
        });

        it('Should select Custom Format as "JBH"', async () => {
            await simonNowHomePage.scrollintoView(simonNowHomePage.customFormatDropdown);
            await simonNowHomePage.setOptionFromDropDown(data.customFormatDropDownOption, simonNowHomePage.customFormatDropdown);
        });

        it('Should click the Update button', async () => {
            await simonNowHomePage.clickOnButton(data.updateButton);
        });

        it('Verifying publication saved sucess message', async () => {
            await expect<any>(simonNowHomePage.getElementText(simonNowHomePage.publicationSavedMessage)).toBe(data.publicationSavedSucessMessage);
        });

        it('Should click on new publication. ', async () => {
            await simonNowHomePage.clickOnAutopopulatedText(randomNumber);
        });

        it('Should enter text in instructions text box', async () => {
            await simonNowHomePage.setText(simonNowHomePage.instructions,data.instructions);
        });

        it('Should click the Update button', async () => {
            await simonNowHomePage.clickOnButton(data.updateButton);
        });

        it('Verifying publication saved sucess message', async () => {
            await expect<any>(simonNowHomePage.getElementText(simonNowHomePage.publicationSavedMessage)).toBe(data.publicationSavedSucessMessage);
        });

    });

});