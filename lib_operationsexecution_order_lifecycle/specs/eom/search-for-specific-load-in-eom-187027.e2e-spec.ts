import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let eomE2EComponents = new EOME2EComponents();
let using = require('jasmine-data-provider');

let searchLoadData = Object.assign({}, DataProvider.Tc_187027);

//TC 187027: Search for specific load in EOM
using(searchLoadData, async function (data) {
    describe('Search for specific load in EOM', async () => {

        describe("EOM 1Pick/1Drop Load Create", async () => {
            await eomE2EComponents.eomOnePickOrDropLoadCreate(data.onePickDropLoadData);
        });

        describe("Search for specific load in EOM", async () => {
            await eomE2EComponents.eomLoadSearch(data.loadSearchData, data.onePickDropLoadData);
        });
        
    });
});
