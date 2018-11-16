import { DataProvider } from '../../data/dataProvider';
import { EOME2EComponents } from '../../e2eComponents/eom/eom.pc';

let eomE2EComponents = new EOME2EComponents()
let using = require('jasmine-data-provider');

let loadCreateData = Object.assign({}, DataProvider.Tc_184961);

// TC #184961: EOM High value load create
using(loadCreateData, async function (data) {

    describe("EOM High value load create ", async () => {
        await eomE2EComponents.eoMHighValueLoadCreate(data.eomHighValueLoadCreateData);
    })
});