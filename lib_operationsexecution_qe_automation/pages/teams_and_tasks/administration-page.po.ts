import { browser, by, element, ElementFinder, ExpectedConditions, protractor, ElementArrayFinder } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from '../base.po';

export class AdministrationPage extends BasePage {
    readonly circleIcon: ElementFinder = element(by.xpath("//span[@id='nav-sidebar-control' and @class='pull-right']"));
    readonly addTeamButton: ElementFinder = element(by.id("addTeam"));
    readonly teamNameInputField: ElementFinder = element(by.xpath("//input[@placeholder='Team Name']"));
    readonly teamLeaderInputField: ElementFinder = element(by.xpath("//input[@placeholder='Team Leader']"));
    readonly addTeamMemberButton: ElementFinder = element(by.xpath("//a[text()='Add Team Member']"));
    readonly createButton: ElementFinder = element(by.xpath("//button[contains(text(),'Create')]"));
    readonly successMessage: ElementFinder = element(by.xpath("//*[text()='Success']"));
    readonly addAssignmentButton: ElementFinder = element(by.id("addtask"));
    readonly assignmentTitleInputField: ElementFinder = element(by.xpath("//input[@placeholder='Assignment Title']"));
    readonly responsibleTeamsInputField: ElementFinder = element(by.xpath("//input[@placeholder='Responsible Teams']"));
    readonly appointementOwner: ElementFinder = element(by.xpath("//div[text()='Appointment Owner ']"));
    readonly valueInputField: ElementFinder = element(by.xpath("//span[text()='Type']//ancestor::datatable-header//parent::div//datatable-body[@class='datatable-body']//input[@type='text']"));
    readonly createMessage: ElementFinder = element(by.xpath("//*[text()='Create']"));
    readonly searchTeamManagementInputField: ElementFinder = element(by.id("teamMgmtNewSearch"));
    readonly peopleIcon: ElementFinder = element(by.xpath("//span[text()='Team Details']/parent::div//a[contains(@class,'icon')]"));
    readonly searchTaskManagementInputField: ElementFinder = element(by.id("TAMNewearch"));
    readonly removeTaskAssignmentButton: ElementFinder = element(by.xpath("//button[contains(text(),'Remove Task Assignment')]//parent::div"));
    readonly conformationButton: ElementFinder = element(by.id("btn-confirm"));
    readonly removeMessage: ElementFinder = element(by.xpath("//*[text()='Remove']"));
    readonly teamManagementFilterButton: ElementFinder = element(by.xpath("//span[contains(@class,'FilterIconStyle')]//ancestor::a"));
    readonly userManagementFiltorButton: ElementFinder = element(by.xpath("//span[contains(@class,'icon-jbh_filter')]//ancestor::a"));
    readonly taskManagementFiltorButton: ElementFinder = element(by.xpath("//span[contains(@class,'filterIconSection')]//ancestor::a"));
    readonly notificationManagementFiltorButton: ElementFinder = element(by.xpath("//button[contains(@class,'transparentButton')]"));
    readonly taskCategoryDropDown: ElementFinder = element(by.xpath("//*[text()='Task Category ']//ancestor::div[@id='filterlist']//a"));
    readonly taskNameDropDown: ElementFinder = element(by.xpath("//*[text()='Task Name ']//ancestor::div[@id='filterlist']//a"));
    readonly categoryDropDown: ElementFinder = element(by.xpath("//*[text()='Category ']//ancestor::div[@id='filterlist']//a[contains(@id,'arrow')]"));
    readonly subCategoryDropDown: ElementFinder = element(by.xpath("//*[text()='Subcategory ']//ancestor::div[@id='filterlist']//a[contains(@id,'arrow')]"));
    readonly typeDropDown: ElementFinder = element(by.xpath("//*[text()='Type ']//ancestor::div[@id='filterlist']//a[contains(@id,'arrow')]"));
    readonly criteriaDropDown: ElementFinder = element(by.xpath("//*[text()='Criteria ']//ancestor::div[@id='filterlist']//a[contains(@id,'arrow')]"));
    readonly subscribedUserInternalDropDown: ElementFinder = element(by.xpath("//*[text()='Subscribed User (Internal) ']//ancestor::div[@id='filterlist']//a[contains(@id,'arrow')]"));
    readonly createdByDropDown: ElementFinder = element(by.xpath("//*[text()='Created By ']//ancestor::div[@id='filterlist']//a[contains(@id,'arrow')]"));
    readonly lastUpdatedByDropDown: ElementFinder = element(by.xpath("//*[text()='Last Updated By ']//ancestor::div[@id='filterlist']//a[contains(@id,'arrow')]"));
    readonly teamNameDropDown: ElementFinder = element(by.xpath("//*[text()='Team Name ']//ancestor::div[@id='filterlist']//a"));
    readonly teamStatusDropDown: ElementFinder = element(by.xpath("//*[text()='Team Status ']//ancestor::div[@id='filterlist']//a"));
    readonly moduleDropDown: ElementFinder = element(by.xpath("//*[text()='Module ']//ancestor::div[@id='filterlist']//a"));
    readonly taskListDropDown: ElementFinder = element(by.xpath("//*[text()='Task List ']//ancestor::div[@id='filterlist']//a"));
    readonly triggerDropDown: ElementFinder = element(by.xpath("//*[text()='Trigger ']//ancestor::div[@id='filterlist']//a"));
    readonly userRoleDropDown: ElementFinder = element(by.xpath("//*[text()='User Role ']//ancestor::div[@id='filterlist']//a"));
    readonly businessUnitDropDown: ElementFinder = element(by.xpath("//*[text()='Business Unit ']//ancestor::div[@id='filterlist']//a"));
    readonly serviceOfferingDropDown: ElementFinder = element(by.xpath("//*[text()='Service Offering ']//ancestor::div[@id='filterlist']//a"));
    readonly notificationStatusDropDown: ElementFinder = element(by.xpath("//*[text()='Status ']//ancestor::div[@id='filterlist']//a[contains(@id,'arrow')]"));
    readonly taskAssignmentStatusDropDown: ElementFinder = element(by.xpath("//*[text()='Task Assignment Status ']//ancestor::div[@id='filterlist']//a"));
    readonly corporateAccountDropDown: ElementFinder = element(by.xpath("//*[text()='Corporate Account ']//ancestor::div[@id='filterlist']//a"));
    readonly teamLeaderDropDown: ElementFinder = element(by.xpath("//*[text()='Team Leader ']//ancestor::div[@id='filterlist']//a"));
    readonly teamLeaderSearchInput: ElementFinder = element(by.xpath("//*[text()='Team Leader ']//ancestor::div[@id='filterlist']//input[@name='typeAheadVal']"));
    readonly corporateAccountSearchInput: ElementFinder = element(by.xpath("//*[text()='Corporate Account ']//ancestor::div[@id='filterlist']//input[@name='typeAheadVal']"));
    readonly ccTestCo360: ElementFinder = element(by.xpath("//li//a/*[text()='360Cc Test Co']/ancestor::a"));
    readonly resetAll: ElementFinder = element(by.linkText("Reset All"));
    readonly InactiveMessage: ElementFinder = element(by.xpath("//*[text()='Inactivate']"));
    readonly threeDots: ElementFinder = element(by.xpath("//i[contains(@class,'three-dots')]//parent::a"));
    readonly newTaskCategory: ElementFinder = element(by.xpath("//a[contains(text(),'New Task Category')]"));
    readonly nameInputField: ElementFinder = element(by.xpath("//input[@placeholder='Name']"));
    readonly availableRolesDropdown: ElementFinder = element(by.xpath("//input[@placeholder='Available Roles']"));
    readonly availableResponsibilitesDropdown: ElementFinder = element(by.xpath("//input[@placeholder='Available Responsibilites']"));
    readonly availableResponsibileForBackUpTaskAssignmnetDropdown: ElementFinder = element(by.xpath("//input[@placeholder='Team Responsible for Backup Task Assignment']"));
    readonly teamMemberDropdown: ElementFinder = element(by.xpath("//span[@class='btn btn-default btn-tag form-control ui-select-toggle']//parent::div"));
    readonly availableRolesDropdownAfterSelectingOption: ElementFinder = element(by.xpath("//div[contains(text(),'Available Roles')]//parent::div//span"));
    readonly availableResponsibilitesDropdownAfterSelectingOption: ElementFinder = element(by.xpath("//div[contains(text(),'Available Responsibilites')]//parent::div//span"));
    readonly inactiveButton: ElementFinder = element(by.xpath("//button[text()='Inactivate']"));
    readonly createNotification: ElementFinder = element(By.xpath("//a[text()='Create Notification']"));
    readonly notificationTypeDropdown: ElementFinder = element(by.xpath("//input[@placeholder='Notification Type']"));
    readonly generalDropDownArrow: ElementFinder = element(by.xpath("//div[contains(text(),'General')]"));
    readonly daysTillExpirationInputField: ElementFinder = element(by.xpath("//label[contains(text(),'Days Till Expiration')]//parent::div//input"));
    readonly accountDropDownArrow: ElementFinder = element(by.xpath("//div[contains(text(),'Account')]"));
    readonly addContactButton: ElementFinder = element(by.xpath("//button[text()='Add Contact']"));
    readonly contactTypeDropdown: ElementFinder = element(by.xpath("//span[text()='Contact Type' and @class='ui-select-placeholder text-muted']//parent::span//parent::div"));
    readonly contactNameInputField: ElementFinder = element(by.xpath("//input[@placeholder='Enter Contact Name']"));
    readonly contactNameOption: ElementFinder = element(by.xpath("//p[text()=' Jared.Shepherd@jbhunt.com']//parent::div"));
    readonly notification: ElementFinder = element(by.xpath("(//datatable-body-cell//div//span[contains(text(),'Account')])[1]"));
    readonly continueButton: ElementFinder = element(by.xpath("//button[text()='Continue']"));

