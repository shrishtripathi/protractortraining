import { DataProvider } from "../../data/dataProvider";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { CentralCustomerInformationHomePage } from "../../pages/central_customer_information/central-customer-information-home.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let centralCustomerInformationHomePage = new CentralCustomerInformationHomePage();
let using = require('jasmine-data-provider');

//TC #134541 Hawk One Screen - get to CCI
using(DataProvider.Tc_134541, async function (data) {

    describe("Hawk One Screen - get to CCI", () => {

        it("Should open My JBHunt url", async () => {
            await myJbHuntHomePage.openUrl(myJbHuntHomePage.myJbhuntUrl);
            await myJbHuntHomePage.loginIfRequired();
        });

        it("Should cick on Show my app link on JbHunt home page", () => {
            myJbHuntHomePage.clickOnShowMoreAppLink();
        });

        it("Should click on Central Customer Information link from left Navigation", async () => {
            await myJbHuntHomePage.clickOnAppLink(data.centralCustomerInformationLink);
        });

        it("Verifying that Central Customer Information page is displayed", async () => {
            await expect(centralCustomerInformationHomePage.getPageTitle()).toBe(data.cciPageTitle);
        });

        it("Should click on Central Customer Information link from left Navigation", async () => {
            await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.buisinessSearch);
        });

    });

});