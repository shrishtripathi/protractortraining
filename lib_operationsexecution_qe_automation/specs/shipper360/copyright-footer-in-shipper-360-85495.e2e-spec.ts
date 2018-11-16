
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { Shipper360HomePage } from '../../pages/shipper360/shipper360-homepage.po';
import { DataProvider } from '../../data/dataProvider';

let myJbHuntHomePage = new MyJbHuntHomePage();
let shipperHomePage = new Shipper360HomePage();

let using = require('jasmine-data-provider');

// TC #85495 : Shipper360|85266|Add JBH Copyright footer in Shipper 360 (with link to Terms and Conditions)
    describe('JBH Copyright footer in Shipper 360', () => {

        it('Login into Shipper360', async () => {
            await myJbHuntHomePage.navigateTo360HomePortal(myJbHuntHomePage.shipper360Url);
        });

        it('Navigate to Menu Tab', async () => {
            await shipperHomePage.clickOnNavigationPinIcon();
            await shipperHomePage.clickOnCarrierTabs(shipperHomePage.homeMenu);   
        });
        it('Click on terms and conditions', async () => {
            let result:boolean = await shipperHomePage.clickOnTermAndConditionLink();
            await expect(result).toBeTruthy();
        });
    });

