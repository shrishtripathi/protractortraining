import {  browser} from "protractor";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";
import { FreightManager2Page } from "../../pages/eom/freight-manager-2.po";


    let myJbHuntHomePage = new MyJbHuntHomePage();
    let freightManagerPage = new FreightManager2Page();
    let using = require('jasmine-data-provider');

    //TC #131664 : FM2 | Order Segment
    using(DataProvider.Tc_131689, async function (data) {

        describe("Order Segment", () => {

            it("Open Freight manager url", async () => {
                await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.freightManager2)
                
            });

            it("Go to order segment section", async () => {
                await freightManagerPage.selectOptionFromFreightManager2(data.tabName, data.option,data.orderSegmentTitle)
                await expect(browser.getCurrentUrl()).toContain(data.url);
            });

        });
        
    });
