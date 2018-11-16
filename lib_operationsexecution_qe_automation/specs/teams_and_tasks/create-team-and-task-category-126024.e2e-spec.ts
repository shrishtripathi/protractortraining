import { DataProvider } from "../../data/dataProvider";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { CommonFunctions } from "../../utilities/common-functions";
import { PlatformHomePage } from "../../pages/teams_and_tasks/platform-homepage.po";
import { AdministrationPage } from "../../pages/teams_and_tasks/administration-page.po";
import { browser } from "protractor";
let myJbHuntHomePage = new MyJbHuntHomePage();
let platformHomePage=new PlatformHomePage();
let administrationPage=new AdministrationPage();
let commonFunctions = new CommonFunctions();
let using=require('jasmine-data-provider');
//TC 126024 Create team and task category
using(DataProvider.TC_126024, async function(data){
    describe("Create team and task category", () => {
    
        let teamName: string
        let initial:string
        let name:string
        it("Launch 360 Platform", async () => {
            await platformHomePage.navigateToAppHome(platformHomePage.platform360URL);           
        });

        it("Verifying that redirected to 360 platform Page", async () => {
            await expect<any>(platformHomePage.getPageTitle()).toBe(data.platformPageTitle);
        });

        it("Should click on administration",async ()=> {
            await platformHomePage.clickOnAdministration();
        });

        it("Verifying that redirected to administration Page", async () => {
            await expect<any>(administrationPage.getPageTitle()).toBe(data.pageTitle);
        });

        it("Should hover on circle icon and select team management option",async ()=> {
            await administrationPage.hoverOnCircleIconAndSelectOption(data.optionName);
        });

        it("Should click on Add Team Button",async ()=> {
            await administrationPage.click(administrationPage.addTeamButton);
        });

        it("Should enter test to team name input field",async ()=> {
            initial=await commonFunctions.randomNameGenarator(2);
            teamName=data.team+initial;
            await administrationPage.setText(administrationPage.teamNameInputField,teamName);
        });

        it("Should enter team leader name to team leader input field",async ()=> {
            let teamLeader=await commonFunctions.randomNameGenarator(5);
            await administrationPage.setText(administrationPage.teamLeaderInputField,teamLeader);
        });
        
        it("Should enter Team member name as Jared Shepherd",async ()=> {
            await administrationPage.addTeamMembers(data.teamMembername1,data.valueToSelect1);
        });

        it("Should click on Add Team member Button",async ()=> {
            await administrationPage.click(administrationPage.addTeamMemberButton);
        });

        it("Should enter Team member name as Andrew Newsom",async ()=> {
            await administrationPage.addTeamMembers(data.teamMembername2,data.valueToSelect2);
        });

        it("Should click on create Button",async ()=> {
            await administrationPage.click(administrationPage.createButton);
        });

        it("Verifying success message",async ()=> {
            await expect<any>(administrationPage.verifySuccessMessage(administrationPage.successMessage)).toBe(true);
        });

        it("Should hover on circle icon and select task category management option",async ()=> {
            await administrationPage.selectOption(data.optionName1);
        });

        it("Should click on three dots",async ()=> {
            await administrationPage.click(administrationPage.threeDots);
        });

        it("Should click on new task category",async ()=> {
            await administrationPage.click(administrationPage.newTaskCategory);
        });

        it("Should enter test to name input field",async ()=> {
            initial=await commonFunctions.randomNameGenarator(3);
            name=data.team+initial;
            await administrationPage.setText(administrationPage.nameInputField,name);
        });

        it("Should click the Available Roles drop down and select the first 3 roles",async ()=> {
            await administrationPage.setDropDown(administrationPage.availableRolesDropdown,data.availableRolesDropdownOption1);
            await administrationPage.setDropDown(administrationPage.availableRolesDropdownAfterSelectingOption,data.availableRolesDropdownOption2);
            await administrationPage.setDropDown(administrationPage.availableRolesDropdownAfterSelectingOption,data.availableRolesDropdownOption3);
        });

        it("Should Click the Available Responsibilities drop down and select the first 3",async ()=> {
            await administrationPage.setDropDown(administrationPage.availableResponsibilitesDropdown,data.availableResponsibilitesDropdownOption1);
            await administrationPage.setDropDown(administrationPage.availableResponsibilitesDropdownAfterSelectingOption,data.availableResponsibilitesDropdownOption2);
            await administrationPage.setDropDown(administrationPage.availableResponsibilitesDropdownAfterSelectingOption,data.availableResponsibilitesDropdownOption3);
        });

        it("Should Click the Team Responsible field and type your team name",async ()=> {
            await administrationPage.setResponsibleTeam(administrationPage.availableResponsibileForBackUpTaskAssignmnetDropdown,teamName,initial,teamName);
        });
        
        it("Should enter team member",async ()=> {
            await administrationPage.setTeamMember(teamName);
        });

        it("Should enter role",async ()=> {
            await administrationPage.setUserRole(data.applicationSupportOption);
        });

        it("Should enter DCS to business unit dropdown",async ()=> {
            await administrationPage.setBusinessUnitDropDown(data.businessUnitDropdownOption);
        });

        it("Should click on create Button",async ()=> {
            await administrationPage.click(administrationPage.createButton);
            browser.refresh();
        });

        it("Should hover on circle icon and select task category management option",async ()=> {
            await administrationPage.selectOption(data.optionName1);
        });

        xit("Verifying success message",async ()=> {
            await expect<any>(administrationPage.verifySuccessMessage(administrationPage.createMessage)).toBe(true);
        });

        it("Should click on task category",async ()=> {
            await administrationPage.clickOnTaskCategory(name);  
        });

        it("Should click on inactive button",async ()=> {
            await administrationPage.click(administrationPage.inactiveButton);
        });

        it("Should click on yes button",async ()=> {
            await administrationPage.click(administrationPage.conformationButton);
        });

        it("Verifying success message",async ()=> {
            await expect<any>(administrationPage.verifySuccessMessage(administrationPage.InactiveMessage)).toBe(true);
        });


    });
});