    public async hoverOnCircleIconAndSelectOption(optionName: string) {
        await this.waitForActionToCompleteTT();
        await this.actions.click(this.circleIcon, "Circle icon");
        await this.actions.shortWait("")
        let option: ElementFinder = element(by.xpath("//span[text()='" + optionName + "']//parent::a"));
        await this.actions.waitUntilElementClickable(option, "waiting");
        await this.actions.click(option, "Selecting " + optionName + " ");
        await this.waitForActionToCompleteTT();
    }

    public async selectOption(optionName: string) {
        let option: ElementFinder = element(by.xpath("//span[text()='" + optionName + "']//parent::a"));
        await this.actions.click(option, "Selecting " + optionName + " ");
        await this.waitForActionToCompleteTT();
    }

    public async click(element: ElementFinder) {
        await this.actions.waitUntilElementClickable(element, "Waiting for the element to clickable");
        await this.actions.click(element, "Click on " + element + " ");
        await this.waitForActionToCompleteTT();
    }

    public async setText(element: ElementFinder, textToEnter: string) {
        await this.actions.setText(element, textToEnter, "Enter " + textToEnter + " to " + element + " ");
        await this.waitForActionToCompleteTT();
    }

    public async addTeamMembers(textToEnter: string, option: string) {
        let xpath = element(by.xpath("(//datatable-row-wrapper[@class='datatable-row-wrapper']//input[@type='search'])"));
        await this.actions.setText(xpath, textToEnter, "");
        await this.waitForActionToCompleteTT();
        let optionvalue = element(by.xpath("//h5[text()='" + option + "']"));
        await this.actions.click(optionvalue, "Selecting option");
        await this.waitForActionToCompleteTT();
    }

