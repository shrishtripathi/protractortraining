import { DataProvider } from '../../data/dataprovider';
import { EOME2EComponents } from '../../e2eComponents/eom/eom.pc';


let using = require('jasmine-data-provider');
let eomE2EComponents = new EOME2EComponents();
let eomDispatchVerification = Object.assign({}, DataProvider.Tc_189147);

//Tc_189147: EOM ICS Dispatch Verification
using(eomDispatchVerification, async function (dispatchVerificationData) {

    describe("EOM ICS Dispatch Verification", async () => {

        await eomE2EComponents.eomIcsDispatchVerification(dispatchVerificationData)

    });
});
