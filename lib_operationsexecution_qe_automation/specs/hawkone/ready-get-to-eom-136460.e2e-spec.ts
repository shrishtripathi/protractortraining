
import { browser } from 'protractor';
import { DataProvider } from '../../data/dataprovider';
import { MyJbHuntHomePage } from '../../pages/eom/my-jbhunt-home.po';


let myJbHuntHomePage = new MyJbHuntHomePage();
let using = require('jasmine-data-provider');

//TC #136460: 5.41HawkOne - READY get to EOM
using(DataProvider.Tc_136460, async function (data) {

    describe("HawkOne - READY get to EOM", () => {

        it("Open My JBHunt url", async () => {
            await myJbHuntHomePage.openEomUrl();
        });


    });

});