    public async verifySuccessMessage(element: ElementFinder) {
        await this.actions.waitUntilElementVisible(element, "Waiting");
        return await this.actions.isElementPresent(element, "Success message");
    }

    public async setResponsibleTeam(dropdownname: ElementFinder, textToEnter: string, value: string, valueToSelect: string) {
        await this.actions.setText(dropdownname, textToEnter, "Enter " + textToEnter + " ");
        await this.waitForActionToCompleteTT();
        let xpath = await element(by.xpath("//strong[contains(text(),'" + valueToSelect + "')]//parent::div//parent::a"))
            || await element(by.xpath("//div[contains(text(),'" + value + "')]"))
        await this.actions.click(xpath, "Selecting option");
        await this.waitForActionToCompleteTT();
    }



    public async setCategoryDropdowns(DownName: string, dropdownOption: string) {
        let dropdown = element(by.xpath("//span[text()='" + DownName + "']//parent::span"));
        await this.actions.click(dropdown, "Click on task category dropdown");
        let option = element(by.xpath("//div[text()='" + dropdownOption + "']//parent::a"));
        await this.actions.click(option, "Click on " + dropdownOption + " task category dropdown");
        await this.waitForActionToCompleteTT();
    }

    public async setTeamMember(textToEnter: string) {
        await this.waitForActionToCompleteTT();
        let team = element(by.xpath("//span[text()='Team or Team Member']//ancestor::datatable-header//parent::div//datatable-body[@class='datatable-body']//div[@class='ui-select-container dropdown open']"))
        await this.actions.setText(team, textToEnter, "Team member dropdown");
        let option = element(by.xpath("//strong[text()='" + textToEnter + "']//parent::div//parent::a"));
        await this.actions.click(option, "Click on option");
        await this.waitForActionToCompleteTT();
    }

