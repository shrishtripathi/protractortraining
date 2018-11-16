import { DataProvider } from "../../data/dataProvider";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { MaximoHomePage } from "../../pages/asset_administration/maximo-home.po";
import { Persongroups } from "../../pages/asset_administration/person_groups.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let maximoHomePage = new MaximoHomePage();
let personGroupsPage = new Persongroups();
let using = require('jasmine-data-provider');


//TC #129960: Maximo_9 Assign a person to Person Group
using(DataProvider.Tc_129960, async function (data) {

    describe(" Assign a person to Person Group", () => {
        let personNames: string[] = [];
        it("Should open maximo url", async () => {
            await maximoHomePage.openUrl(myJbHuntHomePage.maximoURL);
        });

        it("Verifying that maximo page is displayed", async () => {
            await expect(maximoHomePage.getPageTitle()).toBe(data.maximoTitle);
        });

        it("Login into maximo application ", async () => {
            await maximoHomePage.login(data.username, data.password);
        });

        it("Wait untill maximo screen loads", async () => {
            await maximoHomePage.waitUntillWelcomeScreenLoad();
        });
        it("Click on three line icon on left corner of the screen ", async () => {
            await maximoHomePage.clickonThreeLineIcon();
        });
        it("Select people groups by hovering on administration and resources ", async () => {
            await maximoHomePage.selectPersonGroups();
        });
        it("In the box under Person Groups, type in M8-Parts and hit enter.", async () => {
            await personGroupsPage.setText(personGroupsPage.personGroups, data.m8Parts);
            await personGroupsPage.actions.sendKeysEnter("enter")
        });
        it("Click on the M8-PARTS hyperlink.", async () => {
            await personGroupsPage.clickLink(data.linkText);
        });
        it("Click on the New Row Button", async () => {

            personNames = await personGroupsPage.getAllPersonsName();
            await personGroupsPage.click(personGroupsPage.newRowButton);
            console.log("personNames " + personNames)
        });
        it("Click the '>>' icon next to where it says Person", async () => {
            await personGroupsPage.click(personGroupsPage.doubleArrowImage);
        });
        it("Click the Magnifying Glass Icon that says Select Value.", async () => {
            await personGroupsPage.click(personGroupsPage.selectValue);
        });
        it("Select a person hyperlink who is not currently on the list", async () => {
            let names = await personGroupsPage.selectPersonName(personNames);
            console.log("names " + names);
            await personGroupsPage.clickPerson(names[0]);
        });
        it("In the box next to where is says Sequence, type in a number higher than the other people displayed on the screen. ", async () => {
            await personGroupsPage.addSequenceNumberToPerson();
        });
        it("Click the Save Icon at the top of the screen", async () => {
            let flag = await personGroupsPage.verifySaveStatus();
            expect(flag).toBeTruthy();
        });



    });
});