import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let using = require('jasmine-data-provider')
using(DataProvider.Tc_131689, async function (data) {

    //// TC #131672 : IE | Turn off Windows Integrated Authority
    describe('IE | Turn off Windows Integrated Authority', () => {

        it('Turn off Windows Integrated Authority', async () => {
            await myJbHuntHomePage.chanegIESettings(data.regisryPath);
        });
    });
});
