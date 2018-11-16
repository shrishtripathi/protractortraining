import { DataProvider } from "../../data/dataProvider";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { CommonFunctions } from "../../utilities/common-functions";
import { PlatformHomePage } from "../../pages/teams_and_tasks/platform-homepage.po";
import { AdministrationPage } from "../../pages/teams_and_tasks/administration-page.po";
let myJbHuntHomePage = new MyJbHuntHomePage();
let platformHomePage=new PlatformHomePage();
let administrationPage=new AdministrationPage();
let commonFunctions = new CommonFunctions();
let using=require('jasmine-data-provider');
//TC 125748 Create team and attach new assignement
using(DataProvider.TC_125748, async function(data){
    describe("Create team and attach new assignementr", () => {
    
        let teamName: string
        let initial:string
    
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

        it("Should hover on circle icon and select task management option",async ()=> {
            await administrationPage.selectOption(data.optionName1);
        });

        it("Should click on Add assignment Button",async ()=> {
            await administrationPage.click(administrationPage.addAssignmentButton);
        });

        it("Should enter test to assignment title input field",async ()=> {
            let initials=await commonFunctions.randomNameGenarator(3);
            let assignmentTitle=data.team+initials;
            await administrationPage.setText(administrationPage.assignmentTitleInputField,teamName);
        });

        it("Should select customer experience to task category dropdown",async ()=> {
            await administrationPage.setCategoryDropdowns(data.taskCategoryDropdownName,data.taskCategoryOption);
        });

        it("Should enter responsible team name",async ()=> {
            await administrationPage.setResponsibleTeam(administrationPage.responsibleTeamsInputField,teamName,initial,teamName);
        });
               
        it("Should enter team member",async ()=> {
            await administrationPage.setTeamMember(teamName);
        });

        it("Should enter user role",async ()=> {
            await administrationPage.setUserRole(data.appointementOwnerOption);
        });

        it("Should Type dropdown value to Billing Party",async ()=> {
            await administrationPage.setType(data.typeDropdownValue);
        });

        it("Should enter jbhunt to value input field and 360 jbhunt",async ()=> {
            await administrationPage.setValueInputField(data.valueInputfield,data.value);
        });

        it("Should click on create Button",async ()=> {
            await administrationPage.click(administrationPage.createButton);
        });

        it("Verifying success message",async ()=> {
            await expect<any>(administrationPage.verifySuccessMessage(administrationPage.createMessage)).toBe(true);
        });

        it("Should hover on circle icon and select team management option",async ()=> {
            await administrationPage.selectOption(data.optionName);
        });

        it("Should enter team name tosearch input field",async ()=> {
            await administrationPage.setText(administrationPage.searchTeamManagementInputField,teamName);
        });

        it("Should click on team",async ()=> {
            await administrationPage.clickOnTeam(teamName);
        });

        it("Should click on people icon",async ()=> {
            await administrationPage.click(administrationPage.peopleIcon);
        });

        it("Should verify team name",async ()=> {
            await expect<any>(administrationPage.verifyTeamName(teamName)).toBe(teamName);
        });

        it("Should hover on circle icon and select task management option",async ()=> {
            await administrationPage.selectOption(data.optionName1);
        });

        it("Should enter task name tosearch input field",async ()=> {
            await administrationPage.setText(administrationPage.searchTaskManagementInputField,teamName);
        });

        it("Should click on team",async ()=> {
            await administrationPage.clickOnTeam(teamName);
        });

        it("Should click on remove task assignmnet button",async ()=> {
            await administrationPage.click(administrationPage.removeTaskAssignmentButton);
        });

        it("Should click on yes button",async ()=> {
            await administrationPage.click(administrationPage.conformationButton);
        });

        it("Verifying success message",async ()=> {
            await expect<any>(administrationPage.verifySuccessMessage(administrationPage.removeMessage)).toBe(true);
        });
        

    });

});