    public async setUserRole(OptionToSelect: ElementFinder) {
        let role = element(by.xpath("//span[text()='Team or Team Member']//ancestor::datatable-header//parent::div//datatable-body-cell[@class='datatable-body-cell sort-active']//div[@class='ui-select-container ui-select-multiple dropdown form-control open']"));
        await this.actions.click(role, "Click on role dropdown");
        let option = element(by.xpath("//div[text()='" + OptionToSelect + "']"));
        await this.actions.click(option, "Click on option");
        await this.waitForActionToCompleteTT();
    }

    public async setType(OptionToSelect: string) {
        let role = element(by.xpath("//span[text()='Type']//ancestor::datatable-header//parent::div//datatable-body[@class='datatable-body']//div[@class='ui-select-container dropdown open']"));
        await this.actions.click(role, "Click on type dropdown");
        let option = element(by.xpath("//div[text()='" + OptionToSelect + "']"));
        await this.actions.click(option, "Click on option");
        await this.waitForActionToCompleteTT();
    }

    public async setValueInputField(textToEnter: string, optionValue: string) {
        await this.actions.setText(this.valueInputField, textToEnter, "Set value to value input field");
        let option = element(by.xpath("//div[text()='" + optionValue + "']"));
        await this.actions.click(option, "Click on option");
    }

    public async clickOnTeam(teamName: string) {
        await this.waitForActionToCompleteTT();
        let team = element(by.xpath("//span[text()='" + teamName + "']/.."));
        await this.actions.click(team, "Click on option");
        await this.waitForActionToCompleteTT();

    }

    public async verifyTeamName(teamName: string) {
        let team = element(by.xpath("//span[text()='" + teamName + "']"));
        return await this.actions.getText(team, "text of team name");
    }

    public async verifyFilterTabsPresent() {
        let filterTabs: ElementArrayFinder = element.all(by.xpath("//div[@id='filtertitle']"));
        return await this.actions.isElementPresent(filterTabs.get(0), "Is Element present");
    }

    public async verifyListPresent(text: string) {
        let list: ElementFinder = element(by.xpath("//*[@class='datatable-body']//*[contains(text(),'" + text + "')]"));
        return await this.actions.isElementPresent(list, "Is Element present");
    }

