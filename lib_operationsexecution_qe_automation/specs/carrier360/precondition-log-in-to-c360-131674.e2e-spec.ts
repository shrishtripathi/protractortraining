import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { DataProvider } from '../../data/dataProvider';

let myJbHuntHomePage = new MyJbHuntHomePage();
let using = require('jasmine-data-provider');

// TC #131674 :C360 | Log in to C360
using(DataProvider.Tc_131689, async function (data) {

    describe('Log in to C360', () => {

        it('Login into C360', async () => {
            let results: boolean = await myJbHuntHomePage.loginIntoCarrier360(data.user, data.password);
            await expect(results).toBeTruthy();
        });

    });

});
