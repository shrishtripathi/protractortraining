import { DataProvider } from '../../data/dataProvider';
import { AccountsPage } from '../../pages/accounts/accounts.po';

let accountsPage = new AccountsPage();
let using = require('jasmine-data-provider');

// PreCondition TC #185430: Locations Shipper/Receiver Verification
using(DataProvider.Tc_185430, async function (data) {

    describe("Locations Shipper/Receiver Verification", () => {

        it("Should open accounts page url ", async () => {
            await accountsPage.openAccountsUrl()
        });

        it("Should click on Location Icon", async () => {
            await accountsPage.clickLocationIcon();
        });

       /*  it("Enter a Shipper Code", async () => {
            await accountsPage.setText(data.shipperCode);
        }); */

        it("Enter a Shipper Code and click on the populated matching business name", async () => {
            await accountsPage.clickOnPopulatedSearchList(data.shipperCode);
            await accountsPage.waitForSpinner();
        });

        it('Verify if the role has Shipper in it ', async () => {
            let role = await accountsPage.verifyShipperRole()

            switch (role) {
                case 'Shipper, Receiver':
                    expect(role).toBe('Shipper, Receiver')
                    break;

                case 'Shipper':
                    expect(role).toBe('Shipper')
                    break;

                default:
                    expect(role).toBe('Receiver')
                    break;
            }
        });

        /* it("Enter a Shipper Code", async () => {
            await accountsPage.setText(data.receiverCode);
        }); */

        it("Enter a Shipper Code and click on the populated matching business name", async () => {
            await accountsPage.clickOnPopulatedSearchList(data.receiverCode);
            await accountsPage.waitForSpinner();
        });

        it('Verify if the role has Shipper in it ', async () => {
            let role = await accountsPage.verifyShipperRole()

            switch (role) {
                case 'Shipper, Receiver':
                    expect(role).toBe('Shipper, Receiver')
                    break;

                case 'Shipper':
                    expect(role).toBe('Shipper')
                    break;

                default:
                    expect(role).toBe('Receiver')
                    break;
            }
        });
    });

});