    public async checkOrUncheckOptionFromDropDown(option: string, ) {
        let checkbox: ElementFinder = element(by.xpath("//input[contains(@id,'" + option + "')]"));
        if (option === 'fltChkCaroline Snodgrass' || option === 'fltChkRCON774') {
            browser.executeScript("arguments[0].scrollIntoView();", checkbox.getWebElement());
        }
        await checkbox.click();
        await this.waitForActionToCompleteTT();
    }

    public async setDropDown(dropDownName: ElementFinder, optionToSelect: string) {
        await this.actions.click(dropDownName, "Click on dropdown");
        let option = element(by.xpath("//div[text()='" + optionToSelect + "']//parent::a"));
        await this.actions.click(option, "Click on dropdown");
        await this.waitForActionToCompleteTT();
    }

    public async setBusinessUnitDropDown(optionToSelect: string) {
        let businessRole: ElementFinder = element(by.xpath("(//span[text()='Business Unit']//ancestor::datatable-header//parent::div//datatable-body[@class='datatable-body']//input[@class='form-control ui-select-search'] )[2]"));
        await this.actions.click(businessRole, "Click on dropdown");
        let option = element(by.xpath("//div[text()='" + optionToSelect + "']//parent::a"));
        await this.actions.click(option, "Click on option");
        await this.waitForActionToCompleteTT();
    }

    public async clickOnTaskCategory(teamName: string) {
        try {
            console.log("Inside try")
            do {
                console.log("Inside do")
                let team = element(by.xpath("//span[text()='" + teamName + "']/.."));
                try {
                    let elementIsPresent: boolean = await this.actions.isElementPresent(team, "");
                    console.log("presence", elementIsPresent)
                    if (elementIsPresent == true) {
                        console.log("Inside loop", elementIsPresent)
                        await this.actions.click(team, "Click on option");
                        await this.waitForActionToCompleteTT();
                    }
                } catch (e) {
                    console.log("Error : " + e);
                }
            }

            while (await this.clickNextButton());
        } catch (e) {
            await console.log("Error" + e);
        }
    }

    public async clickNextButton() {
        let nextButton = element(by.xpath("//a[@id='a-nextPage']"));
        browser.executeScript("arguments[0].scrollIntoView();", nextButton.getWebElement());
        let nextButtonIsDisabled: boolean = await element(By.xpath("//a[@id='a-nextPage']//parent::li[@class='disabled']")).isPresent();
        console.log("nextButtonIsDisabled", nextButtonIsDisabled);
        if (!nextButtonIsDisabled) {
            console.log("inside next button enabled");
            browser.executeScript("arguments[0].scrollIntoView();", nextButton.getWebElement());
            await this.actions.click(nextButton, "Click on option");
            return true;
        }
        else {
            console.log("completed pagination, next button is disabled no data is found with given criteria");
            return false;
        }

    }

    public async setCorporateAccount(textToEnter: string, optionToSelect: string) {
        let corporateAccount = element(by.xpath("//input[@placeholder='Corporate Account']"));
        await this.actions.setText(corporateAccount, textToEnter, "Enter text");
        let option = element(by.xpath("//div[text()='" + optionToSelect + "']//parent::a"));
        await this.actions.click(option, "Selcting option");
    }

    public async verifyNotificationIsInactive() {
        await browser.refresh();
        let xpath = element(by.xpath("//datatable-body-cell//div//span[contains(text(),'Account')]//ancestor::datatable-body-row"));
        await this.actions.waitUntilElementVisible(xpath, "Waiting");
        let attribute = xpath.getAttribute("class");
        return attribute;
    }

    public async clickOnInactivateButton() {
        await this.actions.waitUntilElementVisible(this.inactiveButton, "Waiting");
        await this.actions.click(this.inactiveButton, "Click on inactivate button");
        await this.waitForActionToCompleteTT();
    }


}